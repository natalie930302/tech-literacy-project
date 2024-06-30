"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`${isMenuOpen ? "active" : ""} group/header`}>
      <nav className="fixed z-50 top-0 left-0 w-full bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="shrink-0">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={300}
                    height={300}
                    className="size-8 object-contain"
                    priority={true}
                  />
                </Link>
              </div>
              <ul className="hidden lg:flex items-center gap-6">
                <li className="group">
                  <Link
                    href="/"
                    className="border-b-2 border-transparent px-3 py-1.5 group-hover:border-denim-400"
                  >
                    首頁
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/"
                    className="border-b-2 border-transparent px-3 py-1.5 group-hover:border-denim-400"
                  >
                    關於計畫
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/"
                    className="border-b-2 border-transparent px-3 py-1.5 group-hover:border-denim-400"
                  >
                    師培/專業課程
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/"
                    className="border-b-2 border-transparent px-3 py-1.5 group-hover:border-denim-400"
                  >
                    科技領域專長
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/"
                    className="border-b-2 border-transparent px-3 py-1.5 group-hover:border-denim-400"
                  >
                    實習資源
                  </Link>
                </li>
              </ul>
            </div>
            <button
              onClick={toggleMenu}
              className="flex lg:hidden items-center"
            >
              <IconX className="scale-0 size-0 group-[&.active]/header:scale-100 group-[&.active]/header:size-auto" />
              <IconMenu2 className="scale-100 size-auto group-[&.active]/header:scale-0 group-[&.active]/header:size-0" />
            </button>
          </div>
        </div>
      </nav>
      <nav className="fixed z-40 top-16 left-0 -translate-y-full group-[&.active]/header:translate-y-0 lg:!-translate-y-full w-full bg-gray-50 shadow-lg">
        <div className="container py-6">
          <ul className="flex flex-col gap-4">
            <li className="group">
              <Link
                href="/"
                className="border-b-2 border-transparent pr-3 py-1.5 group-hover:border-denim-400"
              >
                首頁
              </Link>
            </li>
            <li className="group">
              <Link
                href="/"
                className="border-b-2 border-transparent pr-3 py-1.5 group-hover:border-denim-400"
              >
                關於計畫
              </Link>
            </li>
            <li className="group">
              <Link
                href="/"
                className="border-b-2 border-transparent pr-3 py-1.5 group-hover:border-denim-400"
              >
                師培/專業課程
              </Link>
            </li>
            <li className="group">
              <Link
                href="/"
                className="border-b-2 border-transparent pr-3 py-1.5 group-hover:border-denim-400"
              >
                科技領域專長
              </Link>
            </li>
            <li className="group">
              <Link
                href="/"
                className="border-b-2 border-transparent pr-3 py-1.5 group-hover:border-denim-400"
              >
                實習資源
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
