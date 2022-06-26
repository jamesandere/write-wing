import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledForm } from "../components/StyledForm";
import { registerUser } from "../redux/authSlice";

const Register = () => {
  const auth = useSelector(state=> state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emaiil: "",
    password: "",
  });

  useEffect(() => {
    if(auth._id){
      navigate("/");
    }
  }, [auth._id, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(user));
  }

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-control">
          <label>First Name</label>
          <input type="text" onChange={(e)=> setUser({...user, firstName: e.target.value})} />
        </div>
        <div className="form-control">
          <label>Last Name</label>
          <input type="text" onChange={(e) => setUser({...user, lastName: e.target.value})} />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="email" onChange={(e) => setUser({...user, email: e.target.value})} />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" onChange={(e) => setUser({...user, password: e.target.value})} />
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input type="password" />
        </div>
        <button className="btn" type="submit">
          {auth.registerStatus === "pending" ? "Loading..." : 
          "Complete Registration"}
        </button>
        {auth.registerStatus === "rejected" ? 
        <p>{auth.registerError}</p>: null}
      </StyledForm>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80") !important;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 768px) {
    background-image: url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80");
    min-height: 100vh;
    margin-top: 100px;
  }
`;
