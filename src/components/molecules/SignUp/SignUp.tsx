import React, {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {RegularInput, Button, Title} from "../../atoms";

type Props = {
  className?: string
}

const LoginWireframe: FunctionComponent<Props> = ({className}) => (
  <div className={className}>
    <div className="head">
      <Title>Login</Title>
    </div>
    <div className="body">
      <RegularInput color={'white'} label={`Email`} onChange={()=>{}} placeholder={'Correo'}/>
      <RegularInput label={`Contraseña`} onChange={()=>{}} placeholder={'Contraseña'} type={`password`}/>
    </div>
    <div className="footer">
      <Button color={`orangered`} onClick={()=>{}}>send</Button>
      <Link to={`/register`}/>
    </div>
  </div>
);

export const Login = styled(LoginWireframe)`
  background-color: #333;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 10px orangered;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  width: 220px;
  
  & > * {
    margin: 4px 0px;
  }
  
  & .body{
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  & .footer{
    display: flex;
    flex-direction: row-reverse;
  }
`;

export default Login;