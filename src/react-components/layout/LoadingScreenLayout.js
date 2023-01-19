import React from "react";
import PropTypes from "prop-types";
import styles from "./LoadingScreenLayout.scss";
import { Column } from "../layout/Column";
import { AppLogo } from "../misc/AppLogo";
import backgroundUrl from "../../assets/codeed/cbg.jpg";

export function LoadingScreenLayout({ center, bottom }) {
  return (
    <div className={styles.loadingScreenLayout} style={{ backgroundImage: `url(${backgroundUrl.replace("\\", "/")})` }}>
      <Column center padding gap="lg" className={styles.center}>
        <AppLogo className={styles.logo} />
        {center}
      </Column>
      {bottom && (
        <Column center className={styles.bottom}>
          {bottom}
        </Column>
      )}
    </div>
  );
}

LoadingScreenLayout.propTypes = {
  center: PropTypes.node,
  bottom: PropTypes.node
};
