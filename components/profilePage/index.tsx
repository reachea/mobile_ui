import {
  faChevronDown,
  faEye,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ProfileAvatar, ProfileDescription, Profile } from "./profilePage";

interface ProfilePageProps {
  avatar?: string | null;
  modelName: string;
  photoCount: number;
  viewCount: number;
  description: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const getViewCount = (viewCount) => {
    if (viewCount >= 100000) {
      return viewCount / 1000 + "k";
    }

    return viewCount;
  };

  const getPhotoCount = (photoCount) => {
    if (photoCount >= 100000) {
      return photoCount / 1000 + "k";
    }

    return photoCount;
  };

  return (
    <>
      <Profile>
        <ProfileAvatar>
          <div className="avatar">
            <img
              className="avatar-image"
              src={props.avatar ? props.avatar : "/images/defaultAvatar.png"}
            />
          </div>

          <div className="profileInformation">
            <div className="profileName">{props.modelName}</div>

            <div className="profileSocial">
              <FontAwesomeIcon
                className="camera-icon"
                icon={faCamera}
                size="1x"
              />
              <p>{getPhotoCount(props.photoCount)}</p>

              <FontAwesomeIcon className="view-icon" icon={faEye} size="1x" />
              <p>{getViewCount(props.viewCount)}</p>
            </div>
          </div>
        </ProfileAvatar>

        <ProfileDescription>
          <div className="feedDescription">
            <p>{props.description}</p>
          </div>

          <div className="readMore">
            <p>Read more</p>
            <FontAwesomeIcon icon={faChevronDown} size="1x" />
          </div>
        </ProfileDescription>
      </Profile>
    </>
  );
};

export default ProfilePage;
