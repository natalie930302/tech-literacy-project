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
  courses: CourseCategory[];
}
const CourseTable: React.FC<CourseTableProps> = ({ courses }) => {
  return (
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
  );
};

export default CourseTable;
