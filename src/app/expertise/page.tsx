import Image from "next/image";

import React from "react";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import { header, endorsement, workshops, courses } from "./data";

import { IconFileText } from "@tabler/icons-react";
import CourseTable from "@/components/course-table/course-table";
import WorkshopsCard from "@/components/workshop-card/workshop-card";

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
      <section className="bg-denim-800">
        <div className="container py-8 md:py-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-semibold text-2xl md:text-3xl text-gray-50">
              研習講座/學程說明會
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                {workshops.map((workshop, idx) => (
                  <WorkshopsCard
                    key={idx}
                    title={workshop.title}
                    description={workshop.description}
                    url={workshop.url}
                  />
                ))}
              </div>
              <div className="col-span-1">
                <Image
                  src="/images/notify.png"
                  alt="notify"
                  width={1080}
                  height={1080}
                  className="w-full h-full max-h-48 md:max-h-64 object-contain object-right-top p-4 ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="minor-specialization-guidelines">
        <div className="container py-8 md:py-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-semibold text-2xl md:text-3xl">專長加註辦法</h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-8">
              <div className="col-span-4 flex flex-col gap-4">
                <h3 className="font-semibold text-2xl text-denim-700">說明</h3>
                <>{endorsement.description}</>
              </div>
              <div className="col-span-3 flex flex-col gap-4 md:gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-2xl text-denim-700">
                    <div className="flex items-center gap-1">
                      <IconFileText className="w-7 h-7" />
                      申請表
                    </div>
                  </h3>
                  <>{endorsement.form}</>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-2xl text-denim-700">
                    相關法規文件
                  </h3>
                  <>{endorsement.regulations}</>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="micro-programs-in-technology">
        <div className="container py-8 md:py-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="font-semibold text-2xl md:text-3xl">課程架構</h2>
            <div className="w-full overflow-x-auto">
              <CourseTable courses={courses} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
