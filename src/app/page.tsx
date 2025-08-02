'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


function Page() {
    const router=useRouter();
    router.push('/Dashboard/auth/sign-in'); 
}

export default Page
