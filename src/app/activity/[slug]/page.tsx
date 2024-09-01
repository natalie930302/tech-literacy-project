export const dynamic = "force-dynamic";
export const revalidate = 60000;

import { notFound } from "next/navigation";
import { GetNameByRoute } from "@/utils/route";
import { findActivityData } from "@/utils/notion";

import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import ExpandableImage from "@/components/expandable-image/expandable-image";

const Page: React.FC = async ({ params }: any) => {
  const data: {
    title: string;
    description: string;
    image: {
      name: string;
      url: string;
    }[];
  } = await findActivityData("1");
  if (!data) {
    return notFound();
  }

  return (
    <main>
      <section>
        <div className="container py-8 md:py-16 pb-4 md:pb-8">
          <h1 className="font-semibold text-3xl md:text-4xl text-center">
            {data.title}
          </h1>
          <Breadcrumb givenNames={[{ key: 1, value: data.title }]} />
        </div>
      </section>
      <section>
        <div className="container py-8 md:py-16 pt-4 md:pt-4">
          <div className="grid grid-cols-1 gap-6 md:gap-10 divide-y-2 [&>:nth-child(n+2)]:pt-6 [&>:nth-child(n+2)]:md:pt-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-xl md:text-2xl">活動資訊</h3>
              <div dangerouslySetInnerHTML={{ __html: data.description }} />
              <h3 className="font-semibold text-xl md:text-2xl">活動照片</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {data.image.map((image: any, index: any) => (
                  <ExpandableImage
                    key={index}
                    src={image.url}
                    alt={image.name}
                    width={1080}
                    height={1080}
                    className="aspect-square object-cover object-center"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
