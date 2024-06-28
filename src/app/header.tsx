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
                  </li>
                  <li className="relative group">
                    <Link
                      href="/"
                      className="text-sm border-y-2 border-transparent px-2 py-1 group-hover:border-b-denim-400"
                    >
                      科技領域專長
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/"
                      className="text-sm border-y-2 border-transparent px-2 py-1 group-hover:border-b-denim-400"
                    >
                      實習資源
                    </Link>
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
