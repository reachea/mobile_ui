import styled from "styled-components";

export const Feed = styled.div`
  padding: 5px;
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const Thumbnails = styled.div`
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    .thumbnail-image {
      width: 328px;
      height: 493px;
      border-radius: 5px;
      box-shadow: 0 0px 80px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Avatar = styled.div`
  width: 328px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    .avatar-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 8px;
    }

    .model-name {
      font-size: 16px;
    }
  }
`;

export const FeedNavigation = styled.div`
  width: 328px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  .feedNavLeft {
    display: flex;
    flex-direction: row;

    .thumbUp-icon {
      width: 40px;
      height: 40px;
      margin-right: 16px;
      background-color: rgb(154, 157, 160);
      border-radius: 50%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #ffffff;

      :hover {
        cursor: pointer;
      }
    }

    .shareAlt-icon {
      width: 40px;
      height: 40px;
      background-color: rgb(154, 157, 160);
      border-radius: 50%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #ffffff;

      :hover {
        cursor: pointer;
      }
    }
  }

  .feedNavRight {
    display: flex;
    flex-direction: row;
    height: 40px;
    width: auto;
    align-items: center;

    .likeCount {
      margin-right: 16px;
      display: flex;
      flex-direction: row;
      align-items: center;

      .likeCount-icon {
        font-size: 14px;
        margin-right: 4px;
      }

      p {
        font-size: 14px;
      }
    }

    .viewCount {
      display: flex;
      flex-direction: row;
      align-items: center;

      .viewCount-icon {
        font-size: 14px;
        margin-right: 4px;
      }

      p {
        font-size: 14px;
      }
    }
  }
`;

export const FeedDescription = styled.div`
  width: 328px;

  .feedTimeFormat {
    margin-bottom: 10px;
    font-size: 16px;
  }

  .feedDescription {
    font-size: 16px;
  }

  .readMore {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    p {
      font-size: 16px;
      margin-right: 6px;
      color: rgb(183, 41, 41);
      font-weight: bold;
    }

    svg {
      font-size: 13px;
      margin-bottom: 1px;
      color: rgb(183, 41, 41);
    }

    :hover {
      cursor: pointer;
    }
  }
`;
