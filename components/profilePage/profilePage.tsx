import styled from "styled-components";

export const Profile = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileAvatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 328px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    .avatar-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 8px;
    }

    .profileInformation {
      margin-left: 16px;

      .profileSocial {
        display: flex;
        flex-direction: row;

        p {
          margin-right: 16px;
        }

        .camera-icon {
          margin-right: 8px;
        }

        .view-icon {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const ProfileDescription = styled.div`
  max-width: 328px;

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
