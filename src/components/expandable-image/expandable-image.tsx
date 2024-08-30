"use client";

import Image from "next/image";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";

const ExpandableImage: React.FC<any> = ({ src, alt, ...rest }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="relative group">
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={500}
        height={500}
        {...rest}
        onClick={handleExpand}
        className={`cursor-pointer ${rest.className}`}
      />
      <div
        className={`backdrop !z-50 opacity-0 [&.active]:opacity-100 size-[1px] md:!size-[1px] [&.active]:!w-screen [&.active]:!h-screen transition-show [&.active]:transition-hide
            ${isExpanded ? "active" : ""}`}
      >
        <button
          title="關閉"
          className="absolute z-50 top-2 right-4 p-4 text-white"
          onClick={handleExpand}
        >
          <IconX size={32} />
        </button>
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={2000}
          className="max-w-[80%] w-[600px] h-full object-contain object-center px-4 py-8 m-auto relative"
          priority={true}
        />
      </div>
    </div>
  );
};

export default ExpandableImage;
