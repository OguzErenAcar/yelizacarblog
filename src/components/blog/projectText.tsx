import React from 'react'
import { nunitoSans } from "@/app/fonts";


function ProjectText({title,desc, className ,data_aos}:{title:string,desc:string,className?:string,data_aos?:string}) {
  return (
          <div data-aos={data_aos} className={className} >
                <p className={`${nunito.className} text-black text-xl text-center`}>{title}</p>
                
              </div>
  )
}

export default ProjectText
