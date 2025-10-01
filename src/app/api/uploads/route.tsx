
import { NextResponse } from "next/server";
import AWS from "aws-sdk";

export const config = {
  api: { bodyParser: false }, 
};


 export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ message: "Dosya bulunamadı" , status: 400  });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const s3 = new AWS.S3({
      endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY as string,
      secretAccessKey: process.env.CLOUDFLARE_SECRET_KEY as string,
      signatureVersion: "v4",
    });
  
    const fileName = `${process.env.CLOUDFLARE_PROJECT_NAME}/${formData.get("path")}/${file.name}`; 

    await s3
      .putObject({
        Bucket: process.env.CLOUDFLARE_BUCKET_NAME as string,
        Key: fileName,
        Body: buffer,
      })
      .promise();

  return NextResponse.json({ message: "Dosya yüklendi" , status: 200 });
  } catch (error) {
   return NextResponse.json({ message: (error as Error).message ,status: 500 });
  }
}
 
export async function DELETE(req: Request) {
  try {
    const { filePath } = await req.json(); 

    if (!filePath) {
      return NextResponse.json({ message: "Silinecek dosya yolu gerekli" , status: 400 });
    }

    const s3 = new AWS.S3({
      endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY as string,
      secretAccessKey: process.env.CLOUDFLARE_SECRET_KEY as string,
      signatureVersion: "v4",
    }); 
    await s3.deleteObject({
      Bucket: process.env.CLOUDFLARE_BUCKET_NAME as string,
      Key: `${process.env.CLOUDFLARE_PROJECT_NAME}/${filePath}`, 
    }).promise();

    return NextResponse.json({ message: "Dosya silindi" ,  status: 200 });
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message ,  status: 500 });
  }
}


// import fs from 'fs/promises';
// import path from 'path';
// import { NextRequest } from 'next/server';

// export async function GET( 
// ) {
//   const dirpath =`/public/uploads/user/projects/`
//   const uploadsPath = path.join(process.cwd(), dirpath);

//   try {
//     const fls = await fs.readdir(uploadsPath);
//     const files=fls.map((el,i)=>{
//         return el
//     })
//     return Response.json({ files });
//   } catch (error) {
//     return Response.json(
//       { error: true, message: (error as Error).message },
//       { status: 500 }
//     );
//   }
// }
