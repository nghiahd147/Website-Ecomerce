import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GiTalk } from "react-icons/gi";
import { RiArrowRightSLine } from "react-icons/ri";
import { CartServices, deleteCart, updateCartSelection } from "../../../Services/CartServices";
import { getCookie } from "../../../helpers/cookie";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { numCart } from "../../../actions/cart";

const Cart = () => {
  const [dataCart, setDataCart] = useState([]);
  const token = getCookie("token");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchApi = async () => {
      const response = await CartServices(token);
      dispatch(numCart(response.length))
      setDataCart(response);
     
    };

    fetchApi();
  }, [token, dispatch]);

  const handleQuantityChange = (id, type) => {
    setDataCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleDeleteItem = async (id) => {
    const deleteItem = await deleteCart(id);
    if (deleteItem) {
      swal("Thành Công", "Xóa sản phẩm thành công!", "success");
      setDataCart((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  const updateSelectedState = async (id, selected) => {
    await updateCartSelection(id, selected); // Gọi API để lưu trạng thái `selected`
  };

  const handleCheck = async (id) => {
    setDataCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              selected: !item.selected,
            }
          : item
      )
    );
      // Gọi API để lưu trạng thái mới
    const updatedItem = dataCart.find((item) => item.id === id);
    if (updatedItem) {
      await updateSelectedState(id, !updatedItem.selected);
    }
  };

  const handleCheckAll = async () => {
    const isAllSelected = dataCart.every((item) => item.selected);
    const updateCart = dataCart.map((item) => ({
        ...item,
        selected: !isAllSelected,
      }))

    setDataCart(updateCart);

    await Promise.all(
      updateCart.map((item) =>
        updateSelectedState(item.id, !isAllSelected)
      )
    );
  };

  const calculateTotal = () => {
    const datas = dataCart.filter((items) => {
      return items.selected === true;
    });
    return datas.reduce((total, item) => {
      return (total += item.price * item.quantity);
    }, 0);
  };

  // Chuyển sang Pay

  const handlePay = () => {
    const isChecked = dataCart.some((items) => items.selected === true);
    if (isChecked) {
      navigate("/pay");
      swal(
        "Hi!",
        "Hãy điền đầy đủ thông tin nhận hàng nhé khách iu !!!",
        "success"
      );
    } else {
      swal("Error!", "Bạn chưa chọn sản phẩm nào !!!", "error");
    }
  };

  return (
    <div className="relative">
      <div className="w-1200 mx-auto shadow-md mt-16 p-4">
        <div className="w-full bg-white">
          {/* No Cart */}
          
          {/* Has Cart */}
          {/* Header Cart */}
          <div className="flex items-center gap-2 py-3 border-b-2">
            <span className="bg-orange-600 text-white text-sm px-1">
              Liên hệ
            </span>
            <span className="text-black text-lg">Bạn gặp vấn đề?</span>
            <Link to={"/contact"}>
              <GiTalk size={24} className="cursor-pointer text-orange-600" />
            </Link>
          </div>

          {/* Body Cart */}
          <div className="flex flex-col mt-4 ">
            <div className="flex items-center gap-2 bg-orange-100 p-4">
              <span className="text-orange-600 text-xs border-orange-600 border-2 rounded-sm px-1 bg-transparent">
                Mua thêm
              </span>
              <span className="text-black text-lg">
                Bạn muốn mua thêm sản phẩm khác chứ
              </span>
              <Link
                to={"/shop"}
                className="text-orange-600 text-lg flex items-center"
              >
                Thêm
                <RiArrowRightSLine
                  size={30}
                  className="text-orange-600 pt-1 pr-1"
                />
              </Link>
            </div>
            <div className="mt-2 p-4">
              {dataCart.map((items, index) => {
                let prireSale =
                  items.price - (items.price * items.discountPercentage) / 100;
                let total = items.price * items.quantity;
                return (
                  <div key={index} className="mt-2">
                    {/* Item Product */}

                    <div className="flex justify-between items-center px-2">
                      <>
                        <input
                          className="cursor-pointer w-5 h-5"
                          type="checkbox"
                          name={items.name}
                          checked={items.selected || false}
                          onChange={() => handleCheck(items.id)}
                        />
                      </>

                      <img
                        className="w-24 h-24"
                        src={items.images}
                        alt="sanpham"
                      />
                      <span className="block w-56 max-h-12 overflow-y-hidden ">
                        {items.name}
                      </span>
                      <div className="flex w-36">
                        <span className="line-through text-gray-400">
                          {prireSale.toFixed(2)}$
                        </span>
                        <span className="text-black ml-2">{items.price}$</span>
                      </div>
                      <div className="flex border-2 border-gray-350 outline-none items-center">
                        <span
                          onClick={() =>
                            handleQuantityChange(items.id, "increase")
                          }
                          className="cursor-pointer px-4 border-r-2 border-gray-350 h-full py-2"
                        >
                          +
                        </span>
                        <span className="block px-10 py-2">
                          {items.quantity}
                        </span>
                        <span
                          onClick={() =>
                            handleQuantityChange(items.id, "decrease")
                          }
                          className="cursor-pointer px-4 border-l-2 border-gray-350 h-full py-2"
                        >
                          -
                        </span>
                      </div>
                      <span className="text-orange-600">
                        {total.toFixed(2)}$
                      </span>
                      <button onClick={() => handleDeleteItem(items.id)}>
                        Xóa
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Cart */}
      <div className="mt-8 w-full mb-auto">
        <div className="flex justify-between shadow-md w-1200 h-20 mx-auto px-6 bg-white">
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer">
              <input
                className="cursor-pointer w-5 h-5"
                type="checkbox"
                name=""
                id=""
                onChange={handleCheckAll}
              />
              <span className="ml-3 text-lg">Chọn tất cả</span>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-lg">Tổng thanh toán: </span>
            <span className="text-lg mx-2 text-orange-600">
              {calculateTotal().toFixed(2)}$
            </span>

            <button
              onClick={handlePay}
              className="text-lg text-center w-52 bg-orange-600 text-white rounded-md py-2 px-2 hover:opacity-90 transition-all duration-300"
            >
              Mua hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
