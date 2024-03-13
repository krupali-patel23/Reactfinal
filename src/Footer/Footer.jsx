import React from "react";
import log from "../Footer/image/logo-3.png";

export default function Footer() {
  return (
    <>
      <div
        className="w-full"
        style={{ backgroundColor: "#f8f8f8", height: "500px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="flex justify-between pt-24">
                <div>
                  <img src={log} />
                  <p className="font-sans text-slate-600 w-80 pt-9">
                    There Are Many Different Styles Of Including Aviator,
                    Wayfarer, Cat-Eye, Round, Some Sunglasses Also Have
                    Polarized Lenses
                  </p>
                </div>

                <div>
                  <h5 className="text-2xl font-normal font-sans">
                    Ways to Shop
                  </h5>
                  <p className="font-sans text-slate-600 pt-9">
                    Shop on Facebook
                  </p>
                  <p className="font-sans text-slate-600 ">Shop on Ebay</p>
                  <p className="font-sans text-slate-600 ">Shop by Category</p>
                  <p className="font-sans text-slate-600 ">Shop All</p>
                  <p className="font-sans text-slate-600 ">
                    Coupons and Discounts
                  </p>
                </div>

                <div>
                  <h5 className="text-2xl	font-normal	font-sans">
                    Customer Service
                  </h5>
                  <p className="font-sans text-slate-600 pt-9">
                    Shipping and Returns
                  </p>
                  <p className="font-sans text-slate-600 ">Product Care</p>
                  <p className="font-sans text-slate-600 ">Returns & Policy</p>
                  <p className="font-sans text-slate-600 ">
                    Warranty & Lifetime Service
                  </p>
                  <p className="font-sans text-slate-600 ">
                    Jewelry Care Instruction
                  </p>
                  <p className="font-sans text-slate-600 ">FAQ</p>
                </div>

                <div>
                  <h5 className="text-2xl	font-normal	font-sans">Quick Links</h5>
                  <p className="font-sans text-slate-600 pt-9">Our Story</p>
                  <p className="font-sans text-slate-600 ">Blog & Press</p>
                  <p className="font-sans text-slate-600 ">Order History</p>
                  <p className="font-sans text-slate-600 ">Wish List</p>
                  <p className="font-sans text-slate-600 ">
                    Terms & Conditions
                  </p>
                </div>

                <div>
                  <h5 className="text-2xl	font-normal	font-sans">
                    Store Address
                  </h5>
                  <div className="flex pt-9 gap-2">
                    <span className=" text-3xl  text-slate-500">
                      <ion-icon name="location-outline"></ion-icon>
                    </span>
                    <p className="font-sans text-slate-600">
                      16 Rr 2, Ketchikan,
                      <br /> Alaska 99901, USA
                    </p>
                   
                  </div>
                  <p className="border-gray-400 border-b-2 "></p>
                  <div className="flex gap-2">
                    <span className=" text-3xl  text-slate-500">
                    <ion-icon name="call-outline"></ion-icon></span>
                    <p className="font-sans text-slate-600">
                    (907) 225-4144

                    </p>
                  </div>
                  <p className="border-gray-400 border-b-2 "></p>
                  <div className="flex gap-2">
                    <span className=" text-3xl  text-slate-500">
                    <ion-icon name="mail-outline"></ion-icon></span>
                    <p className="font-sans text-slate-600">
                    info@webmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
