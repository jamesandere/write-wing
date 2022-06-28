import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postsCreate } from "../redux/postsSlice";

const CreatePost = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    
    transformFile(file);
  }

  const transformFile = (file) => {
    const reader = new FileReader();

    if(file){
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      }
    } else {
      setImage("");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(auth._id){
      dispatch(
        postsCreate({
          title,
          desc,
          image,
          body
        })
      ).then(navigate("/"));
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" 
        onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Description" 
        onChange={(e) => setDesc(e.target.value)} required />
        <input type="file" accept="image/**" 
        onChange={handleImageUpload} required />
        <textarea placeholder="Write..." 
        onChange={(e) => setBody(e.target.value)} required />
        <button className="publish-btn">Publish</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;

  form {
    max-width: 700px;
    /* background-color: yellow; */
  }

  input,
  textarea {
    width: 100%;
  }

  input::placeholder,
  textarea::placeholder {
    color: #cecece;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    height: 50px;
    font-size: 20px;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  form input:nth-child(3) {
      border: none;
      height: 30px;
      font-size: 16px;
  }

  textarea {
    height: 400px;
    outline: none;
    border-color: #c5c5c5;
    padding: 1rem;
    font-size: 20px;
    border-radius: 4px;
  }

  textarea::placeholder {
      font-size: 20px;
  }

  .publish-btn {
    background-color: green;
    color: white;
    width: 100px;
    padding: 8px;
    border-radius: 4px;
    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 10px;
  }

  @media (max-width: 406px) {
      padding: 2rem 1.6rem;

    input::placeholder,
  textarea::placeholder {
    font-size: 16px;
  }

  input {
      height: 40px;
  }

  input, textarea {
      font-size: 16px;
  }

  textarea {
      height: 300px;
  }

  .publish-btn {
      width: 80px;
      font-size: 16px;
  }
  }
`;

export default CreatePost;
