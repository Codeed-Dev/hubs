import React from "react";
import PropTypes from "prop-types";
import configs from "../../utils/configs";
import { ExitedRoomScreen } from "./ExitedRoomScreen";

export function ExitedRoomScreenContainer({ reason }) {
  console.log("ExitedRoomScreenContainer");
  console.log("reason", reason);
  console.log("configs", configs);
  return (
    <ExitedRoomScreen
      showTerms={false} //configs.feature("show_terms")}
      termsUrl={configs.link("terms_of_use", "https://www.mozilla.org/en-US/about/legal/terms/hubs")}
      showSourceLink={configs.feature("show_source_link")}
      reason={reason}
      contactEmail={configs.translation("contact-email")}
    />
  );
}

ExitedRoomScreenContainer.propTypes = {
  reason: PropTypes.string.isRequired
};
