import React from 'react'

function ProjectCard({src,className,innerWidth}:{src:string, className?:string,innerWidth?:number}) {
  return (
    <div className={className}>
          <div style={{width:innerWidth}} className=" card bg-base-100 shadow-sm">
                <figure>
                  <img
                    src={src}
                    alt="Shoes"
                  />
                </figure>
               
              </div>
    </div>
  )
}

export default ProjectCard
