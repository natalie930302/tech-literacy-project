import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import { courses } from "./data";

import CourseTable from "@/components/course-table/course-table";

export default function Page() {
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
}
