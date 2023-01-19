import React, { useRef } from "react";
import styles from "./index.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CodeedInput = ({ style, icon, ...rest }) => {
  const inputRef = useRef();

  const focus = () => {
    inputRef?.input?.focus();
  };

  return (
    <div className={styles.input} onClick={focus} style={style}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <input ref={inputRef} {...rest} />
    </div>
  );
};

CodeedInput.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.object
};

export default CodeedInput;
