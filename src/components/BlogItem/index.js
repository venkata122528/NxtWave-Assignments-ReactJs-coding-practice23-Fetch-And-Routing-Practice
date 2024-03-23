// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {eachBlogData} = this.props
    const {author, avatarUrl, id, title, topic, imageUrl} = eachBlogData

    return (
      <Link to={`/blogs/${id}`} key={id}>
        <li className="eachBlogContainer">
          <img src={imageUrl} alt={`item${id}`} className="image" />
          <div className="dataContainer">
            <p>{topic}</p>
            <h1>{title}</h1>
            <div className="authorContainer">
              <img
                src={avatarUrl}
                alt={`author${id}`}
                className="authorImage"
              />
              <p>{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
