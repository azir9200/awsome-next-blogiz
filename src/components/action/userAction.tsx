"use server";

// import { FormValues } from "@/src/app/(MainLayout)/login/page";
import { UserData } from "@/src/app/(MainLayout)/register/page";

export const registerUser = async (data: UserData) => {
  const res = await fetch(`${process.env.BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userinfo = await res.json();
  return userinfo;
};

// export const loginUser = async (data: FormValues) => {
//   const res = await fetch(`${process.env.BACKEND_URL}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//     cache: "no-store",
//   });
//   const userInfo = await res.json();
//   return userInfo;
// };

// export default loginUser;
