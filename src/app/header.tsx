import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="fixed z-50 top-0 w-screen bg-gray-50 border-b shadow-md">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
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
              <div className="hidden md:block">
                <ul className="flex items-center gap-6">
                  <li className="relative group">
                    <Link
                      href="/"
                      className="text-sm border-y-2 border-transparent px-2 py-1 group-hover:border-b-denim-400"
                    >
                      首頁
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/"
                      className="text-sm border-y-2 border-transparent px-2 py-1 group-hover:border-b-denim-400"
                    >
                      關於計畫
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/"
                      className="text-sm border-y-2 border-transparent px-2 py-1 group-hover:border-b-denim-400"
                    >
                      師培/專業課程
                    </Link>
                    <div className="absolute top-full left-0 scale-0 group-hover:scale-100 pt-3">
                      <ul className="flex flex-col gap-2 w-max min-w-32 bg-white/95 text-gray-500 rounded shadow-default overflow-hidden p-3">
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            科技領域教材教法
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            科技素養與倫理
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            科技教育概論
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            創意與設計專題
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/"
                      className="text-sm border-y-2 border-transparent px-2 py-1 group-hover:border-b-denim-400"
                    >
                      科技領域專長
                    </Link>
                    <div className="absolute top-full left-0 scale-0 group-hover:scale-100 pt-3">
                      <ul className="flex flex-col gap-2 w-max min-w-32 bg-white/95 text-gray-500 rounded shadow-default overflow-hidden p-3">
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            校內法規修訂
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            次專長加註辦法
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            科技領域微學程
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            專長加註學程說明會
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            科技領域研習講座
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/"
                      className="text-sm border-y-2 border-transparent px-2 py-1 group-hover:border-b-denim-400"
                    >
                      實習資源
                    </Link>
                    <div className="absolute top-full left-0 scale-0 group-hover:scale-100 pt-3">
                      <ul className="flex flex-col gap-2 w-max min-w-32 bg-white/95 text-gray-500 rounded shadow-default overflow-hidden p-3">
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            區域科技中心
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            國內實習學校
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            兒童與多元活動
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="w-fit text-xs border-y-2 border-transparent hover:border-b-denim-300 block whitespace-no-wrap px-2 py-1"
                          >
                            三週實習輔導
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
