import React from "react";
import styles from "./Logo.scss";
import logo from "../../../assets/codeed/logo.png";

const Logo = ({ ...rest }) => {
  return <img src={logo} className={styles.logo} {...rest} />;
};

export default Logo;
