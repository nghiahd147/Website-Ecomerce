import React, { useState } from "react";
import { getCookie } from "../../../helpers/cookie";
import { createContact } from "../../../Services/ContactServices";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ name: "", email: "", description: "" });

  const handleContact = (e) => {
    e.preventDefault();
    const tokenData = e.target[4].value;
    const data = { ...info, token: tokenData };
    const response = createContact(data);
    if (response) {
      navigate("/contact");
      swal("Good job!", "You clicked the button!", "success");
      setInfo({ name: "", email: "", description: "" });
    } else {
      swal("Good job!", "You clicked the button!", "error");
    }
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setInfo({
      ...info,
      [id]: value,
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-1200 grid grid-cols-2 grid-rows-1 gap-10">
        {/* Form Contact */}
        <div>
          <div className="mt-10 flex flex-col gap-3">
            <h3 className="text-2xl text-black font-bold">Get in Touch</h3>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit explicabo dolorem, quis dolorum consequatur
              sapiente. Voluptatum, illum. Beatae quam, repudiandae nihil hic
              debitis voluptatibus. Aliquid unde sunt corporis vero beatae?
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <span>
              <strong>Address:</strong> House 09, Road 32, mohammadpur, Dhaka
              1212
            </span>
            <span>
              <strong>Phone:</strong> +966 11 11 146
            </span>
            <span>
              <strong>Email:</strong> yoursite@demo.com
            </span>
          </div>
          <form
            method="POST"
            className="w-440 mt-10 flex flex-col gap-5"
            action=""
            onSubmit={handleContact}
          >
            <input
              type="text"
              className="bg-gray-100 px-4 py-1 outline-none border-none rounded-md ::place placeholder-gray-500 placeholder-italic"
              id="name"
              value={info.name}
              placeholder="Your Name*"
              onChange={handleChange}
            />
            <input
              type="text"
              className="bg-gray-100 px-4 py-1 outline-none border-none rounded-md ::place placeholder-gray-500 placeholder-italic"
              id="email"
              value={info.email}
              placeholder="Mail Address*"
              onChange={handleChange}
            />
            <textarea
              className="bg-gray-100 h-36 px-4 py-1 outline-none border-none rounded-md ::place placeholder-gray-500 placeholder-italic"
              name=""
              id="description"
              value={info.description}
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>
            <button
              className="w-36 bg-orange-500 py-2 px-4 rounded-sm cursor-pointer hover:bg-black transition-all duration-200 ease-in text-white"
              type="submit"
            >
              <input type="hidden" id="token" value={getCookie("token")} />
              Send Email
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="h-full w-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.5453588024677!2d106.4004059132634!3d21.114156765683102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31357900725504e9%3A0xae8c46bb30344f82!2zVsaw4budbiBob2EgVGjhu6d5IEhvw6BuZw!5e0!3m2!1svi!2s!4v1734793097675!5m2!1svi!2s"
            width="600"
            height="450"
            className="h-full w-full mt-10"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Vườn hoa Thủy Hồng"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
