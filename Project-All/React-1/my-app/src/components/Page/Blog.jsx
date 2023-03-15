// import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
// import { blogsData } from './data'

const Blog = () => {
    const { title } = useParams();
    const location = useLocation()
    // console.log(location)
    // const [bodyData, setBodyData] = useState("")

    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body)
    // }, [])

    return (
        <div>
            <h1>{title} Page</h1>
            <p>{location.state.bodyData.slice(0, 500)}</p>
            <p>{location.state.bodyData.slice(501, 1000)}</p>
            <p>{location.state.bodyData.slice(1001, 2000)}</p>
        </div>
    )
}

export default Blog
