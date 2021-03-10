import React from "react";

import { createGlobalStyle } from "styled-components";

import FashionShelf from "../components/fashionShelf";
import PhotoFeed from "../components/photoFeed";
import ProfilePage from "../components/profilePage";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
`;

const Home: React.FC<any> = (): any => {
  return (
    <>
      <GlobalStyle />
      <div style={{ display: "flex", marginBottom: "32px" }}>
        <FashionShelf
          thumbnails="/images/thumbnails.jpg"
          avatar="/images/avatar.jpg"
          modelName="Model Name"
        />
        <FashionShelf
          thumbnails="/images/thumbnails.jpg"
          modelName="Model Name"
          avatar="/images/avatar.jpg"
        />
      </div>

      <PhotoFeed
        avatar="/images/avatar.jpg"
        modelName="Model Name"
        thumbnails="/images/thumbnails.jpg"
        likeCount={1000000}
        viewCount={1000000}
        timeFormat={1000000}
        description="Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laudantium. Autem explicabo iste quibusdam sed, vitae voluptas temporibus fugit magnam dolor, error obcaecati modi aliquam, iure at minus suscipit velit? sit amet, consectetur adipisicing elit. Ab sapiente quam officiis quaerat! Nisi fuga, non ab facere id perspiciatis!"
      />

      <ProfilePage
        avatar="/images/avatar.jpg"
        modelName="Model Name"
        photoCount={1000000}
        viewCount={1000000}
        description="Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laudantium. Autem explicabo iste quibusdam sed, vitae voluptas temporibus fugit magnam dolor, error obcaecati modi aliquam, iure at minus suscipit velit? sit amet, consectetur adipisicing elit. Ab sapiente quam officiis quaerat! Nisi fuga, non ab facere id perspiciatis!"
      />
    </>
  );
};

export default Home;
