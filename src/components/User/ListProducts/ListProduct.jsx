import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { ProductServices } from "../../../Services/ProductServices";
import { Link } from "react-router-dom";

const ListProduct = (props) => {
  const { nameOption, nameCate } = props;

  const [getProduct, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const responseProduct = await ProductServices();
      setProduct(responseProduct);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    let filtered = [...getProduct];

    if (nameCate) {
      filtered = filtered.filter(product => product.category === nameCate);
    }

    switch (nameOption) {
      case "Featured":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "Best Seling":
        filtered.sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;
      case "Alphabetically, A-Z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Alphabetically, Z-A":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setFilterProduct(filtered);
  }, [getProduct, nameOption, nameCate]);

  return (
    <>
      {filterProduct.map((items, index) => {
        const totalSale =
          items.price - (items.price * items.discountPercentage) / 100;
        return (
          <div
            key={index}
            className="w-full bg-gray-300 flex flex-col flex-wrap"
          >
            <div className="relative items-product__img">
              <img className="w-full h-[300px]" src={items.images} alt="" />
              <div className="w-full absolute top-0 z-10">
                <span className="block w-16 bg-white text-center mx-3 my-2">
                  Sale
                </span>
                <span className="block w-16 bg-white text-center mx-3 my-2">
                  {items.discountPercentage}%
                </span>
              </div>
              <div className="items-product__order flex justify-center items-center absolute bottom-36 z-50 left-12">
                <FaHeart className="w-12 h-12 bg-white p-4 mx-1 hover:bg-orange-400 duration-300 cursor-not-allowed" />
                <IoBagHandle className="w-12 h-12 bg-white p-4 mx-1 hover:bg-orange-400 duration-300 cursor-not-allowed" />
                <Link to={`/detail/${items.id}`}>
                  <FaSearchPlus className="w-12 h-12 bg-white p-4 mx-1 cursor-pointer hover:bg-orange-400 duration-300" />
                </Link>
              </div>
            </div>
            <div className="px-4 py-4 text-center bg-gray-50 mt-auto">
              <span>{items.title}</span>
              <div className="items-product__info-price">
                <span className="mx-1 line-through">{items.price}$</span>
                <span className="mx-1">{totalSale.toFixed(2)}$</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListProduct;
