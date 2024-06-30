import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconFileText, IconSpeakerphone } from "@tabler/icons-react";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";

export default function Page() {
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

  return (
    <main>
      <section>
        <div className="container py-8 md:py-16 pb-4 md:pb-8">
          <h1 className="font-semibold text-3xl md:text-4xl text-center">
            科技領域專長
          </h1>
          <Breadcrumb />
        </div>
      </section>
      <section className="bg-denim-900">
        <div className="container py-8 md:py-16">
          <h2 className="font-semibold text-2xl md:text-3xl text-gray-50">
            <div className="flex items-center gap-1.5">
              <IconSpeakerphone className="size-8 -rotate-12" />
              研習講座/學程說明會最新公告
            </div>
          </h2>
        </div>
      </section>
      <section id="minor-specialization-guidelines">
        <div className="container py-8 md:py-16">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <h2 className="font-semibold text-2xl md:text-3xl">專長加註辦法</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-6 lg:gap-8">
              <div className="col-span-4 flex flex-col gap-4">
                <h3 className="font-semibold text-2xl text-denim-700">說明</h3>
                <ol className="list-decimal list-outside pl-4">
                  <li>
                    師資培育之大學規劃科目須依「十二年國民基本教育課程綱要」及「國民小學科技教育及資訊教育課程發展參考說明」內涵訂定。
                  </li>
                  <li>
                    本表要求應修畢最低總學分數 24 學分(包括必備至少 6
                    學分)，各課程類別之最低學分數請依照各課程類別最低學分數規定進行規劃。
                  </li>
                  <li>
                    專門課程科目與教育專業課程科目、共同課程及通識課程，不得重複採認學分。
                  </li>
                  <li>
                    取得國民小學教師加註科技領域專長教師證書之學分修習，除本表規定之至少
                    24
                    學分外，並應取得國小「教育專業課程」之「科技領域教材教法」之一或其相似科目至少
                    2 學分。
                  </li>
                  <li>
                    辦理日期：每年辦理二次，收件截止日為每年 5 月 30 日、12 月
                    31 日。
                  </li>
                  <li>
                    繳交資料：可郵寄或親送，106 臺北市大安區和平東路二段 134
                    號，國立臺北教育大學師資培育處楊素華小姐收，電話
                    (02)6639-6688 承辦人分機
                    82181，mail:shuhaw@tea.ntue.edu.tw。
                  </li>
                </ol>
                (詳細辦法請參閱「國立臺北教育大學加註科技領域專長教師證書申請表」及相關法規文件)
              </div>
              <div className="col-span-3 flex flex-col gap-4 md:gap-6 lg:gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-2xl text-denim-700">
                    <div className="flex items-center gap-1">
                      <IconFileText className="size-7" />
                      申請表
                    </div>
                  </h3>
                  <Link href="#" className="underline hover:text-denim-500">
                    國立臺北教育大學加註科技領域專長教師證書申請表(112學年度適用).pdf
                  </Link>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-2xl text-denim-700">
                    相關法規文件
                  </h3>
                  <Link href="#" className="underline hover:text-denim-500">
                    國立臺北教育大學加註科技領域專長專門課程架構表.pdf
                  </Link>
                  <Link href="#" className="underline hover:text-denim-500">
                    1120913-教育部-1120088088-北教大加註科技領域專長核定備查公文.pdf
                  </Link>
                  <Link href="#" className="underline hover:text-denim-500">
                    20220915-教育部科技領域專長加註定稿會議紀錄.pdf
                  </Link>
                  <Link href="#" className="underline hover:text-denim-500">
                    20221026-科技領域專長專門課程架構表正式公文1110021246.pdf
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="micro-programs-in-technology">
        <div className="container py-8 md:py-16">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <h2 className="font-semibold text-2xl md:text-3xl">課程架構</h2>
            <div className="w-full overflow-hidden overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 whitespace-nowrap overflow-hidden">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border font-semibold">類別名稱</th>
                    <th className="py-2 px-4 border font-semibold">
                      最低學分數
                    </th>
                    <th className="py-2 px-4 border font-semibold">
                      開課學分數
                    </th>
                    <th className="py-2 px-4 border font-semibold">科目名稱</th>
                    <th className="py-2 px-4 border font-semibold">學分數</th>
                    <th className="py-2 px-4 border font-semibold">必選備</th>
                    <th className="py-2 px-4 border font-semibold">備註</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((courseCategory, index) => (
                    <React.Fragment key={index}>
                      {courseCategory.courses.map((course, idx) => (
                        <tr key={idx}>
                          {idx === 0 && (
                            <React.Fragment>
                              <td
                                rowSpan={courseCategory.courses.length}
                                className="py-2 px-4 border"
                              >
                                {courseCategory.category}
                              </td>
                              <td
                                rowSpan={courseCategory.courses.length}
                                className="py-2 px-4 border"
                              >
                                {courseCategory.minCredits}
                              </td>
                              <td
                                rowSpan={courseCategory.courses.length}
                                className="py-2 px-4 border"
                              >
                                {courseCategory.offeredCredits}
                              </td>
                            </React.Fragment>
                          )}
                          <td className="py-2 px-4 border">{course.name}</td>
                          <td className="py-2 px-4 border">{course.credits}</td>
                          <td className="py-2 px-4 border">
                            {course.required ? "必備" : "選備"}
                          </td>
                          <td className="py-2 px-4 border">{course.notes}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
