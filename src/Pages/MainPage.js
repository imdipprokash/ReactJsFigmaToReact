import React from "react";
import BannerComponents from "../components/bannderComponets/BannerComponents";
import DataViewCard from "../components/DataViewCard/DataViewCard";
import FooterContent from "../components/FooterContent/FooterContent";
import Header from "../components/Header";
import MainComponents from "./MainComponents/MainComponents";

const MainPage = () => {
  return (
    <>
      <div className="flex-1 " style={{ backgroundColor: "#8A92" }}>
        <Header />
        <BannerComponents />
        <DataViewCard />
        <MainComponents />
        <FooterContent />
      </div>
    </>
  );
};

export default MainPage;
