import { useState } from "react";
import { useNavigate } from "react-router-dom";

// local image
import gradientBg from "../../assets/Authentication/linear-gradient-bg.svg";
import loginBg from "../../assets/Authentication/login-page-bg.png";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleReg = (e) => {
    e.preventDefault();
    if (username == "admin" && password == "123456") {
      navigate("/number-verify");
      sessionStorage.setItem(
        "authUser",
        JSON.stringify({
          accessToken: "1234567890",
          user: true,
        })
      );
    } else {
      alert("username is admin and password is 123456");
    }
  };

  return (
    <section>
      <div className="mx-auto font-Jost">
        <div className="flex flex-col md:flex-row">
          <div
            className="h-screen object-cover bg-no-repeat w-full md:w-1/2"
            style={{ background: `url(${loginBg})` }}
          >
            <div
              style={{ background: `url(${gradientBg})` }}
              className="h-full flex items-center justify-center text-white"
            >
              <div className="">
                <h2 className="text-[3rem] md:text-[4.25rem] text-center font-bold leading-[52px] max-w-xl mx-auto mb-11 ">
                  <span className="underline block mb-7"> Mitigating </span>{" "}
                  Consumer Debt
                </h2>
                <p className="text-3xl w-10/12 text-center mx-auto">
                  Together, we pave the way to a brighter, debt-free tomorrow.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-screen w-full md:w-1/2">
            <div className="max-w-md flex flex-col items-center p-8 rounded-md w-full text-center">
              <h1 className="mb-12 text-center">
                <svg
                  width="238"
                  height="58"
                  viewBox="0 0 238 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55.0526 37.6976C55.8057 37.6976 56.5481 37.4521 57.2799 36.9611C58.0116 36.4736 58.6617 35.9079 59.2265 35.2674C59.905 34.5878 60.523 33.7802 61.0878 32.8373C61.1234 32.7234 61.2193 32.5918 61.3685 32.4423C61.4431 32.3676 61.5567 32.2822 61.7059 32.1897C61.8551 32.0972 62.0256 32.0474 62.2139 32.0474C62.5158 32.0474 62.7858 32.1612 63.0309 32.3854C63.276 32.6096 63.3968 32.8764 63.3968 33.1753C63.3968 33.3247 63.3684 33.467 63.3116 33.5987C63.2547 33.7303 63.1908 33.8727 63.1126 34.0221C63.038 34.1715 62.9634 34.3423 62.8888 34.5309C62.0612 35.8509 61.1411 37.018 60.1252 38.032C59.2584 38.9002 58.2354 39.6901 57.0525 40.4053C55.8696 41.1204 54.5802 41.4798 53.1877 41.4798C52.2108 41.4798 51.241 41.2912 50.2819 40.9141C49.3228 40.5369 48.4667 40.0103 47.7172 39.3307C46.9641 38.6511 46.3532 37.8328 45.8843 36.8721C45.4154 35.9114 45.1809 34.8476 45.1809 33.6805C45.1809 32.2893 45.3585 30.6882 45.7173 28.8772C46.0725 27.0697 46.5556 25.1981 47.156 23.2554C47.7563 21.3163 48.4241 19.3558 49.1594 17.3811C49.8912 15.4028 50.6336 13.5313 51.3867 11.7594C50.6336 12.7378 49.8059 13.9547 48.9037 15.4028C48.0014 16.8545 47.0885 18.4165 46.1684 20.0923C45.2449 21.7682 44.3355 23.4832 43.4332 25.2337C42.531 26.9843 41.7033 28.6423 40.9502 30.2043C40.1971 31.7663 39.5293 33.1433 38.9467 34.3281C38.3642 35.5129 37.9415 36.4096 37.6786 37.0109C37.4157 37.6122 37.0392 38.1779 36.549 38.7045C36.0588 39.2311 35.5437 39.7043 34.9967 40.117C34.4532 40.5333 33.9452 40.8607 33.4727 41.1062C33.0038 41.3517 32.6557 41.4727 32.4284 41.4727C31.9772 41.4727 31.5155 41.3019 31.0466 40.9639C30.5741 40.6258 30.1336 40.1526 29.7216 39.5513C29.306 38.95 28.9685 38.2704 28.7056 37.5161C28.4428 36.7618 28.3113 35.9541 28.3113 35.086C28.3113 34.5202 28.3469 33.7303 28.425 32.7127C28.4996 31.6951 28.5955 30.5459 28.7056 29.265C28.8193 27.9841 28.9507 26.6391 29.0999 25.2266C29.2491 23.814 29.3806 22.43 29.4942 21.0743C29.6079 19.7187 29.7003 18.4485 29.7749 17.2601C29.8495 16.0753 29.8885 15.0861 29.8885 14.2963C29.3628 15.9543 28.7873 17.7796 28.1693 19.7757C27.5476 21.7717 26.8514 23.7785 26.0805 25.7923C25.3097 27.8062 24.4643 29.756 23.5442 31.6382C22.6242 33.524 21.626 35.1891 20.5568 36.6373C19.484 38.089 18.3296 39.256 17.0898 40.1384C15.8501 41.0243 14.5322 41.4655 13.1433 41.4655C11.4133 41.4655 9.758 41.1346 8.18081 40.4764C6.60006 39.8182 5.20048 38.9998 3.97851 38.0178C2.75654 37.0393 1.78678 35.9826 1.07278 34.8547C0.358776 33.7232 0 32.67 0 31.6916C0 30.5601 0.355224 29.5176 1.07278 28.5569C1.78678 27.5963 2.66063 26.7779 3.69433 26.0983C4.72803 25.4223 5.80791 24.885 6.93752 24.4901C8.06713 24.0951 9.044 23.8959 9.87167 23.8959C10.8095 23.8959 11.2819 24.177 11.2819 24.7427C11.2819 25.0807 11.1967 25.3547 11.0297 25.5611C10.8592 25.7674 10.5679 26.0414 10.1559 26.3794C9.85391 26.6036 9.49869 26.9345 9.08307 27.3685C8.66746 27.8026 8.27316 28.2936 7.90018 28.838C7.52364 29.3824 7.2146 29.9944 6.96949 30.674C6.72439 31.3536 6.60361 32.0687 6.60361 32.8195C6.60361 34.0257 6.98725 35.0148 7.76164 35.7869C8.53248 36.559 9.46316 36.9433 10.5537 36.9433C11.6442 36.9433 12.781 36.3419 14.0775 35.1358C15.3741 33.9296 16.6813 32.3783 17.9956 30.4747C19.31 28.5747 20.5888 26.4363 21.8321 24.0631C23.0718 21.6899 24.1801 19.3558 25.1605 17.0573C26.1374 14.7588 26.9189 12.624 27.5014 10.6457C28.084 8.66742 28.3753 7.09476 28.3753 5.92772C28.3753 5.24813 28.1515 4.65749 27.6968 4.14869C27.2457 3.63989 26.4926 3.38727 25.4411 3.38727C24.5744 3.38727 23.5336 3.67903 22.3116 4.26255C21.0896 4.84607 19.9245 5.62884 18.8162 6.6073C17.7079 7.58577 16.7559 8.71723 15.9673 9.99813C15.1787 11.279 14.7844 12.5955 14.7844 13.9511C14.7844 14.8193 14.9336 15.57 15.2356 16.2105C15.5375 16.8509 15.8572 17.3953 16.1947 17.8472C16.5321 18.2991 16.8518 18.6762 17.1538 18.9787C17.4557 19.2811 17.6049 19.5266 17.6049 19.7152C17.6049 20.4695 17.2106 20.8466 16.422 20.8466C15.6334 20.8466 14.7773 20.6474 13.7436 20.2524C12.7099 19.8575 11.7224 19.3024 10.7846 18.5873C9.84325 17.8721 9.05466 17.0431 8.41525 16.1002C7.77585 15.1609 7.45615 14.1219 7.45615 12.994C7.45615 11.2612 8.06713 9.60318 9.2891 8.02341C10.5111 6.44008 12.0527 5.05955 13.9141 3.87116C15.7755 2.68633 17.8251 1.74345 20.063 1.04607C22.301 0.348689 24.4536 0 26.521 0C27.4233 0 28.4463 0.199251 29.5937 0.594195C30.7411 0.989139 31.821 1.58333 32.8369 2.37322C33.8528 3.16311 34.7054 4.1736 35.4016 5.39401C36.0978 6.61798 36.446 8.0412 36.446 9.66011C36.446 11.5067 36.3714 13.606 36.2222 15.9579C36.073 18.3133 35.9131 20.6082 35.7426 22.8498C35.5721 25.0914 35.4123 27.1052 35.2631 28.8949C35.1139 30.6847 35.0393 31.9371 35.0393 32.6523C35.3021 32.2004 35.7178 31.439 36.279 30.3644C36.8438 29.2899 37.5116 28.0019 38.2825 26.4933C39.0533 24.9882 39.9272 23.3302 40.904 21.5227C41.8809 19.7152 42.9146 17.8614 44.0051 15.9579C45.0957 14.0579 46.2324 12.165 47.4188 10.2792C48.6017 8.397 49.8166 6.62509 51.0563 4.9706C51.7348 4.02772 52.5021 3.26629 53.3688 2.68277C54.232 2.09925 55.145 1.6367 56.1041 1.29869C57.0632 0.960674 58.0578 0.725843 59.0915 0.590637C60.1252 0.458989 61.1518 0.391386 62.1642 0.391386C63.2547 0.391386 63.7982 0.654682 63.7982 1.18127C63.7982 1.36985 63.6952 1.61536 63.4892 1.91423C63.2831 2.21667 62.9173 2.64719 62.388 3.21292C62.0114 3.66479 61.4928 4.53296 60.8356 5.8103C60.1785 7.0912 59.4645 8.62472 58.6936 10.4144C57.9228 12.2041 57.1342 14.1539 56.3243 16.2603C55.5144 18.3702 54.772 20.4873 54.097 22.615C53.4186 24.7427 52.8751 26.7957 52.463 28.774C52.0474 30.7523 51.8414 32.4743 51.8414 33.9438C51.8414 35.2639 52.1433 36.2139 52.7436 36.7974C53.344 37.3809 54.1148 37.6727 55.0561 37.6727L55.0526 37.6976Z"
                    fill="#0070D2"
                  />
                  <path
                    d="M67.5172 35.5521C67.5172 36.1925 67.6771 36.7084 67.9968 37.1069C68.3165 37.5019 68.757 37.7011 69.3218 37.7011C70.0749 37.7011 70.8173 37.4556 71.549 36.9646C72.2808 36.4772 72.9309 35.9114 73.4957 35.271C74.1706 34.5914 74.7922 33.7837 75.357 32.8408C75.3926 32.727 75.4885 32.5953 75.6377 32.4459C75.7123 32.3712 75.8259 32.2858 75.9751 32.1933C76.1243 32.1008 76.2948 32.0509 76.4831 32.0509C76.785 32.0509 77.055 32.1648 77.3001 32.389C77.5452 32.6131 77.666 32.88 77.666 33.1788C77.666 33.3283 77.6376 33.4706 77.5807 33.6023C77.5239 33.7339 77.46 33.8762 77.3818 34.0257C77.3072 34.1751 77.2326 34.3459 77.158 34.5345C76.3303 35.8545 75.4103 37.0215 74.3944 38.0356C73.5276 38.9038 72.5046 39.6936 71.3217 40.4088C70.1388 41.124 68.8493 41.4833 67.4569 41.4833C65.3149 41.4833 63.5849 40.9105 62.267 39.7612C60.9527 38.612 60.292 37.1176 60.292 35.271C60.292 34.2534 60.4625 33.0294 60.8 31.5991C61.1374 30.1687 61.5353 28.717 61.9829 27.2476C62.434 25.7781 62.9135 24.3869 63.4215 23.0669C63.9295 21.7504 64.3522 20.6936 64.6897 19.9038C64.8389 19.6013 65.0449 19.3487 65.3113 19.1423C65.5742 18.936 65.8761 18.8328 66.2136 18.8328C66.6256 18.8328 67.0981 18.9644 67.6238 19.2277C68.1495 19.491 68.6397 19.7935 69.0909 20.1315C69.542 20.4695 69.9186 20.8182 70.2205 21.1775C70.5224 21.5369 70.6716 21.8287 70.6716 22.0528C70.6716 22.921 70.5011 23.8532 70.1637 24.8494C69.8262 25.8457 69.4603 26.9096 69.0625 28.041C68.6646 29.1725 68.3094 30.368 67.9897 31.6275C67.67 32.8906 67.5101 34.1965 67.5101 35.5521H67.5172ZM75.6377 8.37922C75.6377 9.13353 75.5169 9.85581 75.2718 10.5532C75.0267 11.2506 74.6892 11.8732 74.2558 12.4176C73.8225 12.962 73.3323 13.3961 72.7888 13.7163C72.2453 14.0365 71.6698 14.1966 71.0695 14.1966C70.2418 14.1966 69.5278 13.9156 68.9275 13.3498C68.3272 12.7841 68.0252 11.9942 68.0252 10.9766C68.0252 10.2614 68.1566 9.56405 68.4195 8.88802C68.6824 8.20843 69.0305 7.60001 69.4639 7.05207C69.8937 6.50768 70.3946 6.0736 70.9594 5.75338C71.5242 5.43315 72.1245 5.27304 72.7639 5.27304C73.5916 5.27304 74.2772 5.55413 74.8206 6.11986C75.3641 6.68559 75.6377 7.43989 75.6377 8.37922Z"
                    fill="#0070D2"
                  />
                  <path
                    d="M84.6605 37.6976C85.4136 37.6976 86.156 37.4521 86.8877 36.9611C87.6195 36.4736 88.2696 35.9079 88.8344 35.2674C89.5093 34.5878 90.1309 33.7802 90.6957 32.8373C90.7313 32.7234 90.8272 32.5918 90.9764 32.4423C91.051 32.3676 91.1646 32.2822 91.3138 32.1897C91.463 32.0972 91.6335 32.0474 91.8218 32.0474C92.1237 32.0474 92.3937 32.1612 92.6388 32.3854C92.8839 32.6096 93.0047 32.8764 93.0047 33.1753C93.0047 33.3247 92.9763 33.4671 92.9194 33.5987C92.8626 33.7303 92.7987 33.8727 92.7205 34.0221C92.6459 34.1715 92.5713 34.3423 92.4967 34.5309C91.6691 35.8509 90.749 37.018 89.7331 38.032C88.8663 38.9002 87.8433 39.6901 86.6604 40.4053C85.4775 41.1204 84.188 41.4798 82.7956 41.4798C81.8933 41.4798 80.9697 41.3197 80.0319 40.9994C79.0906 40.6792 78.2345 40.2202 77.4672 39.6154C76.6964 39.0141 76.057 38.2989 75.549 37.4699C75.041 36.6408 74.7888 35.7371 74.7888 34.7586C74.7888 33.9687 74.8847 32.9974 75.0694 31.8481C75.2577 30.6989 75.5206 29.4465 75.858 28.0908C76.1955 26.7352 76.5827 25.3049 77.0161 23.7963C77.4459 22.2912 77.9077 20.8039 78.3979 19.3345H76.874C76.572 19.3345 76.4228 19.1637 76.4228 18.8257C76.4228 18.5232 76.6005 18.1176 76.9592 17.6124C77.3145 17.1036 77.7017 16.8509 78.1173 16.8509H79.2469C79.8117 15.3067 80.3658 13.8835 80.9093 12.5848C81.4528 11.2862 81.9892 10.1832 82.5149 9.27941C82.6641 8.97697 82.8702 8.72435 83.1366 8.51799C83.3994 8.31162 83.7014 8.20844 84.0388 8.20844C84.4509 8.20844 84.9127 8.34008 85.4207 8.60338C85.9286 8.86667 86.4082 9.17623 86.8593 9.53559C87.3105 9.89495 87.687 10.2614 87.9889 10.6386C88.2909 11.0157 88.4401 11.336 88.4401 11.5993C88.4401 11.8626 88.2625 12.4567 87.9037 13.3783C87.5449 14.3034 87.1044 15.4597 86.5787 16.8545H90.3583C90.6602 16.8545 90.8094 17.0253 90.8094 17.3633C90.8094 17.5127 90.7526 17.7013 90.6389 17.929C90.5252 18.1532 90.3867 18.3702 90.2162 18.5802C90.0457 18.7865 89.8681 18.968 89.6798 19.1174C89.4915 19.2669 89.3033 19.3416 89.115 19.3416H85.6196C85.1685 20.5833 84.7067 21.9034 84.2378 23.2946C83.7689 24.6893 83.3426 26.0627 82.9696 27.4184C82.5931 28.774 82.284 30.0833 82.0389 31.3429C81.7938 32.606 81.6731 33.7446 81.6731 34.7622C81.6731 35.6303 81.9643 36.3348 82.5469 36.8792C83.1295 37.4272 83.8328 37.6976 84.6605 37.6976Z"
                    fill="#0070D2"
                  />
                  <path
                    d="M97.1252 35.5521C97.1252 36.1925 97.285 36.7084 97.6047 37.1069C97.9244 37.5019 98.3649 37.7011 98.9297 37.7011C99.6828 37.7011 100.425 37.4556 101.157 36.9646C101.889 36.4772 102.539 35.9114 103.104 35.271C103.782 34.5914 104.4 33.7837 104.965 32.8408C105 32.727 105.096 32.5953 105.246 32.4459C105.32 32.3712 105.434 32.2858 105.583 32.1933C105.732 32.1008 105.903 32.0509 106.091 32.0509C106.393 32.0509 106.663 32.1648 106.908 32.389C107.153 32.6131 107.274 32.88 107.274 33.1788C107.274 33.3283 107.245 33.4706 107.189 33.6023C107.132 33.7339 107.068 33.8762 106.99 34.0257C106.915 34.1751 106.841 34.3459 106.766 34.5345C105.938 35.8545 105.018 37.0215 104.002 38.0356C103.136 38.9038 102.112 39.6936 100.93 40.4088C99.7467 41.124 98.4572 41.4833 97.0648 41.4833C94.9228 41.4833 93.1928 40.9105 91.8749 39.7612C90.5606 38.612 89.8999 37.1176 89.8999 35.271C89.8999 34.2534 90.0704 33.0294 90.4079 31.5991C90.7453 30.1687 91.1396 28.717 91.5908 27.2476C92.0419 25.7781 92.5215 24.3869 93.0294 23.0669C93.5374 21.7504 93.9601 20.6936 94.2976 19.9038C94.4468 19.6013 94.6528 19.3487 94.9192 19.1423C95.1821 18.936 95.484 18.8328 95.8215 18.8328C96.2335 18.8328 96.706 18.9644 97.2317 19.2277C97.7575 19.491 98.2477 19.7935 98.6988 20.1315C99.1499 20.4695 99.5265 20.8182 99.8284 21.1775C100.13 21.5369 100.28 21.8287 100.28 22.0528C100.28 22.921 100.109 23.8532 99.7716 24.8494C99.4341 25.8457 99.0647 26.9096 98.6704 28.041C98.2761 29.1725 97.9173 30.368 97.5976 31.6275C97.2779 32.8906 97.1181 34.1965 97.1181 35.5521H97.1252ZM105.246 8.37922C105.246 9.13353 105.125 9.85581 104.88 10.5532C104.635 11.2506 104.297 11.8732 103.864 12.4176C103.43 12.962 102.944 13.3961 102.397 13.7163C101.85 14.0365 101.278 14.1966 100.677 14.1966C99.8497 14.1966 99.1357 13.9156 98.5354 13.3498C97.9315 12.7841 97.6331 11.9942 97.6331 10.9766C97.6331 10.2614 97.7646 9.56405 98.0274 8.88802C98.2903 8.20843 98.6384 7.60001 99.0718 7.05207C99.5052 6.50768 100.002 6.0736 100.567 5.75338C101.132 5.43315 101.732 5.27304 102.372 5.27304C103.199 5.27304 103.885 5.55413 104.432 6.11986C104.976 6.68559 105.249 7.43989 105.249 8.37922H105.246Z"
                    fill="#0070D2"
                  />
                  <path
                    d="M127.298 24.1414C127.298 24.4438 127.213 24.9704 127.046 25.7247C126.875 26.479 126.652 27.4183 126.367 28.5498C126.087 29.6813 125.756 30.9515 125.38 32.364C125.003 33.7766 124.591 35.2923 124.14 36.9112L123.632 38.7756C125.362 37.8328 126.808 36.8828 127.976 35.9221C129.142 34.9614 130.118 33.9367 130.911 32.8444C130.985 32.7305 131.099 32.5989 131.248 32.4494C131.362 32.3747 131.493 32.2893 131.642 32.1968C131.792 32.1043 131.962 32.0545 132.15 32.0545C132.488 32.0545 132.772 32.1683 132.996 32.3925C133.22 32.6167 133.333 32.8835 133.333 33.1824C133.333 33.2962 133.294 33.4279 133.22 33.5773C133.145 33.7268 133.07 33.8798 132.996 34.0292C132.882 34.1786 132.79 34.3494 132.715 34.538C132.225 35.1785 131.689 35.8011 131.11 36.4024C130.527 37.0037 129.841 37.6086 129.049 38.2099C128.261 38.8148 127.358 39.4161 126.342 40.0174C125.327 40.6187 124.161 41.2414 122.847 41.8818C122.396 43.6502 121.86 45.4328 121.241 47.2189C120.62 49.0086 119.849 50.6275 118.929 52.0756C118.009 53.5238 116.908 54.7122 115.629 55.6337C114.35 56.5552 112.808 57.0178 111.004 57.0178C110.137 57.0178 109.32 56.8755 108.549 56.5944C107.778 56.3133 107.1 55.9361 106.517 55.4629C105.935 54.9897 105.473 54.4275 105.136 53.7693C104.798 53.111 104.628 52.403 104.628 51.6522C104.628 50.6738 104.919 49.7309 105.501 48.8271C106.084 47.9234 106.901 47.0659 107.956 46.2582C109.008 45.447 110.276 44.6678 111.764 43.9135C113.249 43.1592 114.894 42.444 116.698 41.768C116.961 40.7895 117.185 39.8573 117.377 38.9713C117.565 38.0854 117.714 37.324 117.828 36.6835C117.075 37.6264 116.268 38.4341 115.402 39.1137C114.648 39.7185 113.803 40.2629 112.865 40.7504C111.924 41.2378 110.908 41.4869 109.821 41.4869C109.068 41.4869 108.343 41.3446 107.651 41.0635C106.954 40.7824 106.354 40.3768 105.846 39.8502C105.338 39.3236 104.937 38.7009 104.635 37.9858C104.333 37.2706 104.184 36.4807 104.184 35.6125C104.184 33.5773 104.571 31.5635 105.338 29.5674C106.109 27.5713 107.114 25.7745 108.354 24.1734C109.594 22.5723 110.986 21.2843 112.528 20.3022C114.069 19.3238 115.611 18.8328 117.153 18.8328C118.282 18.8328 119.238 18.9751 120.03 19.2562C120.819 19.5373 121.458 19.8504 121.948 20.1884C122.513 20.6047 122.964 21.0352 123.302 21.4871C123.714 21.4871 124.158 21.5333 124.627 21.6294C125.096 21.7255 125.529 21.8749 125.923 22.0813C126.318 22.2876 126.648 22.5616 126.911 22.8996C127.174 23.2376 127.305 23.6539 127.305 24.1414H127.298ZM109.59 54.0255C110.23 54.0255 110.84 53.7728 111.423 53.264C112.006 52.7552 112.56 52.0863 113.086 51.2573C113.611 50.4283 114.091 49.4783 114.524 48.4037C114.958 47.3292 115.362 46.2298 115.735 45.0983C114.645 45.6996 113.657 46.3685 112.773 47.105C111.888 47.838 111.139 48.5638 110.517 49.279C109.896 49.9942 109.416 50.6702 109.079 51.3142C108.741 51.9547 108.571 52.4813 108.571 52.8976C108.571 53.6519 108.908 54.029 109.587 54.029L109.59 54.0255ZM120.417 24.5363C120.417 23.7073 120.211 23.0953 119.796 22.7004C119.38 22.3054 118.893 22.1062 118.329 22.1062C117.501 22.1062 116.656 22.5403 115.792 23.4049C114.926 24.273 114.148 25.3369 113.451 26.5964C112.755 27.8595 112.183 29.2223 111.732 30.6918C111.281 32.1612 111.054 33.4777 111.054 34.6447C111.054 36.3384 111.597 37.1852 112.688 37.1852C113.366 37.1852 114.144 36.7333 115.029 35.8296C115.913 34.9258 116.759 33.8157 117.565 32.4957C118.375 31.1792 119.05 29.7951 119.597 28.3434C120.14 26.8953 120.414 25.6215 120.414 24.5292L120.417 24.5363Z"
                    fill="#0070D2"
                  />
                  <path
                    d="M159.503 34.5344C158.675 35.8545 157.755 37.0215 156.739 38.0356C155.872 38.9037 154.849 39.6936 153.666 40.4088C152.484 41.124 151.194 41.4833 149.802 41.4833C148.224 41.4833 146.889 41.0777 145.798 40.27C144.708 39.4623 144.068 38.2633 143.88 36.6835C143.127 37.6264 142.321 38.4341 141.454 39.1137C140.701 39.7185 139.855 40.2629 138.918 40.7504C137.98 41.2378 136.964 41.4869 135.873 41.4869C135.12 41.4869 134.396 41.3446 133.703 41.0635C133.007 40.7824 132.406 40.3768 131.898 39.8502C131.39 39.3236 130.985 38.7009 130.687 37.9858C130.385 37.2706 130.236 36.4807 130.236 35.6125C130.236 33.5773 130.623 31.5635 131.394 29.5674C132.165 27.5713 133.17 25.7745 134.41 24.1734C135.649 22.5723 137.042 21.2843 138.584 20.3022C140.125 19.3238 141.667 18.8328 143.209 18.8328C144.338 18.8328 145.297 18.9751 146.086 19.2562C146.875 19.5373 147.514 19.8504 148.004 20.1884C148.569 20.6047 149.02 21.0352 149.358 21.4871C149.77 21.4871 150.214 21.5333 150.683 21.6294C151.151 21.7255 151.585 21.8749 151.979 22.0813C152.373 22.2876 152.704 22.5616 152.967 22.8996C153.229 23.2376 153.361 23.6539 153.361 24.1414C153.361 24.5577 153.19 25.2337 152.853 26.1766C152.515 27.1195 152.139 28.162 151.727 29.3112C151.311 30.4605 150.938 31.6453 150.597 32.8693C150.26 34.0932 150.089 35.1785 150.089 36.1178C150.089 36.5697 150.231 36.9468 150.512 37.2492C150.793 37.5517 151.18 37.7011 151.67 37.7011C152.423 37.7011 153.166 37.4556 153.897 36.9646C154.629 36.4771 155.279 35.9114 155.844 35.271C156.522 34.5914 157.141 33.7837 157.705 32.8408C157.741 32.727 157.837 32.5953 157.986 32.4459C158.061 32.3712 158.174 32.2858 158.323 32.1932C158.473 32.1007 158.643 32.0509 158.831 32.0509C159.133 32.0509 159.403 32.1648 159.648 32.3889C159.893 32.6131 160.014 32.88 160.014 33.1788C160.014 33.3283 159.986 33.4706 159.929 33.6022C159.872 33.7339 159.808 33.8762 159.73 34.0256C159.655 34.1751 159.577 34.3459 159.506 34.5344H159.503ZM146.42 24.5363C146.42 23.7073 146.221 23.0953 145.827 22.7004C145.432 22.3054 144.953 22.1062 144.388 22.1062C143.56 22.1062 142.715 22.5403 141.852 23.4049C140.985 24.273 140.207 25.3369 139.511 26.5964C138.815 27.8595 138.243 29.2223 137.791 30.6918C137.34 32.1612 137.117 33.4777 137.117 34.6447C137.117 36.3384 137.66 37.1852 138.751 37.1852C139.425 37.1852 140.207 36.7333 141.091 35.8296C141.972 34.9258 142.811 33.8157 143.603 32.4957C144.392 31.1792 145.059 29.7951 145.606 28.3434C146.15 26.8953 146.423 25.6215 146.423 24.5292L146.42 24.5363Z"
                    fill="#0070D2"
                  />
                  <path
                    d="M167.002 37.6976C167.755 37.6976 168.497 37.4521 169.229 36.9611C169.964 36.4736 170.611 35.9079 171.175 35.2674C171.854 34.5878 172.472 33.7802 173.037 32.8373C173.072 32.7234 173.168 32.5918 173.317 32.4423C173.392 32.3676 173.506 32.2822 173.655 32.1897C173.804 32.0972 173.975 32.0474 174.163 32.0474C174.465 32.0474 174.735 32.1612 174.98 32.3854C175.225 32.6096 175.346 32.8764 175.346 33.1753C175.346 33.3247 175.317 33.4671 175.261 33.5987C175.204 33.7303 175.136 33.8727 175.062 34.0221C174.987 34.1715 174.912 34.3423 174.838 34.5309C174.01 35.8509 173.09 37.018 172.074 38.032C171.207 38.9002 170.184 39.6901 169.001 40.4053C167.819 41.1204 166.529 41.4798 165.137 41.4798C164.234 41.4798 163.311 41.3197 162.373 40.9994C161.432 40.6792 160.576 40.2202 159.808 39.6154C159.037 39.0141 158.398 38.2989 157.89 37.4699C157.382 36.6408 157.13 35.7371 157.13 34.7586C157.13 33.9687 157.226 32.9974 157.411 31.8481C157.599 30.6989 157.862 29.4465 158.199 28.0908C158.537 26.7352 158.924 25.3049 159.357 23.7963C159.787 22.2912 160.249 20.8039 160.739 19.3345H159.215C158.913 19.3345 158.764 19.1637 158.764 18.8257C158.764 18.5232 158.942 18.1176 159.3 17.6124C159.656 17.1036 160.043 16.8509 160.458 16.8509H161.588C162.153 15.3067 162.707 13.8835 163.25 12.5848C163.794 11.2862 164.33 10.1832 164.856 9.27941C165.005 8.97697 165.211 8.72435 165.478 8.51799C165.741 8.31162 166.042 8.20844 166.38 8.20844C166.792 8.20844 167.254 8.34008 167.762 8.60338C168.27 8.86667 168.749 9.17623 169.2 9.53559C169.652 9.89495 170.028 10.2614 170.33 10.6386C170.632 11.0157 170.781 11.336 170.781 11.5993C170.781 11.8626 170.604 12.4567 170.245 13.3783C169.886 14.3034 169.445 15.4597 168.92 16.8545H172.699C173.001 16.8545 173.15 17.0253 173.15 17.3633C173.15 17.5127 173.094 17.7013 172.98 17.929C172.866 18.1567 172.728 18.3702 172.557 18.5802C172.387 18.7865 172.209 18.968 172.021 19.1174C171.833 19.2669 171.644 19.3416 171.456 19.3416H167.961C167.51 20.5833 167.048 21.9034 166.579 23.2946C166.11 24.6893 165.687 26.0627 165.311 27.4184C164.934 28.774 164.625 30.0833 164.38 31.3429C164.135 32.606 164.014 33.7446 164.014 34.7622C164.014 35.6303 164.305 36.3348 164.888 36.8792C165.471 37.4272 166.174 37.6976 167.002 37.6976Z"
                    fill="#0070D2"
                  />
                  <path
                    d="M194.975 34.5345C194.147 35.8545 193.114 37.0215 191.874 38.0356C190.823 38.9038 189.515 39.6936 187.956 40.4088C186.396 41.124 184.542 41.4833 182.4 41.4833C180.972 41.4833 179.654 41.277 178.454 40.8607C177.249 40.448 176.216 39.8715 175.353 39.1386C174.486 38.4056 173.811 37.5303 173.321 36.5127C172.83 35.4951 172.589 34.385 172.589 33.1788C172.589 31.0333 172.983 29.0729 173.772 27.3045C174.56 25.5362 175.559 24.0204 176.759 22.7573C177.963 21.4942 179.271 20.5264 180.677 19.8468C182.088 19.1672 183.413 18.8292 184.652 18.8292C185.515 18.8292 186.325 19 187.078 19.338C187.832 19.676 188.489 20.1208 189.053 20.6652C189.618 21.2131 190.059 21.8429 190.378 22.5581C190.698 23.2732 190.858 24.0097 190.858 24.7605C190.858 25.4401 190.709 26.2584 190.407 27.2191C190.105 28.1798 189.608 29.0942 188.911 29.9588C188.215 30.827 187.277 31.567 186.091 32.1897C184.908 32.8124 183.43 33.1219 181.665 33.1219C181.249 33.1219 180.819 33.065 180.368 32.9511C180.105 32.9156 179.821 32.8586 179.523 32.7803C179.523 34.474 180.009 35.7762 180.99 36.68C181.967 37.5837 183.132 38.0356 184.485 38.0356C185.839 38.0356 187.004 37.7616 188.094 37.2172C189.185 36.6729 190.105 36.0787 190.858 35.4382C191.76 34.6839 192.531 33.8193 193.171 32.8408C193.206 32.727 193.302 32.5953 193.451 32.4459C193.526 32.3712 193.639 32.2858 193.789 32.1933C193.938 32.1008 194.108 32.0509 194.297 32.0509C194.599 32.0509 194.869 32.1648 195.114 32.389C195.359 32.6131 195.48 32.88 195.48 33.1788C195.48 33.3283 195.451 33.4706 195.394 33.6023C195.337 33.7339 195.273 33.8762 195.195 34.0257C195.121 34.1751 195.046 34.3459 194.972 34.5345H194.975ZM179.803 30.4676C180.819 30.4676 181.779 30.1865 182.681 29.6208C183.583 29.0551 184.365 28.3684 185.022 27.5571C185.679 26.7459 186.198 25.9097 186.574 25.0416C186.951 24.177 187.139 23.4405 187.139 22.8391C187.139 22.0848 186.801 21.7077 186.123 21.7077C185.334 21.7077 184.563 22.0279 183.81 22.6684C183.057 23.3088 182.389 24.0809 181.807 24.9847C181.224 25.8884 180.745 26.8491 180.368 27.8667C179.992 28.8843 179.803 29.7524 179.803 30.4641V30.4676Z"
                    fill="#0070D2"
                  />
                  <path
                    d="M201.405 41.4833C200.275 41.4833 199.195 41.2947 198.162 40.9176C197.128 40.5404 196.215 39.9854 195.426 39.2524C194.638 38.5195 194.005 37.6228 193.537 36.5697C193.068 35.5165 192.833 34.3281 192.833 33.0116C192.833 31.1294 193.05 29.0373 193.483 26.7423C193.913 24.4438 194.528 22.1382 195.316 19.8219C196.105 17.5056 197.018 15.2569 198.051 13.0723C199.085 10.8876 200.222 8.93782 201.465 7.2264C202.705 5.51142 203.994 4.14868 205.33 3.13108C206.666 2.11348 208.008 1.60468 209.362 1.60468C210.001 1.60468 210.602 1.75411 211.166 2.05655C211.731 2.35898 212.228 2.73258 212.662 3.18801C213.095 3.63988 213.443 4.13801 213.706 4.68595C213.969 5.23389 214.101 5.74981 214.101 6.24082C214.101 7.0307 213.884 8.03763 213.45 9.2616C213.017 10.4856 212.445 11.8021 211.731 13.2146C211.017 14.6271 210.179 16.0859 209.22 17.5946C208.261 19.0996 207.262 20.5584 206.229 21.971C205.195 23.3835 204.151 24.7036 203.099 25.924C202.048 27.1479 201.05 28.1549 200.112 28.9447C200.037 29.3966 199.963 29.8698 199.888 30.3573C199.813 30.7736 199.757 31.2326 199.717 31.7414C199.678 32.2502 199.661 32.7483 199.661 33.2393C199.661 34.5594 199.97 35.6303 200.591 36.4594C201.213 37.2884 202.105 37.7011 203.27 37.7011C204.023 37.7011 204.765 37.4556 205.497 36.9646C206.229 36.4771 206.879 35.9114 207.444 35.271C208.119 34.5914 208.74 33.7837 209.305 32.8408C209.341 32.727 209.436 32.5953 209.586 32.4459C209.66 32.3712 209.774 32.2858 209.923 32.1933C210.072 32.1007 210.243 32.0509 210.431 32.0509C210.733 32.0509 211.003 32.1648 211.248 32.3889C211.493 32.6131 211.614 32.88 211.614 33.1788C211.614 33.3283 211.586 33.4706 211.529 33.6022C211.472 33.7339 211.408 33.8762 211.33 34.0256C211.255 34.1751 211.181 34.3459 211.106 34.5345C210.278 35.8545 209.358 37.0215 208.342 38.0356C207.476 38.9037 206.453 39.6936 205.27 40.4088C204.087 41.124 202.797 41.4833 201.405 41.4833ZM211.273 6.17677C211.273 5.65018 211.049 5.38688 210.598 5.38688C210.072 5.38688 209.387 5.97041 208.538 7.13745C207.692 8.30449 206.808 9.83089 205.888 11.7131C204.964 13.5953 204.055 15.7052 203.153 18.0393C202.25 20.3734 201.518 22.7288 200.954 25.1021C201.593 24.5755 202.296 23.8212 203.067 22.8427C203.838 21.8642 204.598 20.7612 205.351 19.5373C206.104 18.3133 206.836 17.0431 207.55 15.723C208.264 14.4065 208.893 13.1328 209.44 11.9088C209.983 10.6848 210.427 9.56404 210.765 8.54643C211.102 7.52883 211.273 6.73894 211.273 6.17321V6.17677Z"
                    fill="#0070D2"
                  />
                  <path
                    d="M228.135 39.4481C229.94 38.395 231.425 37.3097 232.59 36.1996C233.755 35.0895 234.753 33.9687 235.577 32.8373C235.652 32.7234 235.766 32.5918 235.915 32.4423C236.029 32.3676 236.16 32.2822 236.309 32.1897C236.458 32.0972 236.629 32.0474 236.817 32.0474C237.155 32.0474 237.439 32.1612 237.663 32.3854C237.886 32.6096 238 32.8764 238 33.1753C238 33.3247 237.961 33.4671 237.886 33.5987C237.812 33.7303 237.737 33.8727 237.663 34.0221C237.549 34.1715 237.457 34.3423 237.382 34.5309C236.405 35.8509 235.126 37.1959 233.546 38.5693C231.965 39.9427 229.88 41.309 227.286 42.6646C226.796 44.3583 226.242 46.0626 225.624 47.7775C225.002 49.489 224.242 51.026 223.34 52.3817C222.438 53.7373 221.358 54.8474 220.097 55.7156C218.836 56.5802 217.362 57.0142 215.671 57.0142C214.804 57.0142 213.987 56.8719 213.216 56.5908C212.445 56.3097 211.767 55.9326 211.184 55.4594C210.602 54.9862 210.14 54.424 209.802 53.7657C209.465 53.1075 209.294 52.3995 209.294 51.6487C209.294 50.7058 209.586 49.8305 210.168 49.0229C210.751 48.2116 211.568 47.4502 212.623 46.735C213.674 46.0199 214.925 45.3332 216.374 44.6714C217.82 44.0131 219.39 43.3442 221.084 42.6646C221.386 41.6114 221.628 40.6116 221.82 39.6723C222.008 38.7294 222.175 37.9217 222.328 37.2421C221.876 37.7687 221.358 38.2882 220.775 38.797C220.193 39.3058 219.564 39.7577 218.885 40.1526C218.207 40.5476 217.504 40.8678 216.772 41.1133C216.037 41.3588 215.315 41.4798 214.601 41.4798C213.962 41.4798 213.294 41.3375 212.598 41.0564C211.902 40.7753 211.273 40.3875 210.708 39.8965C210.143 39.409 209.674 38.8219 209.298 38.1459C208.921 37.4663 208.733 36.7547 208.733 36.0004C208.733 34.9828 208.904 33.7232 209.241 32.2146C209.579 30.7096 209.976 29.1725 210.424 27.6105C210.875 26.0485 211.355 24.5684 211.863 23.1772C212.371 21.786 212.793 20.6901 213.131 19.9002C213.28 19.5978 213.486 19.3451 213.752 19.1388C214.015 18.9324 214.317 18.8292 214.655 18.8292C215.067 18.8292 215.539 18.9609 216.065 19.2242C216.591 19.4875 217.081 19.7899 217.532 20.1279C217.983 20.4659 218.36 20.8146 218.662 21.174C218.964 21.5333 219.113 21.8251 219.113 22.0493C219.113 22.8036 218.925 23.7251 218.548 24.8174C218.171 25.9097 217.749 27.0981 217.28 28.3755C216.807 29.6564 216.385 30.9729 216.012 32.3285C215.635 33.6841 215.447 34.9828 215.447 36.2281C215.447 36.68 215.561 37.0749 215.784 37.4129C216.008 37.7509 216.328 37.9217 216.743 37.9217C217.195 37.9217 217.663 37.8008 218.154 37.5553C218.64 37.3097 219.113 36.9895 219.564 36.5946C220.015 36.1996 220.427 35.7656 220.804 35.2959C221.18 34.8262 221.479 34.3637 221.706 33.9118C222.232 32.9333 222.722 31.8303 223.173 30.6064C223.624 29.3824 224.047 28.1406 224.441 26.8775C224.835 25.6144 225.194 24.3833 225.514 23.1772C225.834 21.971 226.143 20.8822 226.445 19.9002C226.519 19.5622 226.707 19.2989 227.009 19.1103C227.311 18.9217 227.649 18.8292 228.025 18.8292C228.437 18.8292 228.899 18.9609 229.407 19.2242C229.915 19.4875 230.395 19.7899 230.846 20.1279C231.297 20.4659 231.674 20.8146 231.975 21.174C232.277 21.5333 232.427 21.8251 232.427 22.0493C232.427 22.4656 232.313 23.1985 232.089 24.2517C231.865 25.3049 231.581 26.5395 231.244 27.9521C230.906 29.3646 230.519 30.8626 230.086 32.4423C229.652 34.0257 229.23 35.5129 228.818 36.9041L228.139 39.4446L228.135 39.4481ZM214.26 54.0219C214.861 54.0219 215.443 53.8049 216.008 53.3708C216.573 52.9367 217.099 52.3639 217.589 51.6487C218.076 50.9335 218.53 50.0938 218.942 49.1332C219.354 48.1725 219.731 47.1833 220.072 46.1657C219.056 46.7315 218.136 47.3257 217.308 47.9448C216.481 48.5674 215.767 49.1794 215.166 49.7807C214.566 50.382 214.093 50.9584 213.756 51.5028C213.419 52.0472 213.248 52.5098 213.248 52.8869C213.248 53.6412 213.585 54.0184 214.264 54.0184L214.26 54.0219Z"
                    fill="#0070D2"
                  />
                </svg>
              </h1>
              <p className="py-1 mb-14 text-xl text-[#000000]">
                Welcome back! Please enter your details
              </p>
              <form className="w-full">
                <div className="flex flex-col text-left mb-6">
                  <label className="cursor-pointer" htmlFor="phoneNumber">
                    {" "}
                    Phone Number{" "}
                  </label>
                  <input
                    className="border-b border-[#E0E0E0] outline-none"
                    id="phoneNumber"
                    type="text"
                  />
                </div>

                <div className="flex justify-between items-center py-2 my-1 w-full mb-11">
                  <div>
                    <input
                      className="outline-none border-none"
                      id="remember"
                      type="checkbox"
                    />
                    <label className="ml-4 cursor-pointer" htmlFor="remember">
                      Remember for 30 days
                    </label>
                  </div>

                  <p className="hover:underline cursor-pointer">
                    {" "}
                    Reset Password{" "}
                  </p>
                </div>

                <button
                  onClick={() => navigate("/number-verify")}
                  className="w-10/12 bg-[#0070D2] text-white rounded-sm py-2 text-center"
                  type="button"
                >
                  {" "}
                  Login{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
