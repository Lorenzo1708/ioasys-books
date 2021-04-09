import BackgroundImage from "../../Images/LoginBackgroundImage.png";
import TitleLogo from "../../Images/LoginTitleLogo.png";

import * as Styled from "./login.styled";

import { useHistory } from "react-router";
import { useState } from "react";


const Login = () => {

  const [userValues, setUserValues] = useState({email: "", password: ""});

  function handleInputChange(inputChangeEvent) {
    const {name, value} = inputChangeEvent.target;

    setUserValues({
      ...userValues,
      [name]: value
    });
  }


  const history = useHistory();

  const [isWrongUserValues, setIsWrongUserValues] = useState(false);

  function authenticateUser() {
    if (userValues.email === "desafio@ioasys.com.br" && userValues.password === "12341234") {
      history.push("/home");
    } else {
      setIsWrongUserValues(true);
    }
  }


  return (
    <Styled.Background backgroundImage={BackgroundImage}>
      <Styled.Container>
        <Styled.TitleWrap>
          <Styled.Image alt="TitleLogo" src={TitleLogo}/>
          <Styled.Title>
            Books
          </Styled.Title>
        </Styled.TitleWrap>
        <Styled.FieldWrap>
          <Styled.InputWrap>
            <Styled.Label>
              Email
            </Styled.Label>
            <Styled.Input
              name="email"
              type="email"
              onChange={handleInputChange}
              value={userValues.email}
            />
          </Styled.InputWrap>
        </Styled.FieldWrap>
        <Styled.FieldWrap>
          <Styled.InputWrap>
            <Styled.Label>
              Senha  
            </Styled.Label>
            <Styled.Input
              name="password"
              type="password"
              onChange={handleInputChange}
              value={userValues.password}
            />
          </Styled.InputWrap>
          <Styled.Button onClick={() => authenticateUser()}>
            Entrar
          </Styled.Button>
        </Styled.FieldWrap>
        {
          isWrongUserValues
          &&
          <Styled.WrongUserValues>
            Email e/ou senha incorretos.
          </Styled.WrongUserValues>
        }
      </Styled.Container>
    </Styled.Background>
  );
}


export default Login;
