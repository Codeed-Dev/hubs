import React, { useState, useCallback } from "react";
import { Modal } from "../../modal/Modal";
import { CloseButton } from "../../input/CloseButton";
import PropTypes from "prop-types";
import Logo from "../Layout/Logo";
import styles from "./CreateRoomModal.scss";
import CodeedButton from "../Button";
import CodeedInput from "../Input";
import { faRocket } from "@fortawesome/free-solid-svg-icons/faRocket";
import { Row } from "../../layout/Row";
import { Column } from "../../layout/Column";
import { createAndRedirectToNewHub } from "../../../utils/phoenix-utils";
import classNames from "classnames";
import { isHmc } from "../../../utils/isHmc";

const rooms = isHmc()
  ? [
      {
        name: "Sala de Apresentação",
        imgScr: "https://dev.reticulum.io/files/10d6ff1f-7406-45ee-a739-8fe49083cc2a.jpg",
        sceneId: "ZLxEIKg"
      },
      {
        name: "Evento",
        imgScr: "https://dev.reticulum.io/files/545918e5-ac32-4b96-bf5a-22580b87818a.jpg",
        sceneId: "Fa9fgw8"
      },
      {
        name: "Sala de Reunião",
        imgScr: "https://dev.reticulum.io/files/d033c4e4-2174-4c6a-8a42-70b52708044f.jpg",
        sceneId: "2upDByq"
      }
    ]
  : [
      {
        name: "Sala de Reunião",
        imgScr: "https://codeedmeta-assets.codeedmeta.com/files/fe25631b-304b-4c69-93dd-044c585ccc3a",
        sceneId: "RYNHBLC"
      },
      {
        name: "Sala de Jogos",
        imgScr: "https://codeedmeta-assets.codeedmeta.com/files/b6fec23f-7a30-4bc9-b13e-ff189e68c98a",
        sceneId: "8TauFje"
      },
      {
        name: "Sala de Conferências",
        imgScr: "https://codeedmeta-assets.codeedmeta.com/files/7103afbe-e8ed-4996-9352-a32225bd1028",
        sceneId: "MvwHeP4"
      }
    ];

const CreateRoomModal = ({ onClose }) => {
  const [roomName, setRoomName] = useState("Meu evento");
  const [sceneId, setSceneId] = useState(rooms[0].sceneId);

  const createRoom = useCallback(() => {
    createAndRedirectToNewHub(roomName, sceneId, null);
  }, [roomName, sceneId]);
  return (
    <Modal
      title={<Logo style={{ height: "85px", marginTop: "6px" }} />}
      afterTitle={<CloseButton onClick={onClose} />}
      className={styles.createRoomModal}
      contentClassName={styles.createRoomModalContent}
    >
      <Column gap={"md"}>
        <Column gap={"xs"}>
          <label style={{ fontSize: 14 }}>Nome da Sala</label>
          <CodeedInput
            onChange={e => setRoomName(e.target.value)}
            value={roomName}
            placeholder="Descreva o nome da sala"
          />
        </Column>
        <Row noWrap>
          {rooms.map(scene => {
            return (
              <div
                key={scene.sceneId}
                className={classNames(styles.sceneImg, { [styles.selectedScene]: scene.sceneId === sceneId })}
              >
                <img src={scene.imgScr} alt={scene.name} onClick={() => setSceneId(scene.sceneId)} />
              </div>
            );
          })}
        </Row>
        <CodeedButton text="Criar Metaverso" icon={faRocket} onClick={createRoom} />
      </Column>
    </Modal>
  );
};

CreateRoomModal.propTypes = {
  onClose: PropTypes.func
};

export default CreateRoomModal;
