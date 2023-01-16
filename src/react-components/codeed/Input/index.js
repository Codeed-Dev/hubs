import React, { useContext, useEffect, useRef } from "react";
import styles from "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CodeedInput = props => {
  const inputRef = useRef();

  const focus = () => {
    inputRef?.input?.focus();
  };

  return (
    <div className={styles.input} onClick={focus} style={props.style}>
      <FontAwesomeIcon icon={props.icon} />
      <input
        ref={inputRef}
        placeholder="Digite o código do metaverso"
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
};

export default CodeedInput;
