// "use client";

import Link from "next/link";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

export default function Footer() {
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const formData = {
  //       name: e.target.name.value,
  //       email: e.target.email.value,
  //       message: e.target.message.value,
  //     };

  //     try {
  //       const response = await fetch("/api/notion-comment", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       if (response.ok) {
  //         console.log("Form submitted successfully");
  //         e.target.reset();
  //       } else {
  //         console.error("Failed to submit form");
  //       }
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //     }
  //   };

  return (
    <footer className="bg-[url('/images/NTUE.png')] bg-no-repeat bg-cover bg-center">
      <div className="backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-50">
        <div className="container py-8 pb-4">
          <h3 className="text-2xl font-semibold text-white mb-6">聯繫我們</h3>
          <div className="grid grid-cols-12 gap-4 mb-6">
            <div className="col-span-12 md:col-span-6">
              <div className="text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-3">
                  <Link
                    className="flex justify-center items-center size-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full group"
                    href="#"
                    target="_blank"
                  >
                    <IconBrandInstagram className="size-6 group-hover:*:text-denim-600" />
                  </Link>
                  <Link
                    className="flex justify-center items-center size-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full group"
                    href="#"
                    target="_blank"
                  >
                    <IconBrandFacebook className="size-6 group-hover:*:text-denim-600" />
                  </Link>
                </div>
              </div>
              <p className="text-sm text-gray-100">
                國立台北教育大學 數學暨資訊教育學系
                <br />
                10671台北市大安區和平東路二段134號
                <br />
                No. 134, Sec. 2, Heping E. Rd., Da’an Dist., Taipei City 106320
                , Taiwan (R.O.C.)
                <br />
                (02) 6639-6688
                <br />
                <a href="mailto:info@example.com" className="underline">
                  info@example.com
                </a>
                <br />
                <br />
                對於我們的網站您是否有任何好奇或建議？歡迎您留言反饋，和我們分享您的想法。
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <form className="flex flex-col text-sm">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white mb-2">
                    電子郵件
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="請輸入電子郵件..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:outline-denim-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-white mb-2">
                    留言
                  </label>
                  <textarea
                    id="message"
                    placeholder="請輸入留言..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:outline-denim-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-denim-600 hover:bg-denim-700 hover:shadow text-sm text-white px-4 py-2 rounded-md w-fit max-w-full md:ml-auto"
                >
                  送出
                </button>
              </form>
            </div>
          </div>
          <div>
            <p className="text-center text-sm text-gray-50 opacity-75">
              &copy; 2024
              {new Date().getFullYear() !== 2024
                ? `-${new Date().getFullYear()}`
                : ""}{" "}
              國立台北教育大學 數學暨資訊教育學系. 版權所有. Illustration by{" "}
              <Link
                href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
                target="_blank"
                className="underline"
              >
                Icons 8
              </Link>{" "}
              from{" "}
              <Link
                href="https://icons8.com/illustrations"
                target="_blank"
                className="underline"
              >
                Ouch!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
