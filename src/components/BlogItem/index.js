// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachBlog

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <li className="blog-item">
        <img className="blog-image" src={imageUrl} alt={title} />
        <div className="blog-details-container">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="author-details-container">
            <img src={avatarUrl} alt={topic} />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
