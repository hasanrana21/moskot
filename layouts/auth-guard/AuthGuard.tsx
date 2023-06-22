import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const AuthGuard = (props: any) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("loginInfo"));
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
  if (isLoggedIn) {
    return <div>{props.children}</div>;
  } else {
    router.push("/login");
  }
};

export default AuthGuard;
