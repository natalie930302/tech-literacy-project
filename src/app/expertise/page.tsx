import { IconFileText } from "@tabler/icons-react";

import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import CourseTable from "@/components/course-table/course-table";
import Announcement from "@/components/announcement/announcement";

import { findRouteData } from "@/utils/notion";

const courses = [
  {
    category: "領域核心課程",
    minCredits: 4,
    offeredCredits: 4,
    courses: [
      { name: "科技教育概論", credits: 2, required: true, notes: "" },
      {
        name: "科技素養與倫理",
        credits: 2,
        required: false,
        notes: "",
      },
    ],
  },
  {
    category: "邏輯與運算",
    minCredits: 4,
    offeredCredits: 9,
    courses: [
      {
        name: "視覺化程式設計語言",
        credits: 3,
        required: false,
        notes: "",
      },
      { name: "程式設計", credits: 3, required: false, notes: "" },
      {
        name: "演算法",
        credits: 3,
        required: false,
        notes: "需先修畢程式設計",
      },
    ],
  },
  {
    category: "設計與製作",
    minCredits: 4,
    offeredCredits: 8,
    courses: [
      {
        name: "創意與設計思考",
        credits: 3,
        required: false,
        notes: "",
      },
      {
        name: "數位教材設計與製作",
        credits: 3,
        required: false,
        notes: "",
      },
      {
        name: "科技創作與教學實務",
        credits: 2,
        required: false,
        notes: "自然系合作開課",
      },
    ],
  },
  {
    category: "科技應用實務",
    minCredits: 12,
    offeredCredits: 26,
    courses: [
      {
        name: "資訊科技專題與實務(一)",
        credits: 2,
        required: true,
        notes: "",
      },
      {
        name: "基礎電控應用與實務",
        credits: 2,
        required: true,
        notes: "",
      },
      {
        name: "計算機與雲端應用",
        credits: 2,
        required: false,
        notes: "",
      },
      {
        name: "人工智慧在教育上的應用",
        credits: 2,
        required: false,
        notes: "",
      },
      { name: "計算機網路", credits: 3, required: false, notes: "" },
      {
        name: "資料視覺化設計",
        credits: 3,
        required: false,
        notes: "",
      },
      {
        name: "資訊安全與倫理",
        credits: 3,
        required: false,
        notes: "",
      },
      {
        name: "教育機器人",
        credits: 3,
        required: false,
        notes: "",
      },
      {
        name: "物聯網應用與實作",
        credits: 3,
        required: false,
        notes: "",
      },
      {
        name: "創新科技與應用",
        credits: 3,
        required: false,
        notes: "",
      },
    ],
  },
];

const Page: React.FC = async () => {
  const data = await findRouteData("/expertise");
  const ExpertiseAnnouncement = data.Announcement.find(
    ({ name }: any) => name === "ExpertiseAnnouncement"
  );
  const ExpertiseDescription = data.Article.find(
    ({ name }: any) => name === "ExpertiseDescription"
  );
  const ExpertiseApplication = data.Article.find(
    ({ name }: any) => name === "ExpertiseApplication"
  );
  const ExpertiseRelatedRegulatoryDocuments = data.Article.find(
    ({ name }: any) => name === "ExpertiseRelatedRegulatoryDocuments"
  );

  return (
    <main>
      <section>
        <div className="container py-8 md:py-16 pb-4 md:pb-8">
          <h1 className="font-semibold text-3xl md:text-4xl text-center">
            {data.PageName}
          </h1>
          <Breadcrumb />
        </div>
      </section>
      <Announcement
        title={ExpertiseAnnouncement.title}
        items={ExpertiseAnnouncement.items}
      />
      <section id="minor-specialization-guidelines">
        <div className="container py-8 md:py-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-semibold text-2xl md:text-3xl">專長加註辦法</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-8">
              <div className="col-span-4 flex flex-col gap-4">
                <h3 className="font-semibold text-2xl text-denim-700">
                  {ExpertiseDescription.title}
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: ExpertiseDescription.description,
                  }}
                />
              </div>
              <div className="col-span-3 flex flex-col gap-4 md:gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-2xl text-denim-700">
                    <div className="flex items-center gap-1">
                      <IconFileText className="w-7 h-7" />
                      {ExpertiseApplication.title}
                    </div>
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: ExpertiseApplication.description,
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-2xl text-denim-700">
                    {ExpertiseRelatedRegulatoryDocuments.title}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: ExpertiseRelatedRegulatoryDocuments.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CourseTable title="課程架構" courses={courses} />
    </main>
  );
};

export default Page;
