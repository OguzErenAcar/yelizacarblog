import fs from 'fs/promises';
import path from 'path';
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { filename: string } }

) {
  const dirpath =`/public/uploads/yeliz/projects/${params.filename}/`
  const uploadsPath = path.join(process.cwd(), dirpath);

  try {
    const fls = await fs.readdir(uploadsPath);
    const files=fls.map((el,i)=>{
        return dirpath.substring(7)+el
    })
    return Response.json({ files });
  } catch (error) {
    return Response.json(
      { error: true, message: (error as Error).message },
      { status: 500 }
    );
  }
}
