import { notFound } from "next/navigation";
import { GetNameByRoute } from "@/utils/route";

import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import TabContainer from "@/components/tab-container/tab-container";

const courseData = {
  教學目標: "教學目標內容",
  課程大綱:
    "課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容課程大綱內容",
  評量方式: "評量方式內容",
  參考資料: "參考資料內容",
  本學期開課資訊:
    "授課老師：xxx老師<br/>授課時間：每周二 05 - 06 節<br/>開課學期：112 學年 第二學期",
  課程說明:
    "科目名稱：資訊安全與倫理<br/>科目英文名稱：Information Security and Ethics<br/>開課年級：大四上<br/>學分數：3<br/>必(選)修別：選修",
  課堂花絮:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto molestias libero doloremque harum fuga dignissimos repellendus, ex cum beatae repudiandae, a quidem culpa laboriosam minima dolorem, nihil molestiae nam. Nobis.",
};

const InfoSection: React.FC<any> = ({ title, content }) => {
  if (!content) return null;

  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium">{title}</p>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

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
              <TabContainer
                data={courseData}
                limit={["教學目標", "課程大綱", "評量方式", "參考資料"]}
              />
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
};

export default Page;
