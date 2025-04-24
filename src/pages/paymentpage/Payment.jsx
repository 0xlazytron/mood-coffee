import { motion } from "framer-motion";
import { useState } from "react";
import { Footer, Navbar } from "../../components";
import apple from "../../assets/payment/apple.png";
import visa from "../../assets/payment/Visa.png";
import Mastercard from "../../assets/payment/Mastercard.png";
import Amex from "../../assets/payment/Amex.png";
import Discover from "../../assets/payment/Discover.png";
import cofeeCup from "../../assets/payment/cofeecup.jpeg";

export default function Payment() {
  const [selectedPayment, setSelectedPayment] = useState("credit-card");
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const orderItems = [
    {
      id: 1,
      name: "Mericano Cold Coffee",
      description:
        "A professionally graded roasted coffee beans, fresh roasting from",
      price: 29.99,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Mericano Cold Coffee",
      description:
        "A professionally graded roasted coffee beans, fresh roasting from",
      price: 29.99,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Mericano Cold Coffee",
      description:
        "A professionally graded roasted coffee beans, fresh roasting from",
      price: 29.99,
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const taxFee = 5.0;
  const total = subtotal + taxFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission
    console.log({ selectedPayment, cardData });
  };

  return (
    <>
      <Navbar />
      <section className=" min-h-screen py-[3rem] mt-[7rem] max-w-7xl mx-auto">
        <p className=" text-5xl font-bold text-[#7D6356] text-center my-[3rem]">
          Choose The Payment Method
        </p>
        <div className=" bg-[#FDFDFD] min-h-[200px] shadow-md rounded-lg p-2">
          <h2 className=" text-[#32434D] md:text-[24px] text-[16px] p-[1.4rem] font-semibold">
            Please select the payment Method
          </h2>
          <div className=" flex sm:flex-row flex-col justify-between gap-[1rem]  px-6">
            <div>
              <img
                src={apple}
                alt="apple store"
                className=" md:w-auto w-[100px] "
              />
            </div>
            <div className=" flex md:gap-[1rem] gap-[0.5rem] basis-[60%] items-center sahdow-lg border border-[#7D6356] rounded-lg p-1   shadow-[#7D6356]">
              {[visa, Mastercard, Amex, Discover].map((image, index) => {
                return (
                  <img
                    src={image}
                    key={index}
                    alt="payments images"
                    className=" lg:w-[100px] sm:w-[50px] w-[40px] transition-all ease-in-out delay-150 hover:scale-105 cursor-pointer"
                  />
                );
              })}
              <h2 className=" lg:text-xl md:text-lg text-xs font-semibold text-[#32434D]">
                Pay With Credit Card
              </h2>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 gap-[1rem] grid-cols-1    ">
          <div className="my-[4rem] bg-white shadow-md p-[2rem] rounded-lg">
            <form className=" flex flex-col gap-[1rem]">
              <div className=" flex flex-col gap-2">
                <label className=" texr-[#32434D]">16 Digits Card Number</label>
                <input
                  placeholder="1234 9294 8450 9394"
                  type="number"
                  className="  py-2 px-4 border border-[#DEE1E1] shadow-[#DEE1E1] shadow  focus:ring-[#7D6356]"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className=" texr-[#32434D]">Card Holder Name</label>
                <input
                  placeholder="1234 9294 8450 9394"
                  type="number"
                  className="  py-2 px-4 border border-[#DEE1E1] shadow-[#DEE1E1] shadow  focus:ring-[#7D6356]"
                />
              </div>
              <div className=" flex justify-between gap-[1.2rem] ">
                <div className=" flex flex-col gap-2  basis-[50%]">
                  <label className=" texr-[#32434D]">Expiry Date</label>
                  <input
                    placeholder="1234 9294 8450 9394"
                    type="number"
                    className="  py-2 px-4 border border-[#DEE1E1] shadow-[#DEE1E1] shadow  focus:ring-[#7D6356]"
                  />
                </div>
                <div className=" flex flex-col gap-2 basis-[50%]">
                  <label className=" texr-[#32434D]">Security Code</label>
                  <input
                    placeholder="1234 9294 8450 9394"
                    type="number"
                    className="  py-2 px-4 border border-[#DEE1E1] shadow-[#DEE1E1] shadow  focus:ring-[#7D6356]"
                  />
                </div>
             

              </div>
              <div>
                    <button type="submit" className=" bg-[#7D6356] hover:bg-[#7D6356]/80 py-3 px-8 text-center w-full rounded-full text-white shadow-sm">Pay Now</button>
                </div>
            </form>
          </div>

          <div className="my-[4rem] bg-white shadow-md p-[1rem] rounded-lg">
            <h2 className=" md:text-xl text-lg font-semibold text-[#32434D] my-3">
              Order Summary
            </h2>
            <div className=" flex flex-col gap-[0.4rem]">
              {[
                {
                  img: cofeeCup,
                  heading: "Mericano Cold Coffee",
                  desc: "It is produced by grinding roasted coffee beans, then boiling them",
                  price: "$29.99",
                },
                {
                  img: cofeeCup,
                  heading: "Mericano Cold Coffee",
                  desc: "It is produced by grinding roasted coffee beans, then boiling them",
                  price: "$29.99",
                },
                {
                  img: cofeeCup,
                  heading: "Mericano Cold Coffee",
                  desc: "It is produced by grinding roasted coffee beans, then boiling them",
                  price: "$29.99",
                },
              ].map((items, index) => {
                return (
                  <div key={index} className=" text-[#603809] flex gap-[0.5rem]  items-center justify-between border py-2 px-4 border-[#603809]/30 shadow-sm ">
                    <div className="">
                      <img src={items.img} className=" w-[100px] h-[100px] rounded-lg" />
                    </div>
                    <div>
                      <h2 className=" sm:text-[20px] text-[18px] font-bold">{items.heading}</h2>
                      <p className=" sm:text-[14px] text-[14px]">{items.desc}</p>
                    </div>
                    <div className=" w-[2px] h-[70px] bg-[#E8DCD0]"></div>
                    <div className=" text-[20px] font-semibold ">{items.price}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
