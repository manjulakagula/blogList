// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {userDetails} = props
  const {id, title, description, publishedDate} = userDetails

  return (
    <li key={id} className="blog-list-container">
      <div className="card-container">
        <h1 className="blog-heading">{title}</h1>
        <p className="blog-published-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
