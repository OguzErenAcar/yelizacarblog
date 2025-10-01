import React from 'react'



type PreviewProps={
    
    filetype:string,
    src?:string,
    width?:number,
    height?:number


};

function Preview({filetype,src,width,height}:PreviewProps) {

    const fileImg=()=>{
        switch(filetype){
            case "pdf":
                return "https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png";
            case "jpg":
                return src;
            case "jpeg":
                return src;
            case "png":
                return src;
            default:
                return "";
        } 

    }

  return (
    <div>
      {fileImg()?<img src={fileImg()} alt="" width={width} height={height}></img>:<>preview cannot be displayed </>}
    </div>
  )
}

export default Preview
