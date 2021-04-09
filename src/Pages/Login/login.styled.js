import  Styled from "styled-components";


export const Background = Styled.div`
  background-image: URL(${(properties) => properties.backgroundImage});  
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Container = Styled.div`
  margin: auto;

  @media (min-width: 1024px) {
    margin-left: 192px;
  }
`;

export const TitleWrap = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
`;

export const Image = Styled.img`
  margin-right: 8px;
  margin-top: 2px;
`;

export const Title = Styled.span` 
  color: #FFF;
  font-family: 'Heebo';
  font-size: 32px;
  font-weight: 300;
`;

export const FieldWrap = Styled.div`
  align-items: center;
  backdrop-filter: BLUR(2px);
  background: RGBA(0, 0, 0, 0.32);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  padding: 8px;
`;

export const InputWrap = Styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`;

export const Label = Styled.label`
  color: #FFF;
  font-family: 'Heebo';
  font-size: 12px;
  opacity: 0.5;
`;

export const Input = Styled.input`
  background: none;
  border: none;
  color: #FFF;
  font-family: 'Heebo';
  font-size: 16px;
`;

export const Button = Styled.button`
  border: none;
  border-radius: 32px;
  color: #708;
  font-family: 'Heebo';
  font-size: 16px;
  font-weight: 600;
  height: 32px;
  width: 64px;

  @media (min-width: 384px) {
    height: 40px;
    width: 80px;
  }
`;

export const WrongUserValues = Styled.div`
  background-color: RGBA(255, 255, 255, 0.4);
  border-radius: 4px;
  color: #FFF;
  font-family: 'Heebo';
  font-size: 16px;
  padding: 8px;
`;
