'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


function Page() {
    const router=useRouter();
    router.push('/Blog'); 
}

export default Page
