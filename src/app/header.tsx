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
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={300}
                  height={300}
                  className="size-8 object-contain"
                />
              </div>
              <div className="hidden md:block">
                <div className="flex items-center gap-4">
                  <Link
                    href="/"
                    className="text-sm border-y-2 border-transparent px-3 p-1.5 hover:border-b-denim-400"
                  >
                    首頁
                  </Link>
                  <Link
                    href="/"
                    className="text-sm border-y-2 border-transparent px-3 p-1.5 hover:border-b-denim-400"
                  >
                    關於計畫
                  </Link>
                  <Link
                    href="/"
                    className="text-sm border-y-2 border-transparent px-3 p-1.5 hover:border-b-denim-400"
                  >
                    師培/專業課程
                  </Link>
                  <Link
                    href="/"
                    className="text-sm border-y-2 border-transparent px-3 p-1.5 hover:border-b-denim-400"
                  >
                    次專長加註
                  </Link>
                  <Link
                    href="/"
                    className="text-sm border-y-2 border-transparent px-3 p-1.5 hover:border-b-denim-400"
                  >
                    實習資源
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
