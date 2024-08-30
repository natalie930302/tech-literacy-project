export const dynamic = "force-dynamic";

import Breadcrumb from "@/components/breadcrumb/breadcrumb";

const Page: React.FC = () => {
  return (
    <main>
      <section>
        <div className="container py-8 md:py-16 pb-4 md:pb-8">
          <h1 className="font-semibold text-3xl md:text-4xl text-center">
            活動資訊
          </h1>
          <Breadcrumb />
        </div>
      </section>
    </main>
  );
};

export default Page;
