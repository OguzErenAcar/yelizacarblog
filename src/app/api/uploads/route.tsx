import fs from 'fs/promises';
import path from 'path';
import { NextRequest } from 'next/server';

export async function GET( 
) {
  const dirpath =`/public/uploads/user/projects/`
  const uploadsPath = path.join(process.cwd(), dirpath);

  try {
    const fls = await fs.readdir(uploadsPath);
    const files=fls.map((el,i)=>{
        return el
    })
    return Response.json({ files });
  } catch (error) {
    return Response.json(
      { error: true, message: (error as Error).message },
      { status: 500 }
    );
  }
}
