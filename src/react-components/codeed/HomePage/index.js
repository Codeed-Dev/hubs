/* eslint-disable no-unused-vars */
import React, { useContext, useCallback, useState, useEffect } from "react";
import styles from "./index.scss";
import backgroundUrl from "../../../assets/codeed/cbg.jpg";
import logo from "../../../assets/codeed/logo.png";
import CodeedButton from "../Button";
import CodeedInput from "../Input";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import { faRocket } from "@fortawesome/free-solid-svg-icons/faRocket";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons/faKeyboard";
import { createAndRedirectToNewHub } from "../../../utils/phoenix-utils";
import firebaseApp from "../firebase";
import { Modal } from "../../modal/Modal";
import classNames from "classnames";
import { Center } from "../../layout/Center";
import { PageContainer } from "../../layout/PageContainer";
import Logo from "../Layout/Logo";
import CreateRoomModal from "./CreateRoomModal";
import { bool } from "prop-types";

const CodeedHomePage = () => {
  const [code, setCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const enterRoom = useCallback(() => {
    if (code) window.location.href = `https://codeedmeta.com/${code}`;
  }, [code]);

  const enterRoomOnEnter = useCallback(
    e => {
      if (e.keyCode === 13) enterRoom();
    },
    [enterRoom]
  );

  const createRoom = useCallback(() => {
    setModalVisible(true);
  }, []);

  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundUrl.replace("\\", "/")})` }} className={styles.homePage}>
        <div className={styles.page}>
          <div className={styles.header}>
            <Logo style={{ height: "60px" }} />
            <CodeedButton
              text="Painel de Eventos"
              icon={faArrowCircleRight}
              onClick={() => {
                window.location.href = "https://console.codeedmeta.com/";
              }}
            />
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
                placeholder="Digite o código do metaverso"
              />
            </div>
            <p>
              Deseja criar eventos híbridos ou virtuais, ter controle de participantes e estatísticas?{" "}
              <a href="https://console.codeedmeta.com/">Comece agora!</a>
            </p>
          </div>
        </div>
        {modalVisible && (
          <Center style={{ position: "absolute" }}>
            <CreateRoomModal onClose={() => setModalVisible(false)} />
          </Center>
        )}
      </div>
    </>
  );
};

export default CodeedHomePage;
