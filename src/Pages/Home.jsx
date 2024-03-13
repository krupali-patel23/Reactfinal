import React from "react";
import banner from "./images/blue-door.jpg";
import high from "./images/sticker.png";
import cat1 from "./images/cat-1.png";
import cat2 from "./images/cat-2.png";
import cat3 from "./images/cat-3.png";
import cat4 from "./images/cat-4.png";
import cat5 from "./images/cat-5.png";
import pro2 from "./images/pro-2.png";
import pro3 from "./images/pro-3.png";
import pro4 from "./images/pro-4.png";
import pro5 from "./images/pro-5.png";
import offer from "./images/subs-bg.png";
import feat1 from "./images/feat-pro-1.png";
import feat2 from "./images/feat-pro-2.png";
import free from "./images/fz-3-feature-1.png";
import free1 from "./images/fz-3-feature-2.png";
import free2 from "./images/fz-3-feature-3.png";
import free3 from "./images/fz-3-feature-4.png";
import fit from "./images/fz-3-offer-img.png";
import blog1 from "./images/fz-3-blog-1.png";
import blog2 from "./images/fz-3-blog-2.png";
import blog3 from "./images/fz-3-blog-3.png";
import open from "./images/f1.png";
import open1 from "./images/f2.png";
import open2 from "./images/f3.png";
import open3 from "./images/f4.png";
import open4 from "./images/f5.png";
import door1 from "./images/fz-3-img-1.png";
import door2 from "./images/fz-3-img-2.png";
import door3 from "./images/fz-3-img-3.png";
import door4 from "./images/fz-3-img-4.png";
import door5 from "./images/fz-3-img-5.png";
import door6 from "./images/fz-3-img-6.png";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="mt-20 bg-gray-50 w-full h-lvh top-0 left-0 ">
        <div className="flex justify-evenly	items-center	">
          <div>
            <p className="text-6xl font-serif leading-tight	 text-black tracking-wider pl-5">
              The Perfect Door
              <br /> For every <br />
              Occasion
            </p>
          </div>
          <div>
            <div>
              <div
                style={{
                  border: "1px solid gray",
                  background: "white",
                  height: "630px",
                  width: "480px",
                  borderTopLeftRadius: "50%",
                  borderTopRightRadius: "50%",
                  marginTop: "18%",
                }}
              >
                <img
                  src={banner}
                  height="400px"
                  width="200px"
                  style={{ marginTop: "22%", marginLeft: "28%" }}
                />
              </div>
            </div>
            <div>
              <img
                src={high}
                className="animate-spin  rotate-180"
                style={{ marginTop: "-35%", marginLeft: "-30%" }}
              />
              <div
                style={{ marginTop: "-22%", marginLeft: "-18%" }}
                className="text-4xl"
              >
                25k
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}

      <div>
        <p className="text-4xl font-serif text-black py-12  text-center">
          Shop By Category
        </p>
      </div>

      <div className="flex justify-around mr-12">
        <div>
          <div>
            <img src={cat1} className="absolute" />
            <div className=" bg-white w-48 h-14 relative top-60 left-16">
              <p
                style={{ marginTop: "-6%", marginLeft: "6%" }}
                className="font-bold text-lg relative py-3 px-3"
              >
                Wood Door(321)
              </p>
            </div>
          </div>
          <div className="mt-80">
            <img src={cat2} className="absolute" />
            <div className=" bg-white w-52 h-14 relative top-60 left-16">
              <p
                style={{ marginTop: "-6%", marginLeft: "6%" }}
                className="font-bold text-lg relative py-3 px-1"
              >
                Fiberglass Door(154)
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={cat3} className="relative bottom-3 left-5" />
          <div
            className=" bg-white w-48 h-14 absolute "
            style={{ marginTop: "-7%", marginLeft: "18%" }}
          >
            <p style={{}} className="font-bold text-lg absolute py-3 px-3">
              Timber Doors(48)
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={cat4} className="absolute right-16 fixed" />
            <div className=" bg-white w-52 h-14 relative top-60 right-5">
              <p
                style={{ marginTop: "-6%", marginLeft: "6%" }}
                className="font-bold text-lg relative py-3 px-2"
              >
                Solid Core Door(54)
              </p>
            </div>
          </div>
          <div className="mt-80">
            <img src={cat5} className="absolute right-16" />
            <div className=" bg-white w-52 h-14 relative top-60 right-5">
              <p
                style={{ marginTop: "-6%", marginLeft: "6%" }}
                className="font-bold text-lg relative py-3 px-1"
              >
                Hollow Core Door(54)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* {section 3 } */}
      <div>
        <p className="text-5xl font-serif text-black py-12 text-center ">
          Latest Collection
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="flex justify-evenly fixe">
              <div>
                <img src={pro2} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Dark Brown Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $740
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={pro3} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Light Wood Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $550
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={pro4} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Dark Stripe Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $850
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={pro5} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Modern Fir Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $440
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {section 4} */}
      <div className="py-24">
        <img src={offer} className="h-96 w-full absolute  " />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="flex justify-around items-center py-36">
                <div>
                  <p className="relative text-5xl font-serif	 text-white	">
                    Subscribe!
                  </p>
                  <p className="relative text-3xl	font-serif font-thin text-white">
                    Newsletter For Update & Offer
                  </p>
                </div>
                <div>
                  <div className="flex">
                    <form action="#">
                      <input
                        type="email"
                        placeholder="Enter Your email address"
                        className="border-white py-3 pl-8 pr-40 border-2 bg-transparent relative "
                      />
                      <button className="relative bg-slate-50 py-3 pl-12 pr-16 text-black	font-semibold	text-lg">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {section 5} */}
      <div>
        <p className="text-5xl font-serif text-black pb-12 text-center">
          Featured Product
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="flex justify-evenly gap-0">
              <div>
                <img src={feat1} style={{ width: "610px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-between py-3 px-4">
                    <p className="text-black	text-xl font-semibold	">
                      Brown Solid Door
                    </p>
                    <div className="flex">
                      <span className="text-gray-500	text-center	text-xl	">
                        $630
                      </span>
                      <span className="text-gray-500	text-center	text-xl line-through pl-2">
                        $900
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src={feat2} style={{ width: "610px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-between py-3 px-4 ">
                    <p className="text-black	text-xl font-semibold	">
                      Brown Antique Door
                    </p>
                    <div className="flex">
                      <span className="text-gray-500	text-center	text-xl	">
                        $672
                      </span>
                      <span className="text-gray-500	text-center	text-xl line-through pl-2">
                        $830
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {section 6} */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="flex justify-between p-20 items-center">
              <div className="flex gap-8">
                <div className="pt-2">
                  <img src={free} />
                </div>
                <div>
                  <h4 className="text-black text-2xl">Free Delivery</h4>
                  <h6
                    className="text-black text-lg font-normal"
                    style={{ marginTop: "-5%" }}
                  >
                    Only in $50
                  </h6>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="pt-2">
                  <img src={free1} />
                </div>
                <div>
                  <h4 className="text-black text-2xl">Get Feedback</h4>
                  <h6
                    className="text-black text-lg font-normal"
                    style={{ marginTop: "-5%" }}
                  >
                    12000 Users
                  </h6>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="pt-2">
                  <img src={free2} />
                </div>
                <div>
                  <h4 className="text-black text-2xl">07 Days Returns</h4>
                  <h6
                    className="text-black text-lg font-normal"
                    style={{ marginTop: "-5%" }}
                  >
                    Policy Option
                  </h6>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="pt-2">
                  <img src={free3} />
                </div>
                <div>
                  <h4 className="text-black text-2xl">Secure Payment</h4>
                  <h6
                    className="text-black text-lg font-normal"
                    style={{ marginTop: "-5%" }}
                  >
                    System
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 7 */}
      <div className="w-full bg-gray-50 " style={{ height: "500px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="flex justify-evenly items-center gap-12">
                <div>
                  <h1 className="font-serif	text-6xl">30% OFF</h1>
                  <h2 className="font-serif	text-4xl tracking-wider">
                    Doors to Fit into your
                  </h2>
                  <p className="font-serif text-gray-500 	">
                    As such, it must blend with or complement the exteriorn
                    <br /> effect For instance, Victorian, contemporary, art
                    nouveau.
                  </p>
                  <button className="rounded-full w-40 h-16 back bg-neutral-950	text-white text-xl text-center">
                    Shop now
                  </button>
                </div>
                <div>
                  <img src={fit} className=" pt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 8 */}
      <div>
        <p className="text-5xl font-serif text-black py-12 text-center">
          Modern Interior Doors
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="flex justify-evenly fixe">
              <div>
                <img src={pro3} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Light Wood Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $550
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={pro4} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Dark Stripe Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $850
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={pro5} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Modern Fir Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $440
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={pro2} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Dark Brown Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $740
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*section 9 */}
      <div className="w-full mt-32" style={{backgroundColor:"#f8f8f8",height:"850px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <div>
                  <h1 className="text-5xl font-serif	text-center pt-20">Blog & Insights</h1>
                </div>
                <div className="flex justify-evenly pt-16">
                    <div style={{width:"600px"}}><img src={blog1}/>
                </div>
                    <div className="grid gap-y-8  ">
                        <div>
                            <img src={blog2}  style={{height:"270px",width:"550px"}}/>
                           
                        </div>
                        <div>
                        <img src={blog3} style={{height:"270px",width:"550px"}} />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 10 */}

      <div className="container mt-20">
        <div className="row">
          <div className="col-md-12">
                <div className="grid gap-y-6 ">
                    <h1 className="font-serif text-5xl font-serif	 
                     border-black">Browse by Brand</h1>
                    <p className="border-gray-300	border-b-2 "></p>
                </div>

                <div className="flex justify-center gap-32 items-center py-12">
                    <div><img src={open}/></div>
                    <div><img src={open1}/></div>
                    <div><img src={open2}/></div>
                    <div><img src={open3}/></div>
                    <div><img src={open4}/></div>
                </div>
          </div>
        </div>
      </div>

      {/* section 11 */}
      <div style={{backgroundColor:"#f8f8f8",height:"150px",width:"100%"}}>
          <h1 className="text-5xl font-serif text-black text-center pt-12">@farzaa.door</h1>
      </div>

      <div className="flex justify-center">
        <img src={door1} style={{width:"253px",height:"253px"}}/>
        <img src={door2} style={{width:"253px",height:"253px"}}/>
        <img src={door3} style={{width:"253px",height:"253px"}}/>
        <img src={door4} style={{width:"253px",height:"253px"}}/>
        <img src={door5} style={{width:"253px",height:"253px"}}/>
        <img src={door6} style={{width:"253px",height:"253px"}}/>
      </div>
      {/* <Footer/> */}
    </>
   
  );
};
export default Home;
