import React from "react";
import BeverageProducts from "../../components/beverageProduct/BeverageProducts";
import CartProduct from "../../components/cartProduct/CartProduct";
// import ClothesProduct from "../../components/clothesProduct/ClothesProduct";
import CovidInfo from "../../components/covidInfo/CovidInfo";
import Departments from "../../components/departments/Departments";
import Footer from "../../components/footer/Footer";
import FurnitureProduct from "../../components/furnitureProduct/FurnitureProduct";
import Games from "../../components/games/Games";
import HeaderCarousel from "../../components/headerCarousel/HeaderCarousel";
import Navbar from "../../components/navbar/Navbar";
import Sharing from "../../components/sharing/Sharing";
import TexnologyProduct from "../../components/texnologyProduct/TexnologyProduct";
import TopSection from "../../components/topSection/TopSection";

function Home() {
  return (
    <div>
      <Navbar />
      <HeaderCarousel />
      <TopSection />
      <CartProduct />
      <Departments />
      {/* <ClothesProduct /> */}
      <TexnologyProduct />
      <Games />
      <FurnitureProduct />
      <CovidInfo />
      <BeverageProducts />
      <Sharing />
      <Footer />
    </div>
  );
}

export default Home;
