import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/ui/breadcrumb/breadcrumb";

export default function Page() {
  return (
    <main>
      <section>
        <div className="container py-16">
          <h1 className="font-semibold text-4xl text-center">師培/專業課程</h1>
          <Breadcrumb />
        </div>
      </section>
    </main>
  );
}
