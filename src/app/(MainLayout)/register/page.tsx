"use client";

import { registerUser } from "@/src/components/action/userAction";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    console.log(data);

    try {
      const res = await registerUser(data);
      if (res.success) {
        alert(res.message);
        router.push("/login");
      }
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Register <span className="text-accent">Now</span>
      </h1>

      <div className="grid lg:grid-cols-2 ">
        <div>
          <Image
            src="https://res.cloudinary.com/furthered/image/fetch/w_2500,c_fit,q_auto,f_auto/https://cdn.furthered.com/images/product/course/Nv7gBnOGMl-647f476aa3e22.jpg"
            width={500}
            height={200}
            alt="login page"
            className=" w-fit h-[85%]"
          />
        </div>

        <div className="card w-[70%] h-[70%] shadow-xl bg-base-100">
          <FXForm
            //! Only for development
            // defaultValues={{
            //   name: "First User",
            //   email: "user001@gmail.com",
            //   phone: "011223344",
            //   address: "New Road, ire",
            //   role: "user",
            //   password: "123456",
            // }}
            onSubmitAction={onSubmit}
          >
            <div className="py-3">
              <FXInput label="Name" name="name" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Email" name="email" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Mobile Number" name="phone" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Address" name="address" size="sm" />
            </div>
            {/* <div className="py-3">
            <FXInput label="Role" name="role" size="sm" />
          </div> */}
            <div className="py-3">
              <FXInput
                label="Password"
                name="password"
                size="sm"
                type="password"
              />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 text-default"
              size="lg"
              type="submit"
            >
              Registration
            </Button>
          </FXForm>
          <div className="text-center">
            Already have an account ? <Link href={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
