import Image from "next/image";

import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import IntroCard from "@/components/intro-card/intro-card";
import MindMapCard from "@/components/mind-map-card/mind-map-card";
import TimelineItem from "@/components/timeline-item/timeline-item";

import { header, intro, mindMap, timeline } from "./data";

const Page: React.FC = () => {
  return (
    <main>
      <section>
        <div className="container py-8 md:py-16 pb-4 md:pb-8">
          <h1 className="font-semibold text-3xl md:text-4xl text-center">
            {header.title}
          </h1>
          <Breadcrumb />
        </div>
      </section>
      <section className="bg-gray-200/55">
        <div className="container py-8 md:py-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-semibold text-2xl md:text-3xl text-center">
              {intro.title}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {intro.cards.map((card, index) => (
                  <IntroCard
                    key={index}
                    imageUrl={card.imageUrl}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-8 md:py-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-semibold text-2xl md:text-3xl text-center">
              {mindMap.title}
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-8 w-fit m-auto">
              {mindMap.mindMapData.map((data, index) => (
                <MindMapCard
                  {...data}
                  key={index}
                  title={data.title}
                  nodes={data.nodes}
                  bgClass={data.bgClass}
                  shadowClass={data.shadowClass}
                />
              ))}
              <div className="flex max-w-2xl">
                <article>
                  <h4 className="font-semibold text-lg mb-2">
                    本計畫推動目的如下：
                  </h4>
                  <ol className="list-decimal list-outside pl-4">
                    <li>
                      發展以科技素養能力與科技領域教學專業為核心的特色師資培育課程。
                    </li>
                    <li>
                      推動科技領域次專長加註微學分學程，提升師資生科技領域教學能力。
                    </li>
                    <li>
                      整合區域科技教育資源，締結教育實習夥伴關係，優化科技領域師資培育之實習機制。
                    </li>
                  </ol>
                </article>
                <Image
                  src="/images/robot-intro.png"
                  alt="robot-intro-img"
                  width={400}
                  height={400}
                  className="hidden md:block w-60 max-w-full aspect-square object-contain object-center"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-denim-100/55">
        <div className="container py-8 md:py-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-semibold text-2xl md:text-3xl text-center">
              {timeline.title}
            </h2>
            <div className="timeline grid grid-cols-1 md:grid-cols-2">
              {timeline.items.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  time={item.time}
                  tasks={item.tasks}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
