export const dynamic = "force-dynamic";
export const revalidate = 60000;

import Image from "next/image";
import { notFound } from "next/navigation";
import { GetNameByRoute } from "@/utils/route";
import { findPartnerData } from "@/utils/notion";

import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import ExpandableImage from "@/components/expandable-image/expandable-image";

interface PartnerData {
  title: string;
  description: string;
  mainImage: {
    name: string;
    url: string;
  };
  image: {
    name: string;
    url: string;
  }[];
}

const Page: React.FC = async ({ params }: any) => {
  const routeName = GetNameByRoute(params.slug);
  if (!routeName) {
    return notFound();
  }

  const data: PartnerData[] = await findPartnerData(routeName);
  if (!data.length) {
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
      <section>
        <div className="container py-8 md:py-16 pt-4 md:pt-4">
          <div className="grid col-span-1 divide-y-2 gap-6 md:gap-10 [&>:nth-child(n+2)]:pt-6 [&>:nth-child(n+2)]:md:pt-10">
            {data.map((item: any, index: any) => (
              <div key={index} className="grid grid-cols-8 gap-6 md:gap-10">
                <Image
                  src={item.mainImage.url}
                  alt={item.mainImage.name}
                  width={1080}
                  height={1080}
                  className="col-span-8 md:col-span-3 aspect-square object-cover object-center bg-gray-400 rounded-md"
                />
                <div className="col-span-8 md:col-span-5 flex flex-col gap-4">
                  <h3 className="font-semibold text-xl md:text-2xl">
                    {item.title}
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {item.image.map((image: any, index: any) => (
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
