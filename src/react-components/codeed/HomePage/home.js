/* eslint-disable no-unused-vars */
import React, { useCallback, useState, useContext } from "react";
import styles from "./index.scss";
import CodeedButton from "../Button";
import CodeedInput from "../Input";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import { faRocket } from "@fortawesome/free-solid-svg-icons/faRocket";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons/faKeyboard";
import { Center } from "../../layout/Center";
import Logo from "../Layout/Logo";
import CreateRoomModal from "./CreateRoomModal";
import PageLayoutContext from "../Contexts/PageLayoutContext";

const HomePage = () => {
  const [code, setCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const pageLayout = useContext(PageLayoutContext);

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
      <div style={{ backgroundImage: `url(${pageLayout.backgroundImage})` }} className={styles.homePage}>
        <div className={styles.page}>
          <div className={styles.header}>
            <Logo style={{ height: "60px" }} />
            {pageLayout.showCodeedMetaPanel && (
              <CodeedButton
                text="Painel de Eventos"
                icon={faArrowCircleRight}
                onClick={() => {
                  window.location.href = "https://console.codeedmeta.com/";
                }}
              />
            )}
          </div>
          <div className={styles.content}>
            <h1>{pageLayout.title}</h1>
            <p>{pageLayout.description}</p>
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
              Deseja criar eventos online e ter controle de participantes e estatísticas?{" "}
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

export default HomePage;
