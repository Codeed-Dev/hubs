import React, { useContext, useCallback, useState } from "react";
import styles from "./index.scss";
import backgroundUrl from "../../../assets/codeed/cbg.jpg";
import logo from "../../../assets/codeed/logo.png";
import CodeedButton from "../Button";
import CodeedInput from "../Input";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import { faRocket } from "@fortawesome/free-solid-svg-icons/faRocket";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons/faKeyboard";
import { AuthContext } from "../../auth/AuthContext";
import { createAndRedirectToNewHub } from "../../../utils/phoenix-utils";

const CodeedHomePage = () => {
  const [code, setCode] = useState("");
  const auth = useContext(AuthContext);

  const enterRoom = useCallback(() => {
    if (code) window.location.href = `https://codeedmeta.com/${code}`;
  }, [code]);

  const enterRoomOnEnter = useCallback(e => {
    if (e.keyCode === 13) enterRoom();
  }, []);

  const createRoom = useCallback(() => {
    console.log("create room");
    createAndRedirectToNewHub("Minha sala", null, null);
  }, []);

  return (
    <div style={{ backgroundImage: `url(${backgroundUrl.replace("\\", "/")})` }} className={styles.homePage}>
      <div className={styles.page}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} />
          <CodeedButton text="Fazer Login" icon={faArrowCircleRight} />
        </div>
        <div className={styles.content}>
          <h1>Bem-vindos ao Codeed.Meta</h1>
          <p>
            Junte-se a nós para uma experiência imersiva e interativa em um mundo virtual. Conheça novas pessoas,
            explore novos lugares e participe de atividades exclusivas, tudo no conforto da sua própria casa.
          </p>
          <div className={styles.contentButtons}>
            <CodeedButton text="Criar Metaverso" icon={faRocket} onClick={createRoom} />
            <CodeedInput
              onBlur={enterRoom}
              icon={faKeyboard}
              style={{ width: "400px" }}
              onChange={e => setCode(e.target.value)}
              onKeyDown={enterRoomOnEnter}
            />
          </div>
          <p>
            Não tem conta? <a>Comece agora!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeedHomePage;
