"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import axios from "axios";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axios.post(
      "https://backend-deply-project-fejosaufu-azir-uddins-projects.vercel.app/api/auth/register",
      // "http://localhost:5000/api/auth/register",
      userData
    );

    if (data.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

// Login service
export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axios.post(
      "https://backend-deply-project-fejosaufu-azir-uddins-projects.vercel.app/api/auth/login",
      // "http://localhost:5000/api/auth/login",
      userData
    );

    if (data.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
  (await cookies()).delete("refreshToken");
  redirect("/login");
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      name: decodedToken.name,
      email: decodedToken.email,
      phone: decodedToken.phone,
      role: decodedToken.role,
      address: decodedToken.address,
    };
  }

  return decodedToken;
};
