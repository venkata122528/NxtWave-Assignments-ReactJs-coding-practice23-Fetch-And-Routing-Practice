// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const fetchedBlogData = await response.json()

    const updatedData = {
      author: fetchedBlogData.author,
      avatarUrl: fetchedBlogData.avatar_url,
      content: fetchedBlogData.content,
      id: fetchedBlogData.id,
      imageUrl: fetchedBlogData.image_url,
      title: fetchedBlogData.title,
      topic: fetchedBlogData.topic,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state

    const {author, avatarUrl, content, id, imageUrl, title, topic} = blogData

    return (
      <div className="BlogItemDetailsContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="resultContainer">
            <h1 className="title">{title}</h1>
            <div className="authorDataContainer">
              <img
                src={avatarUrl}
                className="authorImage"
                alt={`avatar${id}`}
              />
              <p>{author}</p>
            </div>
            <img src={imageUrl} className="mainImage" alt={title} />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
