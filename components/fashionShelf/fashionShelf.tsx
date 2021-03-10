import styled from "styled-components";

export const Thumbnails = styled.div`
  @media screen and (max-width: 768px) {
    padding: 5px;

    .thumbnail-image {
      width: 120px;
      height: 190px;
      border-radius: 5px;
      box-shadow: 0 0px 80px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  width: 70px;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    .avatar-image {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 8px;
    }

    .model-name {
      font-size: 12px;
    }
  }
`;
