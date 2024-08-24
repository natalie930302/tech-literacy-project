"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import { GetNameByRoute } from "@/utils/route";

interface CourseTabs {
  教學目標: string;
  課程大綱: string;
  評量方式: string;
  參考資料: string;
}

const courseTabs: CourseTabs = {
  教學目標: "教學目標內容",
  課程大綱:
    "課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容",
  評量方式: "評量方式內容",
  參考資料: "參考資料內容",
};

const courseData = {
  tabs: courseTabs,
  本學期開課資訊:
    "授課老師：xxx老師<br/>授課時間：每周二 05 - 06 節<br/>開課學期：112 學年 第二學期",
  課程說明:
    "科目名稱：資訊安全與倫理<br/>科目英文名稱：Information Security and Ethics<br/>開課年級：大四上<br/>學分數：3<br/>必(選)修別：選修",
  課堂花絮:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto molestias libero doloremque harum fuga dignissimos repellendus, ex cum beatae repudiandae, a quidem culpa laboriosam minima dolorem, nihil molestiae nam. Nobis.",
};

const tabs = Object.keys(courseData.tabs) as Array<keyof CourseTabs>;
const contents = tabs.map((key) => courseData.tabs[key]);

interface TabContainerProps {
  tabs: string[];
  contents: string[];
}

const TabContainer: React.FC<TabContainerProps> = ({ tabs, contents }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tab-container w-full">
      <ul className="tab-list flex w-full overflow-x-auto border-b mt-4">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab-item cursor-pointer border-b-2 whitespace-nowrap ${
              activeTab === index
                ? "font-semibold border-denim-400"
                : "border-transparent"
            } px-4 py-2`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="tab-content relative min-h-60">
        {contents.map((content, index) => (
          <div
            key={index}
            className={`whitespace-pre-line p-4 ${
              activeTab === index ? "block" : "hidden"
            }`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}
      </div>
    </div>
  );
};

const InfoSection: React.FC<{ title: string; content?: string }> = ({
  title,
  content,
}) => {
  if (!content) return null;
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium">{title}</p>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
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
        <div className="container py-8 md:py-16 pt-0 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-6 md:divide-x-2">
            <div className="col-span-4 md:pr-6 lg:pr-8">
              <div className="w-full aspect-[2/1] bg-gray-400 rounded-md" />
              <div className="md:hidden col-span-2 md:pl-6 lg:pl-8">
                <div className="flex flex-col gap-4 divide-y *:pt-4">
                  <InfoSection
                    title="本學期開課資訊"
                    content={courseData["本學期開課資訊"]}
                  />
                  <InfoSection
                    title="課程說明"
                    content={courseData["課程說明"]}
                  />
                  <InfoSection
                    title="課堂花絮"
                    content={courseData["課堂花絮"]}
                  />
                </div>
              </div>
              <TabContainer tabs={tabs} contents={contents} />
            </div>
            <div className="hidden md:block col-span-2 md:pl-6 lg:pl-8">
              <div className="flex flex-col gap-4 divide-y *:pt-4">
                <InfoSection
                  title="本學期開課資訊"
                  content={courseData["本學期開課資訊"]}
                />
                <InfoSection
                  title="課程說明"
                  content={courseData["課程說明"]}
                />
                <InfoSection
                  title="課堂花絮"
                  content={courseData["課堂花絮"]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
