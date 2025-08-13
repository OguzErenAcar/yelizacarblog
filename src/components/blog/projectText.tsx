import React from 'react'
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300'],       // sadece regular
  display: 'swap',
});


function ProjectText({title,desc, className ,data_aos}:{title:string,desc:string,className?:string,data_aos?:string}) {
  return (
          <div data-aos={data_aos} className={className} >
                <p className={`${nunito.className} text-black text-xl text-center`}>{title}</p>
                
              </div>
  )
}

export default ProjectText
