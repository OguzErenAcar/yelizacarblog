import React from 'react'

function ProjectCard({src,className,innerWidth}:{src:string, className?:string,innerWidth?:number}) {
  return (
    <div className={className}>
          <div style={{width:innerWidth}} className="rounded-md  bg-base-100 shadow-xl/30 ">
                <figure>
                  <img
                  className='rounded-md'
                    src={src}
                    alt="Shoes"
                  />
              {/* <div className="absolute bottom-0 left-0 h-1/4 w-full bg-gradient-to-t from-black/100"></div> */}
                </figure>
               
              </div>
    </div>
  )
}

export default ProjectCard
