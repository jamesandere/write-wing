import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { posts } from "../data";
import { setHeaders, url } from "../redux/api";

const Author = () => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getAuthor = async () => {
      const res = await axios.get(`${url}/users/${id}`, setHeaders());
      setAuthor(res?.data);
    }

    getAuthor();
  }, [author]);

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const res = await axios.get(`${url}/users/${id}/posts`, setHeaders());
  //     // setAuthor(res?.data?.user?.firstName);
  //     setPosts(res?.data?.posts);
  //   }

  //   getPosts();
  // }, [id]);

  console.log(author);

  return (
    <Container>
      <div className="author-main-container">
        <h1>{author?.firstName + ' ' + author?.lastName}</h1>
        {author.posts?.map(post => (
          <Link to={`/post/${post._id}`}>
          <div className="author-post">
          <div className="content">
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
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
          <img src={post?.image?.url} />
        </div>
        </Link>
        ))}
        
      </div>
      <div className="author-side-nav">
        <div className="side-nav-main">
        <img src={author?.avatar ? author?.avatar?.url
        : "https://miro.medium.com/fit/c/40/40/1*VzeT736_-1CbcNONy0KPxA.png"} 
        alt={author?.firstName + ' ' + author?.lastName} />
        <h2>{author?.firstName + ' ' + author?.lastName}</h2>
        <p>I am just a web developer who loves writing, teaching and indie rock music. 
          My teaching style is playful and fun. At least I hope, lol.</p>
        </div>
      </div>
    </Container>
  );
};

export default Author;

const Container = styled.div`
  margin-top: 70px;
  display: flex;
  min-height: calc(100vh - 70px);

  .author-main-container {
    flex: 2;
    padding: 1rem 4rem;
  }

  .author-main-container h1 {
    color: rgb(25, 25, 25);
    font-size: 34px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin-bottom: 2rem;
  }

  .author-main-container a {
    text-decoration: none;
    color: inherit;
  }

  .author-post {
    display: flex;
    border-top: 1px solid rgb(187, 187, 187);
    padding: 1rem 0.6rem;
    justify-content: space-between;
  }

  .author-post img {
    width: 180px;
    height: 120px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content h2 {
    font-size: 22px;
    /* font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif; */
  }

  .time {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    color: gray;
  }

  .author-side-nav {
    flex: 1;
    border-left: 1px solid #e0e0e0;
    padding: 1rem 2rem;
  }

  .side-nav-main{
    text-align: center;
    margin-top: 3rem;
  }

  .side-nav-main img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .side-nav-main h2 {
    margin-bottom: 1rem;
  }
`;
