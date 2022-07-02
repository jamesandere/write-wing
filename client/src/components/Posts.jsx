import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categories } from "../data";
import Loader from "./Loader";

const Posts = () => {
  const { items: posts, fetchStatus } = useSelector((state) => state.posts);
  const convertName = (name) => {
    return name.trim().toLowerCase().split(/\W+/).join("-");
  };
  return (
    <div className="posts-container">
      <div className="post-item">
        {fetchStatus === "pending" ? (
          <Loader />
        ): 
        posts?.map((post) => (
          <div className="post-main" key={post._id}>
            <Link
              to={`${convertName(
                post.author.firstName.concat(" ").concat(post.author.lastName)
              )}/${post.author._id}`}
            >
              <div className="author">
                <img
                  src={post?.author?.avatar ? post?.author?.avatar?.url 
                    :"https://miro.medium.com/fit/c/40/40/1*VzeT736_-1CbcNONy0KPxA.png"}
                  alt="name"
                />
                <h2>
                  {post?.author?.firstName + " " + post?.author?.lastName}
                </h2>
              </div>
            </Link>
            <div className="post-deets">
              <div className="post-content">
                <Link to={`/post/${post._id}`}>
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                </Link>
                <div className="time">
                  <span>
                    {new Date(post.createdAt).toLocaleString("default", {
                      month: "long",
                    })}
                  </span>
                  <span>8 min</span>
                  <div>Abortion</div>
                </div>
              </div>
              <img src={post.image.url} />
            </div>
          </div>
        ))}
      </div>
      <div className="right">
        <div className="right-cont">
          <h2>Discover More Blogs</h2>
          {categories?.map((category) => (
            <div>
              <p>{category.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
