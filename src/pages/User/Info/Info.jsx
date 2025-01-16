import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiTalk } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa6";
import { deletePay, PayInfo } from "../../../Services/PayServices";
import { getCookie } from "../../../helpers/cookie";
import swal from "sweetalert";

const Info = () => {
  const token = getCookie("token");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await PayInfo(token);
      setInfo(response);
    };
    fetchApi();
  }, [token]);

  const handleDelete = async (id) => {
    const response = await deletePay(id);
    if(response) {
      swal("Thành Công", "Xóa sản phẩm thành công!", "success");
      setInfo((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  }

  return (
    <div className="w-full">
      <div className="w-1200 mx-auto">
        {info.map((items, index) => {
          let prireSale = items.price - (items.price * items.discountPercentage) / 100;
          let total = prireSale * items.quantity
          return (
            <div key={index} className="w-full bg-white shadow-md p-4 mt-4">
              <div className="flex justify-between items-center gap-2 py-3 border-b-2">
                <div className="flex items-center gap-2 pb-3">
                  <span className="bg-orange-600 text-white text-sm px-1">
                    Mã đơn hàng: {items.id}
                  </span>
                  <span className="text-black text-lg">Bạn gặp vấn đề?</span>
                  <Link to={"/contact"}>
                    <GiTalk
                      size={24}
                      className="cursor-pointer text-orange-600"
                    />
                  </Link>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <FaOpencart size={24} className="mr-2 text-orange-600" />
                    <span>Trạng thái đơn hàng: {items.status}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border-b-2">
                <img className="w-24 h-24" src={items.images[0]} alt="" />
                <div className="w-3/4 ">
                  <span className="block uppercase">{items.title}</span>
                  <span className="block">x{items.quantity}</span>
                </div>
                <div className="flex items-center">
                  <span className="line-through text-gray-500">{items.price}$</span>
                  <span className="text-orange-600 ml-2">{prireSale.toFixed(2)}$</span>
                </div>
              </div>

              <div className="flex-col mt-2">
                <div className="flex items-end justify-end">
                  <span>Thành tiền:</span>
                  <span className="text-2xl text-orange-600 ml-2">{total.toFixed(2)}$</span>
                </div>
                <div className="flex justify-end mt-2">
                  <button onClick={() => handleDelete(items.id)} className="text-white bg-orange-600 px-4 py-2 rounded-md cursor-pointer hover:opacity-95 transition-all duration-300">
                    Hủy đơn hàng
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
