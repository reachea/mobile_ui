import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faShareAlt,
  faEye,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import {
  Feed,
  Thumbnails,
  Avatar,
  FeedNavigation,
  FeedDescription,
} from "./photoFeed";

interface PhotoFeedProps {
  thumbnails?: string | null;
  avatar?: string | null;
  modelName: string;
  likeCount: number;
  viewCount: number;
  description: string;
  timeFormat: number;
}

const PhotoFeed: React.FC<PhotoFeedProps> = (props) => {
  const getLikeCount = (likeCount) => {
    if (likeCount >= 100000) {
      return likeCount / 1000 + "k";
    }

    return likeCount;
  };

  const getViewCount = (viewCount) => {
    if (viewCount >= 100000) {
      return viewCount / 1000 + "k";
    }

    return viewCount;
  };

  const getTimeFormat = (timeFormat) => {
    if (timeFormat >= 60) {
      timeFormat /= 60;

      if (timeFormat >= 60) {
        timeFormat /= 60;

        if (timeFormat >= 24) {
          return Math.floor(timeFormat / 24) + " Days ago";
        }

        return Math.floor(timeFormat) + " Hours ago";
      }

      return Math.floor(timeFormat) + " Minutes ago";
    }

    return Math.floor(timeFormat) + " Seconds ago";
  };

  return (
    <>
      <Feed>
        <Avatar>
          <img
            className="avatar-image"
            src={props.avatar ? props.avatar : "/images/defaultAvatar.png"}
          />
          <p className="model-name">{props.modelName}</p>
        </Avatar>

        <Thumbnails>
          <img className="thumbnail-image" src={props.thumbnails} />
        </Thumbnails>

        <FeedNavigation>
          <div className="feedNavLeft">
            <div className="thumbUp-icon">
              <FontAwesomeIcon size="1x" icon={faThumbsUp} />
            </div>

            <div className="shareAlt-icon">
              <FontAwesomeIcon size="1x" icon={faShareAlt} />
            </div>
          </div>

          <div className="feedNavRight">
            <div className="likeCount">
              <div>
                <FontAwesomeIcon
                  className="likeCount-icon"
                  size="1x"
                  icon={faThumbsUp}
                />
              </div>
              <p>{getLikeCount(props.likeCount)}</p>
            </div>

            <div className="viewCount">
              <div>
                <FontAwesomeIcon
                  className="viewCount-icon"
                  size="1x"
                  icon={faEye}
                />
              </div>

              <p>{getViewCount(props.viewCount)}</p>
            </div>
          </div>
        </FeedNavigation>

        <FeedDescription>
          <div className="feedTimeFormat">
            <p>{getTimeFormat(props.timeFormat)}</p>
          </div>

          <div className="feedDescription">
            <p>{props.description}</p>
          </div>

          <div className="readMore">
            <p>Read more</p>
            <FontAwesomeIcon icon={faChevronDown} size="1x" />
          </div>
        </FeedDescription>
      </Feed>
    </>
  );
};

export default PhotoFeed;
