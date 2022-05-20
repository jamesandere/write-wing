import { posts } from "../data";

const Posts = () => {
  return (
    <div className="posts-container">
        <div className="post-item">
            {posts.map((post)=> (
                <div className="post-main">
                <div className="author">
                    <img src={post.author.image} />
                    <h2>{post.author.name}</h2>
                </div>
                <div className="post-deets">
                <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <div className="time">
                    <span>{post.createdAt}</span>
                    <span>{post.readTime}</span>
                    <div>{post.category}</div>
                </div>
                </div>
                <img src={post.image} />
                </div>
                </div>
            ))}
        </div>
        <div className="right"></div>
    </div>
  )
}

export default Posts