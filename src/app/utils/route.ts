const RouteNames: { [key: string]: string } = {
  home: "首頁",
  about: "關於計畫",
  courses: "師培/專業課程",
  "teaching-methods-for-technology": "科技領域教材教法",
  "technology-literacy-and-ethics": "科技素養與倫理",
  "introduction-to-technology-education": "科技教育概論",
  "creative-and-design-projects": "創意與設計專題",
  expertise: "科技領域專長",
  "minor-specialization-guidelines": "次專長加註辦法",
  "micro-programs-in-technology": "科技領域微學程",
  "specialization-program-orientation": "專長加註學程說明會",
  "technology-workshops-and-seminars": "科技領域研習講座",
  internships: "實習資源",
  "regional-technology-centers": "區域科技中心",
  "domestic-internship-schools": "國內實習學校",
  "children-and-diverse-activities": "兒童與多元活動",
  "three-week-internship-guidance": "三週實習輔導",
};

const GetNameByRoute = (route: string) => {
  return RouteNames[route] || null;
};

export default GetNameByRoute;
