export const header = {
  title: "關於計畫",
};

export const intro = {
  title: "計畫背景與概述",
  cards: [
    {
      imageUrl: "/images/計畫背景.png",
      title: "計畫背景",
      description: (
        <ul className="list-disc list-outside pl-4">
          <li>
            美國人工智慧研究實驗室 OpenAI 於 2022 年底推出 ChatGPT，引發生成式
            AI 在教學應用上的熱潮。
          </li>
          <li>
            新興科技對教育文化的影響以及相關挑戰（如 Google 效應、深偽技術等）。
          </li>
        </ul>
      ),
    },
    {
      imageUrl: "/images/計畫目標.png",
      title: "計畫目標",
      description: (
        <p>
          培養科技素養及正確使用科技的態度，特別針對國小教師的科技領域專長培育。
        </p>
      ),
    },
    {
      imageUrl: "/images/教育部政策推動.png",
      title: "教育部政策推動",
      description: (
        <ul className="list-disc list-outside pl-4">
          <li>108 課綱將生活科技與資訊科技整併為「科技領域」的學習內涵。</li>
          <li>
            師藝司修訂國小教師加註科技領域專長及加註科技領域完整專長的課程架構表。
          </li>
        </ul>
      ),
    },
    {
      imageUrl: "/images/學校配合政策.png",
      title: "學校配合政策",
      description: (
        <p>
          本校數學暨資訊教育學系致力於培育國小數學及資訊教育專長師資，並通過科技領域資訊專長加註的審查。
        </p>
      ),
    },
  ],
};

export const mindMap = {
  title: "計畫架構地圖",
  mindMapData: [
    {
      title: "發展科技領域師培<br/>專業課程",
      nodes: [
        {
          title: "師培課程",
          subnodes: [
            {
              title: "科技領域教材教法",
              href: "/courses/teaching-methods-for-technology",
            },
            {
              title: "科技素養與倫理",
              href: "/courses/technology-literacy-and-ethics",
            },
          ],
        },
        {
          title: "專業課程",
          subnodes: [
            {
              title: "科技教育概論",
              href: "/courses/introduction-to-technology-education",
            },
            {
              title: "創意與設計專題",
              href: "/courses/creative-and-design-projects",
            },
          ],
        },
      ],
      bgClass: "[&_.btn]:bg-goldenrod-400",
      shadowClass: "shadow-goldenrod-600",
    },
    {
      title: "次專長加註辦法<br/>修訂與推廣",
      nodes: [
        {
          title: "校內法規修訂",
          subnodes: [
            {
              title: "次專長加註辦法",
              href: "/expertise#minor-specialization-guidelines",
            },
            {
              title: "科技領域微學程",
              href: "/expertise#micro-programs-in-technology",
            },
          ],
        },
        {
          title: "微學程推廣",
          subnodes: [
            {
              title: "專長加註學程說明會",
              href: "/expertise/specialization-program-orientation",
            },
            {
              title: "科技領域研習講座",
              href: "/expertise/technology-workshops-and-seminars",
            },
          ],
        },
      ],
      bgClass: "[&_.btn]:bg-mulberry-400",
      shadowClass: "shadow-mulberry-600",
    },
    {
      title: "優化科技領域<br/>實習機制",
      nodes: [
        {
          title: "整合區域資源",
          subnodes: [
            {
              title: "區域科技中心",
              href: "/internships/regional-technology-centers",
            },
            {
              title: "國小實習學校",
              href: "/internships/domestic-internship-schools",
            },
          ],
        },
        {
          title: "多項與實習",
          subnodes: [
            {
              title: "見習與參訪活動",
              href: "/internships/children-and-diverse-activities",
            },
            {
              title: "三週實習輔導",
              href: "/internships/three-week-internship-guidance",
            },
          ],
        },
      ],
      bgClass: "[&_.btn]:bg-patina-400",
      shadowClass: "shadow-patina-600",
    },
  ],
};

