import Projects from '@/components/blog/projects'
import React from 'react'
import Seo from '../../utils/Seo'

function Page() {
  return (
    <>
      <Seo title="Projects" path="/Blog/Projects" />
      <div>
        <Projects/>
      </div>
    </>
  )
}

export default Page
