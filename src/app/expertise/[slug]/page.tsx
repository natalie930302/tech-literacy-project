import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import { GetNameByRoute } from "@/utils/route";

export default function Page({ params }: { params: { slug: string } }) {
  const routeName = GetNameByRoute(params.slug);
  if (!routeName) {
    return notFound();
  }

  return (
    <main>
      <section>
        <div className="container py-8 md:py-16 pb-4 md:pb-8">
          <h1 className="font-semibold text-3xl md:text-4xl text-center">
            {routeName}
          </h1>
          <Breadcrumb />
        </div>
      </section>
    </main>
  );
}
