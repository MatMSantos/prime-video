import { AvatarIcon } from "../../icons/avatar/avatar";
import { ArrowIcon } from "../../icons/arrow/arrow";

import "./toggle.scss";

export const Toggle = () => {
  return (
    <div className="user_avatar_toggle">
      <div className="user_avatar_toggle__picture">
        <div className="avatar-button">
          <div className="avatar">
            <AvatarIcon></AvatarIcon>
          </div>
        </div>
      </div>
      <span className="user_avatar_toggle__arrow">
        <ArrowIcon></ArrowIcon>
      </span>
    </div>
  );
};
