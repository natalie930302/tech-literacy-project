import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/ui/breadcrumb/breadcrumb";
import GetNameByRoute from "@/utils/route";

export default function Page({ params }: { params: { slug: string } }) {
  const routeName = GetNameByRoute(params.slug);
  if (!routeName) {
    return notFound();
  }

  return (
    <main>
      <section>
        <div className="container py-16">
          <h1 className="font-semibold text-4xl text-center">{routeName}</h1>
          <Breadcrumb />
        </div>
      </section>
    </main>
  );
}
