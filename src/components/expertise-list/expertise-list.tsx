import { findExpertiseData } from "@/utils/notion";

interface Expertise {
  ID: string;
  Name: string;
}

const ExpertiseList: React.FC = async () => {
  const Expertise: Expertise[] = await findExpertiseData();

  return (
    <section id="micro-programs-in-technology">
      <div className="container py-8 md:py-16">
        <div className="flex flex-col gap-4 md:gap-8">
          <h2 className="font-semibold text-2xl md:text-3xl">國小教師加註科技領域專長通過名單</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Expertise.map((expertise, index) => (
              <div key={index} className="flex gap-4 text-denim-700 py-2 px-4 border">
                <div>{expertise.Name}</div>
                <div>{expertise.ID}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseList;
