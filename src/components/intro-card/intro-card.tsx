import Image from "next/image";

interface IntroCardProps {
  imageUrl: string;
  title: string;
  description: React.ReactNode;
}
const IntroCard: React.FC<IntroCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="p-4 md:p-6 group">
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src={imageUrl || ""}
          alt={title || ""}
          width={400}
          height={400}
          className="w-60 max-w-full aspect-square object-contain object-center group-hover:scale-110 py-4"
          priority={true}
        />
        <h4 className="font-semibold text-xl">{title || ""}</h4>
        {description || ""}
      </div>
    </div>
  );
};

export default IntroCard;
