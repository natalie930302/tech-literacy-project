import Link from "next/link";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";
import ContactForm from "./contact-form";

export default function Footer() {
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
              <ContactForm />
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
