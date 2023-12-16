import React from "react";
import styles from "../styles/Signin.module.css";
import Logo from "@/components/utils/Logo";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.form__container}>
        <div className={styles.flex}>
          <div
            className={styles.left}
            style={
              (router.pathname = "/login"
                ? { borderBottom: "2px solid blue" }
                : {})
            }
          >
            Login
          </div>{" "}
          <div className={styles.right}>Signup</div>
        </div>
        <form>
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
        </form>
        <div className={styles.btn}>Login</div>
      </div>
    </div>
  );
};

export default login;
