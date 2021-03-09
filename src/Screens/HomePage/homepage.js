import React from "react";
import { HomePageContainer } from './homepage.styles'
import DirectoryMenu from "./../../Components/DirectoryMenu/directorymenu";

const HomePage = () => {
  return (
    <HomePageContainer>
      <DirectoryMenu />
    </HomePageContainer>
  );
};

export default HomePage;
