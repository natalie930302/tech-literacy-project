import Image from "next/image";
import Link from "next/link";
import { IconHandClick } from "@tabler/icons-react";

export default function Home() {
  return (
    <main>
      <section>
        <div className="container py-16">
          <h1 className="font-semibold text-4xl">
            提升科技素養與優化教育實習之科技領域次專長師資培育
          </h1>
        </div>
      </section>
      <section className="bg-gray-200">
        <div className="container py-16">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <h2 className="font-semibold text-3xl text-center">
              計畫背景與概述
            </h2>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <IntroCard
                  image_url="/images/計畫背景.png"
                  title="計畫背景"
                  description={
                    <ul className="list-disc list-outside pl-4">
                      <li>
                        美國人工智慧研究實驗室 OpenAI 於 2022 年底推出
                        ChatGPT，引發生成式 AI 在教學應用上的熱潮。
                      </li>
                      <li>
                        新興科技對教育文化的影響以及相關挑戰（如 Google
                        效應、深偽技術等）。
                      </li>
                    </ul>
                  }
                />
                <IntroCard
                  image_url="/images/計畫目標.png"
                  title="計畫目標"
                  description={
                    <p>
                      培養科技素養及正確使用科技的態度，特別針對國小教師的科技領域專長培育。
                    </p>
                  }
                />
                <IntroCard
                  image_url="/images/教育部政策推動.png"
                  title="教育部政策推動"
                  description={
                    <ul className="list-disc list-outside pl-4">
                      <li>
                        108
                        課綱將生活科技與資訊科技整併為「科技領域」的學習內涵。
                      </li>
                      <li>
                        師藝司修訂國小教師加註科技領域專長及加註科技領域完整專長的課程架構表。
                      </li>
                    </ul>
                  }
                />
                <IntroCard
                  image_url="/images/學校配合政策.png"
                  title="學校配合政策"
                  description={
                    <p>
                      本校數學暨資訊教育學系致力於培育國小數學及資訊教育專長師資，並通過科技領域資訊專長加註的審查。
                    </p>
                  }
                />
              </div>
              <Link
                href="/"
                className="btn text-white bg-denim-500 shadow-denim-700 ml-auto"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-16">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <h2 className="font-semibold text-3xl text-center">計畫架構地圖</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <div className="mind-map w-fit text-sm md:text-base [&_.btn]:bg-goldenrod-400 shadow-goldenrod-600">
                <div className="btn shrink-0">
                  發展科技領域
                  <br />
                  師培專業課程
                </div>
                <ol className="children">
                  <li className="children-item">
                    <div className="btn shrink-0">師培課程</div>
                    <ol className="children">
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          科技領域教材教法
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          科技素養與倫理
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                    </ol>
                  </li>
                  <li className="children-item">
                    <div className="btn shrink-0">專業課程</div>
                    <ol className="children">
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          科技教育概論
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          創意與設計專題
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
              <div className="mind-map w-fit text-sm md:text-base [&_.btn]:bg-mulberry-400 shadow-mulberry-600">
                <div className="btn shrink-0">
                  次專長加註辦法
                  <br />
                  修訂與推廣
                </div>
                <ol className="children">
                  <li className="children-item">
                    <div className="btn shrink-0">校內法規修訂</div>
                    <ol className="children">
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          次大專長加註辦法
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          科技領域教學支援
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                    </ol>
                  </li>
                  <li className="children-item">
                    <div className="btn shrink-0">微學程推廣</div>
                    <ol className="children">
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          專長加註學程開設
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          科技領域研習講座
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
              <div className="mind-map w-fit text-sm md:text-base [&_.btn]:bg-patina-400 shadow-patina-600">
                <div className="btn shrink-0">
                  優化科技領域
                  <br />
                  實習機制
                </div>
                <ol className="children">
                  <li className="children-item">
                    <div className="btn shrink-0">整合區域資源</div>
                    <ol className="children">
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          區域科技中心
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          國內實習學校
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                    </ol>
                  </li>
                  <li className="children-item">
                    <div className="btn shrink-0">多項與實習</div>
                    <ol className="children">
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          兒童與多元活動
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                      <li className="children-item">
                        <Link href="/" className="btn flex items-center gap-1">
                          三週實習輔導
                          <IconHandClick className="size-5 stroke-1.5 fill-white shrink-0" />
                        </Link>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
              <div className="flex">
                <article>
                  <h4 className="font-semibold text-lg mb-2">
                    本計畫推動目的如下：
                  </h4>
                  <ol className="list-decimal list-outside pl-4">
                    <li>
                      發展以科技素養能力與科技領域教學專業為核心的特色師資培育課程。
                    </li>
                    <li>
                      推動科技領域次專長加註微學分學程，提升師資生科技領域教學能力。
                    </li>
                    <li>
                      整合區域科技教育資源，締結教育實習夥伴關係，優化科技領域師資培育之實
                      習機制。
                    </li>
                  </ol>
                </article>
                <Image
                  src="/images/robot-intro.png"
                  alt="robot"
                  width={400}
                  height={400}
                  className="hidden md:block w-60 max-w-full aspect-square object-contain object-center"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-denim-100">
        <div className="container py-16">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <h2 className="font-semibold text-3xl text-center">計畫執行</h2>
            <div className="timeline grid grid-cols-1 md:grid-cols-2">
              <div className="timeline-item">
                <h4 className="title">第一年度</h4>
                <h5 className="time">113.01.01 - 113.12.31</h5>
                <ol className="list-decimal list-outside pl-5">
                  <li>
                    <h6 className="font-semibold">發展科技領域師培專業課程</h6>
                    <ul className="list-disc list-outside pl-5">
                      <li>成立「科技領域課程規劃與教材研發」教師社群。</li>
                      <li>
                        完成專長加註所需之師培課程與系所專業課程之規劃及審查。
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h6 className="font-semibold">專長加註法規修訂與推廣</h6>
                    <ul className="list-disc list-outside pl-5">
                      <li>成立「科技領域次專長加註推動小組」。</li>
                      <li>通過教育部科技領域次專長加註審查認證。</li>
                      <li>
                        完成「科技領域專業教學素養」微學分學程之規劃與審查。
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h6 className="font-semibold">優化科技領域實習機制</h6>
                    <ul className="list-disc list-outside pl-5">
                      <li>締結科技領域教育實習夥伴聯盟。</li>
                      <li>推動各項科技領域教學交流活動。</li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div className="timeline-item">
                <h4 className="title">第三年度</h4>
                <h5 className="time">115.01.01 - 115.12.31</h5>
                <ol className="list-decimal list-outside pl-5">
                  <li>
                    <h6 className="font-semibold">發展科技領域師培專業課程</h6>
                    <ul className="list-disc list-outside pl-5">
                      <li>透過觀議課程序檢討修正課程內容與開課模式。</li>
                      <li>
                        研發工具並執行科技領域專長加註課程之選修動機與自我效能等學習成效評估。
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h6 className="font-semibold">優化科技領域實習機制</h6>
                    <ul className="list-disc list-outside pl-5">
                      <li>調查與推動科技領域教學見習、觀摩與實習活動。</li>
                      <li>
                        推動締結夥伴學校至少提供10名科技領域教學見習與3名實習輔導之機會。
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div className="timeline-item">
                <h4 className="title">第二年度</h4>
                <h5 className="time">114.01.01 - 114.12.31</h5>
                <ol className="list-decimal list-outside pl-5">
                  <li>
                    <h6 className="font-semibold">發展科技領域師培專業課程</h6>
                    <ul className="list-disc list-outside pl-5">
                      <li>
                        開設「科技領域教材教法」與「科技素養與倫理」師培課程。
                      </li>
                      <li>
                        開設「科技教育概論」與「創意與設計思考」系所專業課程。
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h6 className="font-semibold">專長加註法規修訂與推廣</h6>
                    <ul className="list-disc list-outside pl-5">
                      <li>舉辦科技領域次專長加註流程說明會及選課輔導座談。</li>
                      <li>
                        舉辦「科技領域專業教學素養」微學分學程新知講座及推廣活動。
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div className="timeline-item">
                <h4 className="title">第四年度</h4>
                <h5 className="time">116.01.01 - 116.12.31</h5>
                <ol className="list-decimal list-outside pl-5">
                  <li>
                    <h6 className="font-semibold">發展科技領域師培專業課程</h6>
                    <ul className="list-disc list-outside pl-5">
                      <li>持續蒐集回饋訊息檢討與修正課程內容與開課模式。</li>
                      <li>
                        依據各項績效與學習成效評估完成計畫執行綜效分析報告。
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface IntroCardProps {
  image_url: string;
  title: string;
  description: React.ReactNode;
}

const IntroCard: React.FC<IntroCardProps> = ({
  image_url,
  title,
  description,
}) => (
  <div className="p-6 group">
    <div className="flex flex-col justify-center items-center gap-4">
      <Image
        src={image_url}
        alt={title}
        width={400}
        height={400}
        className="w-60 max-w-full aspect-square object-contain object-center group-hover:scale-110 py-4"
        priority={true}
      />
      <h4 className="font-semibold text-xl">{title}</h4>
      {description}
    </div>
  </div>
);
