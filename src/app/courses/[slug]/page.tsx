"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import { GetNameByRoute } from "@/utils/route";

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
              activeTab === index ? "border-denim-400" : "border-transparent"
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

  const tabs = ["教學目標", "課程大綱", "評量方式", "參考資料", "課堂花絮"];
  const contents = [
    "教學目標內容",
    "課程大綱內容",
    "評量方式內容",
    "參考資料內容",
    "課堂花絮內容",
  ];

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
              <div className="w-full aspect-[2/1] bg-gray-400 rounded-md"></div>
              <TabContainer tabs={tabs} contents={contents} />
            </div>
            <div className="col-span-2 md:pl-6 lg:pl-8">
              <div className="flex flex-col divide-y">
                <div className="md:pb-4">
                  <div className="flex flex-col gap-2">
                    <p className="font-medium">本學期開課資訊</p>
                    <p>
                      授課老師：xxx老師
                      <br />
                      授課時間：每周二 05 - 06 節
                      <br />
                      開課學期：112 學年 第二學期
                    </p>
                  </div>
                </div>
                <div className="md:py-4">
                  <div className="flex flex-col gap-2">
                    <p className="font-medium">課程說明</p>
                    <p>
                      科目名稱：資訊安全與倫理
                      <br />
                      科目英文名稱：Information Security and Ethics
                      <br />
                      開課年級：大四上
                      <br />
                      學分數：3
                      <br />
                      必(選)修別：選修
                    </p>
                  </div>
                </div>
                <div className="md:pt-4">
                  <div className="flex flex-col gap-2">
                    <p className="font-medium">其他資訊</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto molestias libero doloremque harum fuga dignissimos
                      repellendus, ex cum beatae repudiandae, a quidem culpa
                      laboriosam minima dolorem, nihil molestiae nam. Nobis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
