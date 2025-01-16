import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";
import { useSelector } from "react-redux";

const Breadcrumb = (isNameRoutes) => {
  const { shop, about, contact, cart, detail, shopdetail, pay, search, info } = isNameRoutes;
  const [namePage, setNamePage] = useState("");
  const stateCate = useSelector(state => state.CategoryReducer)

  console.log()

  useEffect(() => {
    if(shop) {
      setNamePage("Shop")
    } else if(about) {
      setNamePage("About")
    } else if(contact) {
      setNamePage("Contact")
    } else if(cart) {
      setNamePage("Cart")
    } else if(detail) {
      setNamePage("Detail")
    } else if(shopdetail) {
      setNamePage("Category")
    } else if(pay) {
      setNamePage("Pay")
    } else if(search) {
      setNamePage("Search")
    } else if(info) {
      setNamePage("Info")
    } else {
      setNamePage("")
    }
  }, [shop, about, contact, cart, detail, shopdetail, pay, search, info]);


  return (
    <div className="h-64 breadcrumb__bgr flex">
      <div className="m-auto">
        <h2 className="breadcrumb__heading text-3xl text-black text-center">{namePage}</h2>
        <div className="flex">
          <Link to={"/"} className="text-lg hover:text-orange-400 duration-300">
            Home
          </Link>
          <span className="mx-2 text-lg"> / </span>
          <span className="text-lg text-orange-500">{namePage + " " + stateCate}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
