import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  repoLink?: string;
  children?: ReactNode;
}

const ProjectCard: FC<Props> = ({
  src,
  title,
  description,
  repoLink,
  children,
}) => {
  if (repoLink) {
    return (
      <Link href={repoLink.toString()} target="_blank">
        <div className="relative overflow-hidden rounded-lg shadow-lg h-180 border border-[#017c49]">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
          />

          <div className="relative p-4">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <div className="relative overflow-hidden rounded-lg shadow-lg border h-180 border-[#017c49]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
          {children}
        </div>
      </div>
    );
  }
};

export default ProjectCard;
