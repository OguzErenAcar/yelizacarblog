import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import SkeletonImage from "../img/skeletonImage";

function ProjectCard({
  src,
  className,
  innerWidth,
}: {
  src: string;
  className?: string;
  innerWidth: number;
}) {
  const [load, setLoad] = useState(false);
  return (
    <div className={className}>
      <div
        style={{ width: innerWidth, background: "transparent" }}
        className="rounded-md  bg-base-100 shadow-xl/30 "
      >
        <SkeletonImage
          width={320}
          height={190}
          src={src}
          className="rounded-md"
          alt="project Image"
        />

        {/* <div className="absolute bottom-0 left-0 h-1/4 w-full bg-gradient-to-t from-black/100"></div> */}
      </div>
    </div>
  );
}

export default ProjectCard;
