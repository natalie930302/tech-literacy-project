const RouteNames: { [key: string]: string } = {
  home: "首頁",
  about: "關於計畫",
  courses: "師培/專業課程",
  expertise: "科技領域專長",
  activity: "活動資訊",
  partner: "夥伴聯盟",
  "regional-technology-centers": "區域科技中心",
  "domestic-internship-schools": "國小實習學校",
  "children-and-diverse-activities": "見習與參訪活動",
  "three-week-internship-guidance": "三週實習輔導",
};

export const GetNameByRoute = (route: string) => {
  return RouteNames[route] || null;
};
