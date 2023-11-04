import React from "react";
import Profile from "../../components/common/Profile";
import Footer from "../../components/common/Footer";

const Settings = () => {
  return (
    <div>
      <Profile />
      <div
        className="w-full p-5 rounded-2xl py-2 px-3 md:py-5 md:px-8"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex items-center gap-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23.184 9.06L20.916 8.304L21.984 6.168C22.0923 5.94443 22.1285 5.69276 22.0876 5.44773C22.0468 5.2027 21.9309 4.97638 21.756 4.8L19.2 2.244C19.0227 2.06651 18.7942 1.94905 18.5467 1.90815C18.2991 1.86726 18.045 1.90497 17.82 2.016L15.684 3.084L14.928 0.816004C14.8482 0.579595 14.6966 0.373955 14.4944 0.227702C14.2923 0.0814485 14.0495 0.00185721 13.8 4.00024e-06H10.2C9.94843 -0.000645394 9.70301 0.0777867 9.49845 0.224214C9.29388 0.370642 9.1405 0.577659 9.06 0.816004L8.304 3.084L6.168 2.016C5.94443 1.90774 5.69276 1.87153 5.44773 1.91237C5.2027 1.9532 4.97638 2.06908 4.8 2.244L2.244 4.8C2.06651 4.97732 1.94905 5.20581 1.90815 5.45335C1.86726 5.70089 1.90497 5.95502 2.016 6.18L3.084 8.316L0.816004 9.072C0.579595 9.15184 0.373955 9.3034 0.227702 9.50557C0.0814485 9.70774 0.00185721 9.95048 4.00024e-06 10.2V13.8C-0.000645394 14.0516 0.0777867 14.297 0.224214 14.5016C0.370642 14.7061 0.577659 14.8595 0.816004 14.94L3.084 15.696L2.016 17.832C1.90774 18.0556 1.87153 18.3072 1.91237 18.5523C1.9532 18.7973 2.06908 19.0236 2.244 19.2L4.8 21.756C4.97732 21.9335 5.20581 22.051 5.45335 22.0918C5.70089 22.1327 5.95502 22.095 6.18 21.984L8.316 20.916L9.072 23.184C9.1525 23.4223 9.30588 23.6294 9.51045 23.7758C9.71501 23.9222 9.96043 24.0006 10.212 24H13.812C14.0636 24.0006 14.309 23.9222 14.5136 23.7758C14.7181 23.6294 14.8715 23.4223 14.952 23.184L15.708 20.916L17.844 21.984C18.0661 22.0895 18.3154 22.1243 18.5579 22.0835C18.8004 22.0427 19.0246 21.9284 19.2 21.756L21.756 19.2C21.9335 19.0227 22.051 18.7942 22.0918 18.5467C22.1327 18.2991 22.095 18.045 21.984 17.82L20.916 15.684L23.184 14.928C23.4204 14.8482 23.626 14.6966 23.7723 14.4944C23.9186 14.2923 23.9981 14.0495 24 13.8V10.2C24.0006 9.94843 23.9222 9.70301 23.7758 9.49845C23.6294 9.29388 23.4223 9.1405 23.184 9.06ZM21.6 12.936L20.16 13.416C19.8289 13.5234 19.5251 13.7016 19.2697 13.9381C19.0143 14.1747 18.8134 14.464 18.681 14.7859C18.5485 15.1078 18.4877 15.4547 18.5027 15.8025C18.5178 16.1503 18.6083 16.4907 18.768 16.8L19.452 18.168L18.132 19.488L16.8 18.768C16.4923 18.6147 16.1552 18.5293 15.8116 18.5176C15.468 18.5058 15.1258 18.5681 14.8084 18.7001C14.4909 18.8321 14.2055 19.0307 13.9715 19.2826C13.7375 19.5345 13.5603 19.8337 13.452 20.16L12.972 21.6H11.064L10.584 20.16C10.4766 19.8289 10.2984 19.5251 10.0619 19.2697C9.82533 19.0143 9.53605 18.8134 9.21411 18.681C8.89216 18.5485 8.54526 18.4877 8.19747 18.5027C7.84968 18.5178 7.50932 18.6083 7.2 18.768L5.832 19.452L4.512 18.132L5.232 16.8C5.39172 16.4907 5.48223 16.1503 5.49726 15.8025C5.51229 15.4547 5.45148 15.1078 5.31905 14.7859C5.18662 14.464 4.98574 14.1747 4.73034 13.9381C4.47494 13.7016 4.17113 13.5234 3.84 13.416L2.4 12.936V11.064L3.84 10.584C4.17113 10.4766 4.47494 10.2984 4.73034 10.0619C4.98574 9.82533 5.18662 9.53605 5.31905 9.21411C5.45148 8.89216 5.51229 8.54526 5.49726 8.19747C5.48223 7.84968 5.39172 7.50932 5.232 7.2L4.548 5.868L5.868 4.548L7.2 5.232C7.50932 5.39172 7.84968 5.48223 8.19747 5.49726C8.54526 5.51229 8.89216 5.45148 9.21411 5.31905C9.53605 5.18662 9.82533 4.98574 10.0619 4.73034C10.2984 4.47494 10.4766 4.17113 10.584 3.84L11.064 2.4H12.936L13.416 3.84C13.5234 4.17113 13.7016 4.47494 13.9381 4.73034C14.1747 4.98574 14.464 5.18662 14.7859 5.31905C15.1078 5.45148 15.4547 5.51229 15.8025 5.49726C16.1503 5.48223 16.4907 5.39172 16.8 5.232L18.168 4.548L19.488 5.868L18.768 7.2C18.6147 7.50774 18.5293 7.84482 18.5176 8.18843C18.5058 8.53204 18.5681 8.87416 18.7001 9.19162C18.8321 9.50908 19.0307 9.79448 19.2826 10.0285C19.5345 10.2625 19.8337 10.4397 20.16 10.548L21.6 11.028V12.936ZM12 7.2C11.0507 7.2 10.1226 7.48152 9.33327 8.00895C8.54391 8.53638 7.92868 9.28603 7.56538 10.1631C7.20208 11.0402 7.10702 12.0053 7.29223 12.9364C7.47744 13.8675 7.9346 14.7228 8.60589 15.3941C9.27718 16.0654 10.1325 16.5226 11.0636 16.7078C11.9947 16.893 12.9598 16.7979 13.8369 16.4346C14.714 16.0713 15.4636 15.4561 15.9911 14.6667C16.5185 13.8774 16.8 12.9494 16.8 12C16.8 10.727 16.2943 9.50606 15.3941 8.60589C14.4939 7.70571 13.273 7.2 12 7.2ZM12 14.4C11.5253 14.4 11.0613 14.2592 10.6666 13.9955C10.272 13.7318 9.96434 13.357 9.78269 12.9184C9.60104 12.4799 9.55351 11.9973 9.64612 11.5318C9.73872 11.0662 9.9673 10.6386 10.3029 10.3029C10.6386 9.9673 11.0662 9.73872 11.5318 9.64612C11.9973 9.55351 12.4799 9.60104 12.9184 9.78269C13.357 9.96434 13.7318 10.272 13.9955 10.6666C14.2592 11.0613 14.4 11.5253 14.4 12C14.4 12.6365 14.1471 13.247 13.6971 13.6971C13.247 14.1471 12.6365 14.4 12 14.4Z"
                fill="#A4B4CB"
              />
            </svg>
          </span>
          <p className="text-[22px] font-medium font-Jost text-[#141736]">
            Settings
          </p>
        </div>
        <div className="flex justify-center pb-10">
          <div
            className="max-w-[650px] w-full py-3 px-5 md:py-8 md:px-10 rounded-[10px] bg-white mt-24 mb-24 pb-10"
            style={{ boxShadow: "-1px 4px 110px 9px rgba(0, 0, 0, 0.06)" }}
          >
            <h2 className="text-[18px] sm:text-[22px] text-[#000000] font-Jost font-medium mb-5">
              Change User Information
            </h2>
            <form className="w-full flex flex-col md:flex-row gap-6 mmd:gap-[74px] justify-between">
              <div className="w-full flex flex-col gap-6">
                <div>
                  <div className="w-full flex flex-col gap-3">
                    <label
                      htmlFor="email"
                      className="font-Jost text-[14px] text-[#64748B] font-semibold leading-5"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      style={{
                        boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
                      }}
                      className="font-Jost text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-4 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-10">
                  <div className="w-full flex flex-col gap-3">
                    <label
                      htmlFor=""
                      className="font-Jost text-[14px] text-[#64748B] font-semibold leading-5"
                    >
                      Phone Number:
                    </label>
                    <input
                      type="number"
                      style={{
                        boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
                      }}
                      className="font-Jost text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-4 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize"
                    />
                  </div>

                  <div className="w-full flex flex-col gap-3">
                    <label
                      htmlFor=""
                      className="font-Jost text-[14px] text-[#64748B] font-semibold leading-5"
                    >
                      Address:
                    </label>
                    <input
                      type="text"
                      style={{
                        boxShadow: "-1px 4px 110px 9px rgba(43, 37, 37, 0.06)",
                      }}
                      className="font-Jost text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-4 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize"
                    />
                  </div>
                </div>

                <div className="w-full flex mt-3">
                  <button
                    type="submit"
                    className="w-full py-5 px-5 text-center text-[18px] md:text-[20px] font-Jost capitalize font-semibold leading-6 text-white bg-[#0070D2] rounded-md"
                  >
                    update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
