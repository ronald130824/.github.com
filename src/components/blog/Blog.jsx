import React from 'react'
import './blog.css'
import Back from '../common/back/Back'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <>
      <Back title='Blog Posts' />
      <section className="blog padding2">
        <div className="containere grid2">
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
