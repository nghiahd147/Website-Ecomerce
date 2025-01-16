import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import {
  ProductServices,
} from "../../../Services/ProductServices";
import { Link } from "react-router-dom";

const ListProductSearch = (props) => {
  const { nameOption, nameSearch } = props;

  const [getProduct, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const responseProduct = await ProductServices();
      let result
      if(nameSearch) {
        result = responseProduct.filter((items) => {
          return items.title.includes(nameSearch)
        })
      }
      setProduct(result);
    };
    fetchApi();
  }, [nameSearch]);

  useEffect(() => {
    let filtered = [...getProduct];

    switch (nameOption) {
      case "Featured":
        const optionFeatured = filtered.sort((a, b) => b.rating - a.rating);
        setFilterProduct(optionFeatured);
        break;
      case "Best Seling":
        const optionSeling = filtered.sort(
          (a, b) => b.discountPercentage - a.discountPercentage
        );
        setFilterProduct(optionSeling);
        break;

      case "Alphabetically, A-Z":
        const optionAZ = filtered.sort((a, b) => a.id - b.id);
        setFilterProduct(optionAZ);
        break;

      case "Alphabetically, Z-A":
        const optionZA = filtered.sort((a, b) => b.id - a.id);
        setFilterProduct(optionZA);
        break;

      default:
        setFilterProduct(getProduct);
        break;
    }

    // Chỉ chạy lặp khi gtri thay đổi
  }, [getProduct, nameOption]);

  return (
        <>
          {filterProduct.map((items, index) => {
            const totalSale =
              items.price - (items.price * items.discountPercentage) / 100;
            return (
              <div
                key={index}
                className="low-pc:items-product bg-gray-300 flex flex-col"
              >
                <div className="items-product__img relative">
                  <img className="w-full h-full" src={items.images} alt="" />
                  {/* Sale */}
                  <div className="items-product__sale absolute top-0 z-10">
                    <span className="block w-16 bg-white text-center mx-3 my-2">
                      Sale
                    </span>
                    <span className="block w-16 bg-white text-center mx-3 my-2">
                      {items.discountPercentage}%
                    </span>
                  </div>
                  {/* Order */}
                  <div className="items-product__order flex justify-center items-center absolute bottom-36 z-10 left-12">
                    <FaHeart className="w-12 h-12 bg-white p-4 mx-1 cursor-pointer hover:bg-orange-400 duration-300" />
                    <IoBagHandle className="w-12 h-12 bg-white p-4 mx-1 cursor-pointer hover:bg-orange-400 duration-300" />
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

export default ListProductSearch;
