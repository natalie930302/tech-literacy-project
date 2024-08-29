import React from "react";

interface Course {
  name: string;
  credits: number;
  required: boolean;
  notes: string;
}
interface CourseCategory {
  category: string;
  minCredits: number;
  offeredCredits: number;
  courses: Course[];
}
interface CourseTableProps {
  title: string;
  courses: CourseCategory[];
}
const CourseTable: React.FC<CourseTableProps> = ({ title, courses }) => {
  return (
    <section id="micro-programs-in-technology">
      <div className="container py-8 md:py-16">
        <div className="flex flex-col gap-4 md:gap-8">
          <h2 className="font-semibold text-2xl md:text-3xl">{title}</h2>
          <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 whitespace-nowrap">
              <thead>
                <tr>
                  <th className="py-2 px-4 border font-semibold">類別名稱</th>
                  <th className="py-2 px-4 border font-semibold">最低學分數</th>
                  <th className="py-2 px-4 border font-semibold">開課學分數</th>
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
  );
};

export default CourseTable;