export const timeline = {
  title: "計畫執行",
  items: [
    {
      title: "第一年度",
      time: "113.01.01 - 113.12.31",
      tasks: [
        {
          title: "計畫執行規劃",
          subtasks: [
            {
              subtask: "發展科技領域師培專業課程",
              subtasks: [
                "成立「科技領域課程規劃與教材研發」教師社群。",
                "完成專長加註所需之師培課程與系所專業課程之規劃及審查。",
              ],
            },
            {
              subtask: "專長加註法規修訂與推廣",
              subtasks: [
                "成立「科技領域次專長加註推動小組」。",
                "通過教育部科技領域次專長加註審查認證。",
                "完成「科技領域專業教學素養」微學分學程之規劃與審查。",
              ],
            },
            {
              subtask: "優化科技領域實習機制",
              subtasks: [
                "締結科技領域教育實習夥伴聯盟。",
                "推動各項科技領域教學交流活動。",
              ],
            },
          ],
        },
        {
          title: "預期效益及管考機制",
          subtasks: [
            {
              subtask: "質化評估指標",
              subtasks: [
                "成立課程規劃與教材研發教師社群。",
                "完成科技領域專長加註所需課程之規劃。",
                "通過教育部次專長加註審查認證。",
                "完成本校「科技領域專業教學素養」微學分學程之規劃。",
                "締結科技領域教育實習夥伴聯盟。",
              ],
            },
            {
              subtask: "量化評估指標",
              subtasks: [
                "每學期開發完成1個科技領域新開課程之教案示例。",
                "每學年度與1所科技中心及1所資訊教育重點學校締結夥伴學校。",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "第二年度",
      time: "114.01.01 - 114.12.31",
      tasks: [
        {
          title: "計畫執行規劃",
          subtasks: [
            {
              subtask: "發展科技領域師培專業課程",
              subtasks: [
                "開設「科技領域教材教法」與「科技素養與倫理」師培課程。",
                "開設「科技教育概論」與「創意與設計思考」系所專業課程。",
              ],
            },
            {
              subtask: "專長加註法規修訂與推廣",
              subtasks: [
                "舉辦科技領域次專長加註流程說明會及選課輔導座談。",
                "舉辦「科技領域專業教學素養」微學分學程新知講座及推廣活動。",
              ],
            },
          ],
        },
        {
          title: "預期效益及管考機制",
          subtasks: [
            {
              subtask: "質化評估指標",
              subtasks: [
                "開設「科技領域教材教法」與「科技素養與倫理」師培課程。",
                "開設「科技教育概論」與「創意與設計思考」系所專業課程。",
              ],
            },
            {
              subtask: "量化評估指標",
              subtasks: [
                "每學期順利完成1個師培課程的開課與招生。",
                "每學期順利完成1個系所專業課程的開課與招生。",
                "預計完成至少60人參與之科技領域次專長加註相關說明會及活動。",
                "預計將推動至少30人選修科技領域次專長加註相關課程。",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "第三年度",
      time: "115.01.01 - 115.12.31",
      tasks: [
        {
          title: "計畫執行規劃",
          subtasks: [
            {
              subtask: "發展科技領域師培專業課程",
              subtasks: [
                "透過觀議課程序檢討修正課程內容與開課模式。",
                "研發工具並執行科技領域專長加註課程之選修動機與自我效能等學習成效評估。",
              ],
            },
            {
              subtask: "優化科技領域實習機制",
              subtasks: [
                "調查與推動科技領域教學見習、觀摩與實習活動。",
                "推動締結夥伴學校至少提供10名科技領域教學見習與3名實習輔導之機會。",
              ],
            },
          ],
        },
        {
          title: "預期效益及管考機制",
          subtasks: [
            {
              subtask: "質化評估指標",
              subtasks: [
                "透過觀議課程序檢討修正課程內容與開課模式。",
                "研發工具並執行科技領域專長加註課程之選修動機與自我效能等學習成效評估。",
              ],
            },
            {
              subtask: "量化評估指標",
              subtasks: [
                "每學期順利完成1個相關課程的觀議課報告與檢討。",
                "每學年度完成1份科技領域專長加註課程之選修動機與自我效能等學習成效評估報告。",
                "推動締結夥伴學校至少提供10名科技領域教學見習與3名實習輔導之機會。",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "第四年度",
      time: "116.01.01 - 116.12.31",
      tasks: [
        {
          title: "計畫執行規劃",
          subtasks: [
            {
              subtask: "發展科技領域師培專業課程",
              subtasks: [
                "持續蒐集回饋訊息檢討與修正課程內容與開課模式。",
                "依據各項績效與學習成效評估完成計畫執行綜效分析報告。",
              ],
            },
          ],
        },
        {
          title: "預期效益及管考機制",
          subtasks: [
            {
              subtask: "質化評估指標",
              subtasks: [
                "持續蒐集回饋訊息檢討與修正課程內容與開課模式。",
                "研發工具並執行科技領域專長加註課程之選修動機與自我效能等學習成效評估。",
              ],
            },
            {
              subtask: "量化評估指標",
              subtasks: [
                "每學期順利完成1個相關課程的觀議課報告與檢討。",
                "每學年度完成1份科技領域專長加註課程之選修動機與自我效能等學習成效評估報告。",
                "持續推動締結夥伴學校至少提供10名科技領域教學見習與3名實習輔導之機會。",
              ],
            },
          ],
        },
      ],
    },
  ],
};
