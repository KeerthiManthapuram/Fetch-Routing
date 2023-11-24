// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <li className="blog-item">
        <img src={imageUrl} className="image" alt={title} />
        <div className="text-holder">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-section">
            <img src={avatarUrl} className="avatar" alt="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
