import React, { useEffect, useState } from "react";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { ProductId } from "../../../Services/ProductServices";
import { createCart } from "../../../Services/CartServices";
import { getCookie } from "../../../helpers/cookie";
import swal from 'sweetalert';

const Detail = () => {
  const [getProductId, setProductId] = useState({});
  const [itemQuantity, setItemQuantity] = useState(1);
  const [dataDetail, setDataDetail] = useState()
  const tokenUser = getCookie('token')

  const navigate = useNavigate()

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchApi = async () => {
      const response = await ProductId(id);
      setProductId(response);
    };
    fetchApi();
  }, [id]);

  const totalSale =
    getProductId.price -
    (getProductId.price * getProductId.discountPercentage) / 100;
  
  const handleSubmit = async (e) => {
      e.preventDefault()
      const postCart = await createCart(dataDetail);
      if(postCart) {
        swal("Thành Công", "Thêm giỏ hàng thành công!", "success");
        navigate('/cart')
      }
  }

  console.log(dataDetail)

  return (
    <div className="w-full flex">
      <div className="w-1200 mt-12 mx-auto flex h-500">
        {/* <div className="flex flex-col mr-10">
          <IoIosArrowUp size={23} className="cursor-pointer ml-9" />
          <div className="w-24 flex flex-col items-center h-600 overflow-hidden">
            <div className="h-32 w-full mt-3">
              <img
                src="https://fusta-demo.myshopify.com/cdn/shop/products/9_fc5c61ff-1767-428d-8a9a-852d597f76c6_120x125.jpg?v=1538025853"
                alt=""
              />
            </div>
            <div className="h-32 w-full mt-3">
              <img
                src="https://fusta-demo.myshopify.com/cdn/shop/products/9_fc5c61ff-1767-428d-8a9a-852d597f76c6_120x125.jpg?v=1538025853"
                alt=""
              />
            </div>
            <div className="h-32 w-full mt-3">
              <img
                src="https://fusta-demo.myshopify.com/cdn/shop/products/8_c0c52b58-eb7d-437a-b116-fec9c68b08bb_120x125.jpg?v=1538025851"
                alt=""
              />
            </div>
            <div className="h-32 w-full mt-3">
              <img
                src="https://fusta-demo.myshopify.com/cdn/shop/products/8_c0c52b58-eb7d-437a-b116-fec9c68b08bb_120x125.jpg?v=1538025851"
                alt=""
              />
            </div>
            <div className="h-32 w-full mt-3">
              <img
                src="https://fusta-demo.myshopify.com/cdn/shop/products/9_fc5c61ff-1767-428d-8a9a-852d597f76c6_120x125.jpg?v=1538025853"
                alt=""
              />
            </div>
          </div>
          <IoIosArrowDown size={23} className="cursor-pointer ml-9" />
        </div> */}
        <form onSubmit={handleSubmit} key={id} className="flex">
          <img
            className="w-400 h-full"
            src={getProductId.images && getProductId.images[0]}
            alt=""
          />
          <div className="ml-7 mt-2 w-full  flex flex-col justify-between">
            <div className="">
              <h2 className="text-3xl text-black">{getProductId.title}</h2>
            </div>
            <div className="flex items-center">
              <div className="flex">
                <FaStar color="#e97730" />
                <FaStar color="#e97730" />
                <FaStar color="#e97730" />
                <FaStar color="#e97730" />
                <FaStar color="#e97730" />
              </div>
              <span className="ml-2">1 review</span>
            </div>
            <div className="flex items-center">
              <span className="line-through text-black text-lg font-medium">
                {totalSale.toFixed(2)}$
              </span>
              <span className="text-orange-400 text-xl font-medium ml-2">
                {getProductId.price}$
              </span>
            </div>
            <div>
              <span className="text-lg">
                Description: {getProductId.description}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-lg">Quantity :</span>
              <div className="ml-2 flex border-2 border-gray-350 outline-none items-center">
                <span
                  onClick={() => setItemQuantity((num) => (num += 1))}
                  className="cursor-pointer px-4 border-r-2 border-gray-350 h-full py-2"
                >
                  +
                </span>
                <span className="block px-10 py-2">{itemQuantity}</span>
                <span
                  onClick={() =>
                    setItemQuantity((num) => (num > 1 ? (num -= 1) : num))
                  }
                  className="cursor-pointer px-4 border-l-2 border-gray-350 h-full py-2"
                >
                  -
                </span>
              </div>
            </div>
            <div className="flex mb-2">
                <button onClick={() => setDataDetail({  
                    name: getProductId.title,
                    images: getProductId.images,
                    price: getProductId.price,
                    discountPercentage: getProductId.discountPercentage,
                    quantity: itemQuantity,
                    selected: false,
                    token: tokenUser
                })} className="min-w-36 text-white bg-orange-500 cursor-pointer py-2 hover:bg-white hover:text-black hover:border-2 duration-300">
                  ADD TO CART
                </button>
              <button
                type="submit"
                className="ml-2 p-3 border-2 border-zinc-300 hover:bg-orange-500 hover:text-white duration-300"
              >
                <CiHeart size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Detail;
