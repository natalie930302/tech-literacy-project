import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";

export default function Page() {
  return (
    <main>
      <section>
        <div className="container py-8 md:py-16 pb-4 md:pb-8">
          <h1 className="font-semibold text-3xl md:text-4xl text-center">
            夥伴聯盟
          </h1>
          <Breadcrumb />
        </div>
      </section>
    </main>
  );
}
