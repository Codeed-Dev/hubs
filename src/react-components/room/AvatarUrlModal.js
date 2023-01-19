import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { CloseButton } from "../input/CloseButton";
import { TextInputField } from "../input/TextInputField";
import { useForm } from "react-hook-form";
import { ApplyButton } from "../input/Button";
import { FormattedMessage } from "react-intl";
import { Column } from "../layout/Column";
import readyPlayerMeLogo from "../../assets/codeed/ready-player-me.png";
import styles from "./AvatarUrlModal.scss";

// Criado nova tela de custom avatar, mas integrado com o ready playr me
export function AvatarUrlModal({ onSubmit, onClose }) {
  const subscribe = useCallback(
    event => {
      if (typeof event.data === "string" && event.data.endsWith("glb")) {
        onSubmit({ url: event.data });
      }
    },
    [onSubmit]
  );

  useEffect(() => {
    window.addEventListener("message", subscribe);

    return () => {
      window.removeEventListener("message", subscribe);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal title="Mudar Avatar" afterTitle={<CloseButton onClick={onClose} />} className={styles.modal}>
      <iframe
        className={styles.iframe}
        id="frame"
        allow="camera *; microphone *; clipboard-write"
        src="https://vr.readyplayer.me/avatar?frameApi"
      />
    </Modal>
  );
}

export function AvatarUrlModalOld({ onSubmit, onClose }) {
  const { handleSubmit, register } = useForm();
  return (
    <Modal title="Custom Avatar URL" beforeTitle={<CloseButton onClick={onClose} />}>
      <Column as="form" padding center onSubmit={handleSubmit(onSubmit)}>
        <TextInputField
          name="url"
          label={<FormattedMessage id="avatar-url-modal.avatar-url-label" defaultMessage="Avatar GLB URL" />}
          placeholder="https://example.com/avatar.glb"
          type="url"
          required
          ref={register}
          description={
            <a href="https://hubs.mozilla.com/docs/intro-avatars.html" target="_blank" rel="noopener noreferrer">
              <FormattedMessage
                id="avatar-url-modal.custom-avatar-docs-link"
                defaultMessage="Learn more about custom avatars"
              />
            </a>
          }
        />
        <ApplyButton type="submit" />
      </Column>
    </Modal>
  );
}

AvatarUrlModal.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func
};
