import React from "react";

import { Thumbnails, Avatar } from "./fashionShelf";

interface fashionShelfProps {
  thumbnails?: string | null;
  avatar?: string | null;
  modelName: string;
}

const FashionShelf: React.FC<fashionShelfProps> = (props) => {
  return (
    <>
      <Thumbnails>
        <img className="thumbnail-image" src={props.thumbnails} />

        <Avatar>
          <img
            className="avatar-image"
            src={props.avatar ? props.avatar : "/images/defaultAvatar.png"}
          />
          <p className="model-name">{props.modelName}</p>
        </Avatar>
      </Thumbnails>
    </>
  );
};

export default FashionShelf;
