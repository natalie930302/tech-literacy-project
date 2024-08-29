import Image from "next/image";
import { notFound } from "next/navigation";
import { GetNameByRoute } from "@/utils/route";

import Breadcrumb from "@/components/breadcrumb/breadcrumb";

const Page: React.FC = ({ params }: any) => {
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
      <section>
        <div className="container py-8 md:py-16">
          <div className="grid col-span-1 gap-10 md:gap-16">
            <div className="grid grid-cols-8 gap-6 md:gap-10">
              <Image
                src="/images/no-pic.png"
                alt="區域科技中心"
                width={1080}
                height={1080}
                className="col-span-8 md:col-span-3 aspect-square object-cover object-center"
              />
              <div className="col-span-8 md:col-span-5 flex flex-col justify-center gap-4">
                <h3 className="font-semibold text-xl md:text-2xl">xx機構</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  tempore adipisci enim veritatis deserunt voluptatibus mollitia
                  iste quam at ipsam distinctio consequuntur, quibusdam minus
                  neque assumenda magnam ducimus maxime ipsa aspernatur impedit
                  ea dicta earum nihil sunt? Distinctio natus quam quibusdam
                  deserunt illo vero vel nobis porro assumenda iure reiciendis
                  possimus voluptate veniam dicta, vitae obcaecati? Natus eius,
                  harum vel quaerat voluptatum optio modi earum expedita ullam
                  quis minima eum necessitatibus assumenda? Dignissimos tempore
                  sed blanditiis eius dolorum consectetur, deserunt a soluta
                  voluptates autem neque impedit iure ut? Quidem adipisci est
                  doloribus consequatur iste quod sequi assumenda ut recusandae
                  eum?
                  <br />
                  <br />
                  學校官網：
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener"
                    className="underline"
                  >
                    了解更多
                  </a>
                </p>
                <div className="grid grid-cols-5 gap-3">
                  <Image
                    src="/images/no-pic.png"
                    alt="區域科技中心"
                    width={1080}
                    height={1080}
                    className="aspect-square object-cover object-center"
                  />
                  <Image
                    src="/images/no-pic.png"
                    alt="區域科技中心"
                    width={1080}
                    height={1080}
                    className="aspect-square object-cover object-center"
                  />
                  <Image
                    src="/images/no-pic.png"
                    alt="區域科技中心"
                    width={1080}
                    height={1080}
                    className="aspect-square object-cover object-center"
                  />
                  <Image
                    src="/images/no-pic.png"
                    alt="區域科技中心"
                    width={1080}
                    height={1080}
                    className="aspect-square object-cover object-center"
                  />
                  <Image
                    src="/images/no-pic.png"
                    alt="區域科技中心"
                    width={1080}
                    height={1080}
                    className="aspect-square object-cover object-center"
                  />
                  <Image
                    src="/images/no-pic.png"
                    alt="區域科技中心"
                    width={1080}
                    height={1080}
                    className="aspect-square object-cover object-center"
                  />
                  <Image
                    src="/images/no-pic.png"
                    alt="區域科技中心"
                    width={1080}
                    height={1080}
                    className="aspect-square object-cover object-center"
                  />
                  <Image
                    src="/images/no-pic.png"
                    alt="區域科技中心"
                    width={1080}
                    height={1080}
                    className="aspect-square object-cover object-center"
                  />
                  <Image
                    src="/images/no-pic.png"
                    alt="區域科技中心"
                    width={1080}
                    height={1080}
                    className="aspect-square object-cover object-center"
                  />
                  <Image
                    src="/images/no-pic.png"
                    alt="區域科技中心"
                    width={1080}
                    height={1080}
                    className="aspect-square object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
