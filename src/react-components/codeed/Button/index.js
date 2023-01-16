import React, { useContext, useEffect } from "react";
import styles from "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CodeedButton = props => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} />
      {props.text}
    </button>
  );
};

export default CodeedButton;
