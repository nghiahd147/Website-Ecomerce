import React from "react";
import { HeaderUser } from "../components/User/HeaderUser/HeaderUser";
import SliderUser from "../components/User/SliderUser/SliderUser";
import { Outlet, useLocation, matchPath } from "react-router-dom";
import FeaturedProducts from "../components/User/FeaturedProducts/FeaturedProducts";
import LargeBanner from "../components/User/LargeBanner/LargeBanner";
import ProductArea from "../components/User/ProductArea/ProductArea";
import Footer from "../components/User/Footer/Footer";
import Breadcrumb from "../components/User/Breadcrumb/Breadcrumb";

const LayoutUser = () => {
  // Lấy ra router name bằng useLocation
  const location = useLocation();
  const isShop = location.pathname === "/shop";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";
  const isCart = location.pathname === "/cart";
  const isPay = location.pathname === '/pay';
  // matchPath so sánh 2 đường dẫn trả về một kết quả khớp nếu hai đường dẫn khớp, hoặc null nếu không khớp.
  const isDetail = matchPath("/detail/:id", location.pathname);
  const isDetailShop = matchPath("/shop/:id", location.pathname);
  const isSearch = matchPath("/search/:id", location.pathname);
  const isInfo = matchPath("/info/:id", location.pathname);

  return (
    <div className="relative">
      <HeaderUser />
      {isShop || isDetail || isAbout || isContact || isCart || isDetailShop || isPay || isSearch || isInfo ? (
        <Breadcrumb
          shop={isShop}
          about={isAbout}
          contact={isContact}
          cart={isCart}
          detail={isDetail}
          shopdetail={isDetailShop}
          pay={isPay}
          search={isSearch}
          info={isInfo}
        />
      ) : (
        <SliderUser />
      )}

      {isShop || isDetail || isAbout || isContact || isCart || isDetailShop || isPay || isSearch || isInfo ? undefined : (
        <FeaturedProducts />
      )}

      <Outlet />
      
      {isShop || isDetail || isAbout || isContact || isCart || isDetailShop || isPay || isSearch || isInfo ? undefined : (
        <LargeBanner />
      )}

      {isShop || isDetail || isAbout || isContact || isCart || isDetailShop || isPay || isSearch || isInfo ? undefined : (
        <ProductArea />
      )}

      <Footer />
    </div>
  );
};

export default LayoutUser;
