import React, { useState } from "react";
import Skeleton from "react-loading-skeleton"; 

function ProjectCard({
  src,
  className,
  innerWidth,
}: {
  src: string;
  className?: string;
  innerWidth?: number;
}) {
  const [load, setLoad] = useState(false);
  return  (
    <div className={className}>
      {!load&&<Skeleton width={300} height={10} count={5} />}
      <div
        style={{ width: innerWidth }}
        className="rounded-md  bg-base-100 shadow-xl/30 "
      >
        <figure>
          <img
            onLoad={() => setLoad(true)}
            loading="lazy"
            className="rounded-md"
            src={src}
            alt="Shoes"
          />
          {/* <div className="absolute bottom-0 left-0 h-1/4 w-full bg-gradient-to-t from-black/100"></div> */}
        </figure>
      </div>
    </div>
  );
}

export default ProjectCard;
