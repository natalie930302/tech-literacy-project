import Image from "next/image";
import Link from "next/link";
import {
  IconSpeakerphone,
  IconChevronRight,
  IconArrowRight,
} from "@tabler/icons-react";
import {
  headerData,
  announcementsSection,
  cardsSection,
  teamSection,
} from "./data";

// 頁面標題區域
interface CardProps {
  title: string;
  imageUrl: string;
  link: string;
}
const Card: React.FC<CardProps> = ({ title, imageUrl, link }) => {
  return (
    <Link
      href={link || ""}
      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group"
    >
      <div className="flex flex-col gap-4 p-6">
        <Image
          src={imageUrl || ""}
          alt={title || ""}
          width={500}
          height={500}
          className="w-full max-w-48 h-full aspect-square object-contain object-center m-auto"
        />
        <h4 className="font-bold text-xl text-center">{title || ""}</h4>
      </div>
      <div className="absolute top-0 opacity-0 group-hover:opacity-100 backdrop-blur-lg backdrop-brightness-105 size-px group-hover:size-full transition-show group-hover:transition-hide overflow-hidden">
        <div className="flex justify-center items-center gap-1 w-full h-full text-xl">
          了解更多
          <IconArrowRight className="size-[1.25em]" />
        </div>
      </div>
    </Link>
  );
};
interface HeaderSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  cards: CardProps[];
}
const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  description,
  imageUrl,
  cards,
}) => {
  return (
    <section>
      <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-8 md:gap-16">
          <div className="col-span-1 md:col-span-5 flex flex-col justify-center items-center">
            <h1 className="font-semibold text-3xl md:text-4xl">
              {title || ""}
            </h1>
          </div>
          <div className="col-span-1 md:col-span-4 flex flex-col justify-center items-center">
            <Image
              src={imageUrl || ""}
              alt="hero"
              width={1080}
              height={1080}
              className="w-full h-full max-h-60 aspect-square object-contain object-center m-auto"
            />
          </div>
          <div className="col-span-1 md:col-span-9 flex flex-col justify-center items-center">
            <p>{description || ""}</p>
          </div>
          <div className="col-span-1 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title || ""}
                imageUrl={card.imageUrl || ""}
                link={card.link || ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 最新公告區域
interface AnnouncementProps {
  title: string;
  content: string;
  link: string;
}
const Announcement: React.FC<AnnouncementProps> = ({
  title,
  content,
  link,
}) => {
  return (
    <Link
      href={link || ""}
      className="col-span-1 md:col-span-2 block bg-denim-50/75 hover:bg-denim-50/90 text-denim-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group"
    >
      <div className="flex justify-between items-center h-full gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl">{title || ""}</h3>
          <p>{content || ""}</p>
        </div>
        <IconChevronRight className="shrink-0 size-10 translate-x-0 group-hover:translate-x-2 transition-all duration-500" />
      </div>
    </Link>
  );
};
interface AnnouncementSectionProps {
  title: string;
  announcements: AnnouncementProps[];
}
const AnnouncementSection: React.FC<AnnouncementSectionProps> = ({
  title,
  announcements,
}) => {
  return (
    <section className="bg-denim-800">
      <div className="container py-8 md:py-16">
        <div className="flex flex-col gap-4 md:gap-8">
          <h2 className="font-semibold text-2xl md:text-3xl text-gray-50">
            <div className="flex items-center gap-1.5">
              <IconSpeakerphone className="size-8 -rotate-12" />
              {title || ""}
            </div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 [&>*:nth-child(-n+2)]:md:col-span-1 gap-3 md:gap-6">
              {announcements.map((announcement, index) => (
                <Announcement
                  key={index}
                  title={announcement.title || ""}
                  content={announcement.content || ""}
                  link={announcement.link || ""}
                />
              ))}
            </div>
            <div className="col-span-1">
              <Image
                src="/images/notify.png"
                alt="notify"
                width={1080}
                height={1080}
                className="w-full h-full max-h-48 md:max-h-64 object-contain object-right-top p-4 ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 團隊介紹區域
interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}
const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group">
      <Image
        src={imageUrl || ""}
        alt={name || ""}
        width={500}
        height={500}
        className="w-full aspect-square object-cover object-center m-auto"
      />
      <div className="absolute top-0 opacity-0 group-hover:opacity-100 backdrop-blur-lg backdrop-brightness-105 size-px group-hover:size-full bg-denim-500/50 transition-show group-hover:transition-hide">
        <div className="flex flex-col justify-end gap-1 size-full p-4">
          <h4 className="font-bold text-xl">{name || ""}</h4>
          <p>{title || ""}</p>
          <p>{description || ""}</p>
        </div>
      </div>
    </div>
  );
};
interface TeamSectionProps {
  title: string;
  members: TeamMemberProps[];
}
const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => {
  return (
    <section>
      <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-4 md:gap-8">
          <div className="col-span-1 md:col-span-9 flex flex-col justify-center items-center">
            <h2 className="font-semibold text-3xl md:text-4xl">
              {title || ""}
            </h2>
          </div>
          <div className="col-span-1 md:col-span-9 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8">
            {members.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name || ""}
                title={member.title || ""}
                description={member.description || ""}
                imageUrl={member.imageUrl || ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 首頁組件
const Home: React.FC = () => {
  return (
    <main>
      <HeaderSection
        title={headerData.title}
        description={headerData.description}
        imageUrl={headerData.imageUrl}
        cards={cardsSection.cards}
      />
      <AnnouncementSection
        title={announcementsSection.title}
        announcements={announcementsSection.announcements}
      />
      <TeamSection title={teamSection.title} members={teamSection.members} />
    </main>
  );
};

export default Home;
