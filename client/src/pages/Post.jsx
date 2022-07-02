import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { posts } from "../data";
import {useState, useEffect} from "react";
import { Link, useLocation } from 'react-router-dom';
import { url } from "../redux/api";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async() => {
      const res = await axios.get(`${url}/posts/${path}`);
      setPost(res.data);
    }
    getPost();
  }, [path]);

  return (
    <Container>
      <div className="post-main-container">
        <div className="post-header">
          <Link to={``}>
          <img src="https://miro.medium.com/fit/c/40/40/1*VzeT736_-1CbcNONy0KPxA.png" alt="andere" />
          </Link>
          <div className="post-name">
            <Link to={`/nash-jacobs/${post?.author?._id}`}>
            <h3>{post?.author?.firstName + " " + post?.author?.lastName}</h3>
            </Link>
            <div className="post-durations">
              <p>{new Date(post.createdAt).toLocaleString('default', { month: 'long' })}</p>
              <p>8 min</p>
            </div>
          </div>
        </div>
        <h1>{post.title}</h1>
        <h2>{post.desc}</h2>
        <img className="post-img" src={post.image?.url} alt={post.title} />
        <p className="story">
          {post.body}
        </p>
      </div>
      <div className="post-side-nav">
          <div className="side-wrapper">
          <div className="search">
          <BsSearch />
          <input type="text" className="search" placeholder="Search..."/>
          </div>
          <h4>More like Andere</h4>
          <div className="more">
              <div className="more-header">
                  <img src="https://miro.medium.com/fit/c/40/40/1*VzeT736_-1CbcNONy0KPxA.png" />
                  <h3>James Andere</h3>
              </div>
              <h3>{post.title}</h3>
          </div>
          </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
  display: flex;

  .post-main-container {
    flex: 2;
    padding: 1rem 4rem;
  }

  .post-header {
    display: flex;
    align-items: center;
    height: 60px;
    /* background-color: pink; */
  }

  .post-header img {
    border-radius: 50%;
    height: 48px;
    width: 48px;
    margin-right: 8px;
  }

  .post-name h3 {
    color: rgba(25, 25, 25, 1);
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .post-durations {
    display: flex;
    font-size: 15px;
  }

  .post-durations p {
    margin-right: 8px;
    color: rgba(117, 117, 117, 1);
  }

  h1 {
    line-height: 40px;
    font-size: 32px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgba(41, 41, 41, 1);
    margin: 1rem 0;
  }

  h2 {
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #afafaf;
    font-size: 1.5em;
    line-height: 24px;
    font-style: italic;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  .post-img {
    width: 100%;
    height: 467px;
    object-fit: cover;
    max-width: 100%;
    cursor: zoom-in;
  }

  .story {
    font-size: 18px;
    line-height: 1.58;
    font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
    margin-top: 1rem;
    letter-spacing: 0.004em;
    color: rgba(41, 41, 41, 1);
  }

  .story::first-letter {
    padding: 0 0.3rem;
    margin-right: 10px;
    border-radius: 8px;
    font-size: 66px;
    float: left;
    line-height: 0.83;
  }

  .post-side-nav {
    flex: 1;
    border-left: 1px solid #e0e0e0;
    padding: 1rem 2rem;
  }

  .search {
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }

  .search input {
      width: 100%;
      outline: none;
      border: none;
      padding: 8px 0px 11px;
      line-height: 20px;
      font-size: 14px;
      margin-right: 20px;
  }

  .search svg {
      font-weight: 400;
      margin-right: 8px;
      width: 22px;
      height: 22px;
  }

  .post-side-nav h4 {
      text-transform: uppercase;
      font-size: 13px;
      margin-top: 30px;
  }

  .more h3 {
      font-size: 16px;
  }

  .more-header {
      display: flex;
      align-items: center;
      margin: 10px 0;
  }

  .more-header img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 10px;
  }

  .side-wrapper {
    position: sticky;
  top: 80px;
  left: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .post-main-container {
          padding: 0 1.5rem;
      }

      .post-side-nav {
          border: none;
          padding: 1rem 1.5rem;
      }

    .search {
        display: none;
    }
  }

  @media (max-width: 406px) {
      

      .post-main-container {
          padding: 0 1.2rem;
      }

      .post-side-nav {
          border: none;
          padding: 1rem 1.2rem;
      }
  }
`;

export default Post;
