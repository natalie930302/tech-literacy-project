import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-300">
        <div className="container py-12">
          <h1 className="font-semibold text-4xl">
            提升科技素養與優化教育實習之科技領域次專長師資培育
          </h1>
        </div>
      </section>
      <section>
        <div className="container py-12">
          <h2 className="font-semibold text-3xl text-center">計畫背景與概述</h2>
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
                      108 課綱將生活科技與資訊科技整併為「科技領域」的學習內涵。
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
              href="/about"
              className="btn btn-primary text-blue-500 ml-auto"
            >
              了解更多
            </Link>
          </div>
          <h2 className="font-semibold text-3xl text-center">計畫架構</h2>
          <div className="flex flex-col gap-4 w-fit m-auto">
            <div className="mind-map w-fit text-sm md:text-base [&_.node]:bg-gray-300">
              <div className="node shrink-0">
                發展科技領域
                <br />
                師培專業課程
              </div>
              <ol className="children">
                <li className="children-item">
                  <div className="node shrink-0">師培課程</div>
                  <ol className="children">
                    <li className="children-item">
                      <div className="node">科技領域教材教法</div>
                    </li>
                    <li className="children-item">
                      <div className="node">科技素養與倫理</div>
                    </li>
                  </ol>
                </li>
                <li className="children-item">
                  <div className="node shrink-0">專業課程</div>
                  <ol className="children">
                    <li className="children-item">
                      <div className="node">科技教育概論</div>
                    </li>
                    <li className="children-item">
                      <div className="node">創意與設計專題</div>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
            <div className="mind-map w-fit text-sm md:text-base [&_.node]:bg-gray-300">
              <div className="node shrink-0">
                次專長加註辦法
                <br />
                修訂與推廣
              </div>
              <ol className="children">
                <li className="children-item">
                  <div className="node shrink-0">校內法規修訂</div>
                  <ol className="children">
                    <li className="children-item">
                      <div className="node">次大專長加註辦法</div>
                    </li>
                    <li className="children-item">
                      <div className="node">科技領域教學支援</div>
                    </li>
                  </ol>
                </li>
                <li className="children-item">
                  <div className="node shrink-0">微學程推廣</div>
                  <ol className="children">
                    <li className="children-item">
                      <div className="node">專長加註學程開設</div>
                    </li>
                    <li className="children-item">
                      <div className="node">科技領域研習講座</div>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
            <div className="mind-map w-fit text-sm md:text-base [&_.node]:bg-gray-300">
              <div className="node shrink-0">
                優化科技領域
                <br />
                實習機制
              </div>
              <ol className="children">
                <li className="children-item">
                  <div className="node shrink-0">整合區域資源</div>
                  <ol className="children">
                    <li className="children-item">
                      <div className="node">區域科技中心</div>
                    </li>
                    <li className="children-item">
                      <div className="node">國內實習學校</div>
                    </li>
                  </ol>
                </li>
                <li className="children-item">
                  <div className="node shrink-0">多項與實習</div>
                  <ol className="children">
                    <li className="children-item">
                      <div className="node">兒童與多元活動</div>
                    </li>
                    <li className="children-item">
                      <div className="node">三週實習輔導</div>
                    </li>
                  </ol>
                </li>
              </ol>
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
      />
      <h4 className="font-semibold text-xl">{title}</h4>
      {description}
    </div>
  </div>
);
