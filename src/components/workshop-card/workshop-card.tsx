import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

interface WorkshopsCardProps {
  title: string;
  description: string;
  url: string;
}
const WorkshopsCard: React.FC<WorkshopsCardProps> = ({
  title,
  description,
  url,
}) => {
  return (
    <Link
      href={url}
      className="block bg-denim-50/75 hover:bg-denim-50/90 text-denim-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group"
    >
      <div className="flex justify-between items-center h-full gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl">{title}</h3>
          <p>{description}</p>
        </div>
        <IconChevronRight className="shrink-0 w-10 h-10 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
      </div>
    </Link>
  );
};

export default WorkshopsCard;
