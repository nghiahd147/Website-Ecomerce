import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Pay.css";
import { Link, useNavigate } from "react-router-dom";
import { CartServices, deleteCart } from "../../../Services/CartServices";
import { getCookie } from "../../../helpers/cookie";
import { createPay } from "../../../Services/PayServices";
import swal from 'sweetalert';

const Pay = () => {
  const token = getCookie("token");
  const [payment, setPayment] = useState(true);
  const navigate = useNavigate()
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    specificAddress: "",
    payment: "Thanh toán khi nhận hàng",
    title: "",
    images: "",
    price: 0,
    quantity: 0,
    total: 0,
    discountPercentage: 0,
    status: "Chờ xác nhận",
    token: token
  });
  // const [infoPayment, setInfoPayment] = useState("");
  const [product, setProduct] = useState([]);

  // Check Payment
  const handleChecked = (e) => {
    let paymentValue = e.target.value;
    setInfo((prevInfo) => ({
      ...prevInfo,
      payment: paymentValue, // Cập nhật trực tiếp giá trị payment
    }));
  };

  // console.log(isChecked)

  // Get Info Address
  const handleInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  // Get Info Cart
  useEffect(() => {
    const fetchApi = async () => {
      const response = await CartServices(token);
      const result = response.filter((items) => items.selected === true);
      setProduct(result);
  
      if (result.length > 0) {
        setInfo((prevInfo) => ({
          ...prevInfo,
          title: result.map((item) => item.name),
          images: result.map((item) => item.images[0]),
          price: result[0].price,
          quantity: result[0].quantity,
          discountPercentage: result[0].discountPercentage,
          total: result.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }));
      }
    };
    fetchApi();
  }, [token]);
  
  // Total
  const results = () => {
    return product.reduce((result, items) => {
      return (result += items.price * items.quantity);
    }, 0);
  };

  // Submit
  const handleSubmit = async () => {
    const response = await createPay(info)
    if(response) {
      await Promise.all(product.map(item => deleteCart(item.id)));
      swal("Good job!", "You clicked the button!", "success");
      navigate('/')
    }
  }

  // console.log(info)

  return (
    <div className="w-full">
      {/* Địa chỉ nhận hàng */}
      <div className="w-1200 mx-auto mt-6 px-8 py-10 shadow-md relative">
        <div className="xBNaac absolute top-0 left-0 right-0"></div>
        <div className="flex-col">
          {/* Header */}
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="text-orange-600" size={21} />
            <span className="text-xl text-orange-600 ml-1">
              Địa chỉ nhận hàng
            </span>
          </div>
          {/* Form */}
          <div className="flex-col">
            <div className="flex gap-2 mt-1">
              <div className="flex-1">
                <label className="block" htmlFor="Họ Và Tên">
                  Họ và tên
                </label>
                <input
                  className="border-2 border-solid border-gray-200 rounded-md w-full px-2 py-1 outline-none mt-1"
                  type="text"
                  placeholder="Họ Và Tên"
                  name="name"
                  onChange={handleInfo}
                  value={info.name || ""}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block" htmlFor="Số điện thoại">
                  Số điện thoại
                </label>
                <input
                  className="border-2 border-solid border-gray-200 rounded-md w-full px-2 py-1 outline-none mt-1"
                  type="text"
                  placeholder="Số điện thoại"
                  name="phone"
                  onChange={handleInfo}
                  value={info.phone || ""}
                  required
                />
              </div>
            </div>
            <div className="flex-col mt-1">
              <label
                className="block"
                htmlFor="Tỉnh/Thành phố, Quận/Huyện, Phường/Xã"
              >
                Tỉnh/Thành phố, Quận/Huyện, Phường/Xã
              </label>
              <input
                className="border-2 border-solid border-gray-200 rounded-md w-full px-2 py-1 outline-none mt-1"
                type="text"
                placeholder="Tỉnh/Thành phố, Quận/Huyện, Phường/Xã"
                name="address"
                onChange={handleInfo}
                value={info.address || ""}
                required
              />
            </div>
            <div className="flex-col mt-1">
              <label className="block" htmlFor="Địa chỉ cụ thể">
                Địa chỉ cụ thể
              </label>
              <input
                className="border-2 border-solid border-gray-200 rounded-md w-full px-2 py-1 outline-none mt-1"
                type="text"
                placeholder="Địa chỉ cụ thể"
                name="specificAddress"
                onChange={handleInfo}
                value={info.specificAddress || ""}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Phương thức thanh toán */}
      <div className="w-1200 mx-auto mt-6 px-8 py-10 shadow-md relative">
        <span className="text-xl">Phương thức thanh toán</span>
        <div className="flex-col ml-3 ">
          <label
            onClick={() => setPayment(true)}
            className="flex items-center my-2 cursor-pointer text-lg"
          >
            <input
              type="radio"
              value="Thanh toán khi nhận hàng"
              name="payment"
              className="cursor-pointer"
              onChange={handleChecked}
              checked={info.payment === "Thanh toán khi nhận hàng"}
            />
            <span
              className={
                payment
                  ? "ml-2 hover:text-orange-600 transition-all duration-300 pay-select"
                  : "ml-2 hover:text-orange-600 transition-all duration-300"
              }
            >
              Thanh toán khi nhận hàng
            </span>
          </label>
          <label
            onClick={() => setPayment(false)}
            className="flex items-center my-2 cursor-pointer text-lg"
          >
            <input
              type="radio"
              value="Thanh toán qua ngân hàng"
              name="payment"
              className="cursor-pointer"
              onChange={handleChecked}
              checked={info.payment === "Thanh toán qua ngân hàng"}
            />
            <span
              className={
                payment
                  ? "ml-2 hover:text-orange-600 transition-all duration-300"
                  : "ml-2 hover:text-orange-600 transition-all duration-300 pay-select"
              }
            >
              Thanh toán qua ngân hàng
            </span>
          </label>
        </div>
      </div>

      {/* Sản phẩm */}
      <div className="w-1200 mx-auto mt-6 px-8 py-10 shadow-md relative ">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-xl">Sản phẩm</span>
          <div className="flex items-center gap-36 text-gray-400">
            <span>Đơn giá</span>
            <span>Số lượng</span>
            <span>Thành tiền</span>
          </div>
        </div>

        {/* Detail Pay */}
        <div className="flex-col items-center mt-5">
          {product.map((items, index) => {
            return (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <div className="w-1/2 flex items-center">
                    <img className="w-20 h-20" src={items.images[0]} alt="" />
                    <span className="text-detail__pay ml-2">{items.name}</span>
                  </div>
                  <div className="w-1/2 flex items-center justify-end gap-40">
                    <span className="">{items.price}$</span>
                    <span className="">{items.quantity}</span>
                    <span className="">{items.price * items.quantity}$</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <span>
            Tổng số tiền:
            <span className="text-orange-600 text-xl ml-2">
              {results().toFixed(2)}$
            </span>
          </span>
        </div>
      </div>

      <div className="w-1200 mx-auto mt-6 px-8 py-10 relative shadow-md flex justify-between items-center">
        <span>
          Nhấn "Đặt Hàng" đồng nghĩa với việc bạn đồng ý với{" "}
          <Link className="text-blue-400">Điều khoản Fusta</Link>
        </span>
        <button 
          onClick={handleSubmit}
          className="text-lg text-center w-52 bg-orange-600 text-white rounded-md py-2 px-2 hover:opacity-90 transition-all duration-300"
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default Pay;
