import React, { useState } from "react";
import AuthLayout from "@/layouts/auth/AuthLayout";
import UiButton from "@/components/ui/button";
import UiInput from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  // const [InfoLogin, setInfoLogin] = useState<object[]>([]);
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // let info = localStorage.getItem("loginInfo");
    // if (info) {
    //   let parseInfo = JSON.parse(info);
    //   parseInfo.push(form);
    //   localStorage.setItem("loginInfo", JSON.stringify(parseInfo));
    // } else {
    //   console.log("info22", info);
    //   InfoLogin.push(form);
    //   localStorage.setItem("loginInfo", JSON.stringify(InfoLogin));
    // }
    await localStorage.setItem("loginInfo", JSON.stringify(form));
    router.push("/home");
  };
  return (
    <AuthLayout>
      <div className="">
        <h3 className="lg:text-2xl text-lg text-center my-3">
          Welcome to <span className="font-medium">Back</span>
        </h3>
        <form onSubmit={handleSubmit}>
          <UiInput
            id="email"
            type="text"
            name="email"
            placeholder="Email Address"
            onChange={handleForm}
          />
          <UiInput
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleForm}
          />
          <p className="my-4 text-base cursor-pointer text-center">
            Forgot Password?
          </p>
          <div className="w-full">
            <UiButton
              type="submit"
              variant="primary"
              className="w-full"
              label="Submit"
            />
          </div>
          <p className="mt-4 lg:text-lg text-base cursor-pointer text-center">
            Do not have an account?
            <Link href="/" className="text-gray-500">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
