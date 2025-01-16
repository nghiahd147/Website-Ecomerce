import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "../HeaderUser/HeaderUser.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { CategoryServices } from "../../../Services/CategoryServices";
import { useDispatch, useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import { getCookie } from "../../../helpers/cookie";
import { resetCategory } from "../../../actions/category";

export const HeaderUser = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const cookieName = getCookie("name");
  const dispatch = useDispatch();

  const token = getCookie('token')

  const handleActionReset = () => {
    dispatch(resetCategory());
  };

  if (!cookieName) {
    navigate("/login");
  }

  const [stateModal, setStateModal] = useState(false);
  const [stateList, setStateList] = useState(false);
  const [getCategory, setCategory] = useState([]);
  const isLogin = useSelector((state) => state.LoginReducer);
  const numCart = useSelector(state => state.CartReducer)

  // console.log(isLogin);

  const openModal = () => {
    setStateModal(true);
  };

  const closeModal = () => {
    setStateModal(false);
    setSearch("");
  };

  const handleList = () => {
    setStateList(!stateList);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log(search)

  useEffect(() => {
    const fetchApi = async () => {
      const responseCate = await CategoryServices();
      setCategory(responseCate);
    };
    fetchApi();
  }, []);

  return (
    <>
      <div
        className={
          stateModal
            ? "modal active z-20 flex items-center"
            : "modal z-20 flex items-center"
        }
      >
        <div className="modal-group mx-auto flex items-center border-b-2 border-white">
          <input
            className="modal-input pb-4 text-lg bg-transparent text-white  outline-none"
            type="text"
            placeholder="Search Our Store..."
            onChange={handleSearch} 
            value={search}
          />
          <Link onClick={closeModal} to={'/search/' + search}>
            <IoSearch
              color="white"
              size={20}
              className="mr-2 mb-2 cursor-pointer"
            />
          </Link>
          <AiOutlineCloseCircle
            className="absolute top-4 right-4 cursor-pointer"
            color="white"
            size={30}
            onClick={closeModal}
          />
        </div>
      </div>
      <div className="h-32 flex justify-around items-center tablet:justify-between tablet:px-12">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="https://fusta-demo.myshopify.com/cdn/shop/files/logo_300x300.jpg?v=1613745373"
            alt="logo"
          />
        </Link>
        {/* Items */}
        <div className="h-full tablet:hidden">
          <ul className="flex items-center justify-center h-full">
            <li className="mx-4 border-b-2 list-header border-transparent relative h-full flex items-center">
              <Link
                to={"/"}
                className="hover:text-orange-300 duration-300 text-sm font-bold"
              >
                HOME
              </Link>
            </li>
            <li className="mx-4 border-b-2 list-header border-transparent relative h-full flex items-center">
              <Link
                to={"/shop"}
                className="hover:text-orange-300 duration-300 text-sm font-bold"
                onClick={handleActionReset}
              >
                SHOP
              </Link>
            </li>
            <li className="list-header mx-4 relative h-full flex items-center">
              <Link className="hover:text-orange-300 duration-300 text-sm font-bold relative">
                CATEGORY
              </Link>
              <div className="list-items absolute w-40 top-20 z-10">
                <ul className="bg-white py-2 px-4">
                  {getCategory.map((items, index) => (
                    <li
                      key={index}
                      className="cursor-pointer py-1 hover:text-orange-400 duration-300"
                    >
                      <Link to={"/shop/" + items.title}>{items.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="mx-4 border-b-2 list-header border-transparent relative h-full flex items-center">
              <Link
                to={"/about"}
                className="hover:text-orange-300 duration-300 text-sm font-bold"
              >
                ABOUT
              </Link>
            </li>
            <li className="mx-4 border-b-2 list-header border-transparent relative h-full flex items-center">
              <Link
                to={"/contact"}
                className="hover:text-orange-300 duration-300 text-sm font-bold"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        {/* Search / Log */}
        <div className="flex items-center h-full">
          <IoSearch
            className="mx-2 cursor-pointer"
            size={20}
            onClick={openModal}
          />
          {isLogin ? (
            <>
              <div className="flex items-center cursor-pointer relative list-header h-full">
                <FaUser className="mx-2" size={20} />
                <span className="text-black font-bold block">{cookieName}</span>
                <div className="list-items absolute w-44 top-32 left-0 z-20 overflow-hidden text-center bg-white">
                  <ul>
                    <li>
                      <Link to={'/info/' + token} className="px-2 py-2 block hover:text-orange-500 transition-all">
                        Thông tin đơn hàng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/logout"}
                        className="flex justify-center items-center px-2 py-2 hover:text-orange-500 transition-all"
                      >
                        <IoIosLogOut className="mx-1" size={18} />
                        Đăng xuất
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to={"/cart"} className="relative flex">
                <FaShoppingCart
                  className="mx-2 cursor-pointer relative"
                  size={20}
                />
                <span className="notifi-number">{numCart}</span>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <FaUser className="mx-2 cursor-pointer" size={20} />
              </Link>
            </>
          )}

          {stateList ? (
            <AiOutlineCloseCircle
              className="hidden tablet:block ml-6"
              size={24}
              onClick={handleList}
            />
          ) : (
            <FaList
              className="hidden tablet:block ml-6"
              size={24}
              onClick={handleList}
            />
          )}
        </div>
      </div>
    </>
  );
};
