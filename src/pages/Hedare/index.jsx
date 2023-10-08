import React from "react";
import { useState } from "react";
import Button from "@/components/Button";
/* import image from "@/imgs/imge1png.png";
 */
export default function Index() {
  return (
    <>
      <nav
        style={{
          width: "1136px",
          backgroundColor: "#FBF8FD",
          borderRadius: "16px",
          margin: "0px auto",
          marginTop: "3%",
        }}
        className="bg-white border-gray-200 dark:bg-gray-900 "
      >
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <Button value="ثبت نام /ورود" bgcolor="#2748EF" color="#FFFFFF" />
            {/* div icones */}
            <div className="flex justify-start ml-2">
              <svg class="h-8 w-8 text-red-500" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="w-12 h-6 bg-gray-200 
  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                ></div>
              </label>
              <svg
                class="h-8 w-8 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="3" />{" "}
                <line x1="12" y1="5" x2="12" y2="5.01" />{" "}
                <line x1="17" y1="7" x2="17" y2="7.01" />{" "}
                <line x1="19" y1="12" x2="19" y2="12.01" />{" "}
                <line x1="17" y1="17" x2="17" y2="17.01" />{" "}
                <line x1="12" y1="19" x2="12" y2="19.01" />{" "}
                <line x1="7" y1="17" x2="7" y2="17.01" />{" "}
                <line x1="5" y1="12" x2="5" y2="12.01" />{" "}
                <line x1="7" y1="7" x2="7" y2="7.01" />
              </svg>
            </div>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* section khane*/}
      <section
        style={{ width: "1136px", margin: "0px auto" }}
        className="grid grid-rows-1 w-full h-36"
      >
        <div className="flex justify-start ">
          <p className="mt-4 opacity-30	text-sm 	">
            {" "}
            خانه
            <svg
              class="h-3 w-3 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <line x1="19" y1="12" x2="5" y2="12" />{" "}
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </p>
        </div>
      </section>
      {/* section1 blue=> jalaste*/}
      <section style={{ width: "1136px", height: "516px", margin: "0px auto" }}>
        <div
          className="grid grid-rows-2 "
          style={{
            width: "1136px",
            height: "516px",
            backgroundColor: "blue",
            margin: "0px auto",
          }}
        >
          <div className="flex justify-between">
            <div
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#FFDF00",
                marginRight: "5%",
                marginTop: "-50px",
              }}
            >
              <p
                className="font-bold	"
                style={{ fontSize: "131.81px", marginTop: "20px" }}
              >
                JS
              </p>
            </div>
            <div
              className="rounded-3xl	flex justify-around "
              style={{
                width: "725px",
                height: "114px",
                backgroundColor: "#FBF8FD",
                marginLeft: "5%",
                marginTop: "3%",
              }}
            >
              <div
                className="border-l-2 	 mt-3"
                style={{
                  width: "20%",
                  height: "72px",
                  borderColor: "#C7C5D0 ",
                }}
              >
                {/*  icon number jalase */}
                <div className="flex justify-start mt-4">
                  <svg
                    class="h-8 w-8 text-blue-300 ml-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />{" "}
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />{" "}
                    <line x1="3" y1="6" x2="3" y2="19" />{" "}
                    <line x1="12" y1="6" x2="12" y2="19" />{" "}
                    <line x1="21" y1="6" x2="21" y2="19" />
                  </svg>
                  <p className="text-base font-bold		">120</p>
                </div>
                <p className="text-sm	 font-bold ml-16	text-left	">جلسه</p>
              </div>

              <div
                className="border-l-2 	 mt-3"
                style={{
                  width: "20%",
                  height: "72px",
                  borderColor: "#C7C5D0 ",
                }}
              >
                <div className="flex justify-start mt-4">
                  <svg
                    class="h-8 w-8 text-blue-300 ml-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />{" "}
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />{" "}
                    <line x1="3" y1="6" x2="3" y2="19" />{" "}
                    <line x1="12" y1="6" x2="12" y2="19" />{" "}
                    <line x1="21" y1="6" x2="21" y2="19" />
                  </svg>
                  <p className="text-base font-bold		">120</p>
                </div>
                <p className="text-sm	 font-bold ml-16	text-left	">جلسه</p>
              </div>
              <div
                className="	 mt-3"
                style={{
                  width: "20%",
                  height: "72px",
                  borderColor: "#C7C5D0 ",
                }}
              >
                <div className="flex justify-start mt-4">
                  <svg
                    class="h-8 w-8 text-blue-300 ml-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />{" "}
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />{" "}
                    <line x1="3" y1="6" x2="3" y2="19" />{" "}
                    <line x1="12" y1="6" x2="12" y2="19" />{" "}
                    <line x1="21" y1="6" x2="21" y2="19" />
                  </svg>
                  <p className="text-base font-bold		">120</p>
                </div>
                <p className="text-sm	 font-bold ml-16	text-left	">جلسه</p>
              </div>
            </div>
          </div>
          {/*row2*/}
          <div
            style={{ width: "1,072px", height: "256px", marginTop: "-80px" }}
          >
            <p className="text-2xl	font-extrabold	leading-10	text-right	text-[#FFFFFF] mr-14">
              0 تا 100 جاوااسکریپت
            </p>
            <p className="text-sm		font-normal	leading-10	text-right	text-[#FFFFFF] mr-12">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد
            </p>
          </div>
        </div>
      </section>
      {/* section2 wite=> Introduction of the teacher*/}
      <section
        className="h-36 mt-24"
        style={{
          width: "1136px",
          height: "516px",
          margin: "0px auto",
          backgroundColor: "gray",
          marginTop: "100px",
        }}
      >
        <div class="grid grid-cols-2  m-auto">
          <div
            style={{
              width: "350px",
              height: "300px",
              borderRadius: "10px 80px 10px 10px",
              backgroundColor: "#DEE0FF",
              marginRight: "20px",
            }}
          >
           {/*  <img
              style={{ width: "100%", height: "200px" }}
              src={image}
              alt=""
            /> */}
          </div>
          <div>
            <p className="text-2xl text-center	 font-extrabold	text-[#1B1B1F]	">
              مدرس این دوره
            </p>
            <p className="text-base text-center	 leading-8		 font-extrabold	text-[#1B1B1F]	">
              علیرضا رزاقی طاهری <br />
              مدرس دوره های مختلف جاوااسکریپت
              <br />
              برنامه نویس پایتون، جاوااسکریپت،PHP
              <br />
              10سال سابقه برنامه نویس <br />
              مهندسی نرم افزار و ارشد MBM{" "}
            </p>
            {/* <Button  value="مشاهده رزومه"bgcolor="#2748EF" color="#FFFFFF" width="100px" height="30px"
            fontSize="10px"
             /> */}
          </div>
        </div>
      </section>
      jjjjjjjjjjjjjjjjjjj
    </>
  );
}
