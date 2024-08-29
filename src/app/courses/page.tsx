import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import CourseTable from "@/components/course-table/course-table";

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

const Page: React.FC = () => {
  return (
    <main>
      <section>
        <div className="container py-8 md:py-16 pb-4 md:pb-8">
          <h1 className="font-semibold text-3xl md:text-4xl text-center">
            師培/專業課程
          </h1>
          <Breadcrumb />
        </div>
      </section>
      <CourseTable title="課程架構" courses={courses} />
    </main>
  );
};

export default Page;
