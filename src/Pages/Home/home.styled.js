import Styled from "styled-components";


export const Background = Styled.div`
  background-image: URL(${(properties) => properties.backgroundImage});  
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Container = Styled.div`
  margin: auto;

  filter: ${(properties) => properties.containerFilter};
`;

export const Header = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const HeaderTitleWrap = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-right: 32px;

  @media (min-width: 1024px) {
    margin-right: 0;
  }
`;

export const HeaderImage = Styled.img`
  margin-right: 8px;
  margin-top: 2px;
`;

export const HeaderTitle = Styled.span`
  color: #000;
  font-family: 'Heebo';
  font-size: 32px;
  font-weight: 300;
`;

export const HeaderIconWrap = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const HeaderText = Styled.span`
  display: none;
  font-family: 'Heebo';
  font-size: 16px;

  @media (min-width: 1024px) {
    display: inline;
    margin-right: 16px;
  }
`;

export const Main = Styled.div`
  align-items: center;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 272px;
  justify-content: center;
  padding: 8px;
  
  @media (min-width: 768px) {
    grid-gap: 16px;
    grid-template-columns: 288px 288px;
    padding: 16px;
  }

  @media (min-width: 1280px) {
    grid-gap: 32px;
    grid-template-columns: 288px 288px 288px 288px;
    padding: 32px;
  }
`;

export const BookCard = Styled.div`
  align-items: center;
  background-color: #FFF;
  border: 4px;
  box-shadow: 0 12px 24px RGBA(70, 0, 80, 0.12);
  display: flex;
  flex-direction: row;
  height: 160px;
  justify-content: space-between;
  padding: 8px;
  width: 256px;

  @media (min-width: 768px) {
    width: 272px;
  }
`;

export const BookCover = Styled.img`
  margin-right: 16px;
`;

export const BookWrap = Styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

export const BookInfoWrap = Styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookTitle = Styled.span`
  font-family: 'Heebo';
  font-size: 16px;
  font-weight: bold;
`;

export const BookAuthor = Styled.span`
  color: #708;
  font-family: 'Heebo';
  font-size: 14px;
`;

export const BookInfo = Styled.span`
  color: #999;
  font-family: 'Heebo';
  font-size: 14px;
`;

export const Footer = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const FooterIconWrap = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: auto;

  @media (min-width: 1024px) {
    margin-right: 0;
  }
`;

export const FooterText = Styled.span`
  font-family: 'Heebo';
  font-size: 16px;
  margin: auto 16px;
`;

export const MoreInfoBackground = Styled.div`
  align-items: center;
  background-color: RGBA(0, 0, 0, 0.32);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const IconContainer = Styled.div`
  margin: 4px 4px auto auto;

  @media (min-width: 768px) {
    margin: 64px 64px auto auto;
  }
`;

export const MoreInfoContainer = Styled.div`
  background-color: #FFF;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  position: fixed;
  margin: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 50%;
    max-width: 40%;
  }
`;

export const MoreInfoBookCover = Styled.img`
  height: 75%;
  margin: auto;
  width: 75%;

  @media (min-width: 768px) {
    margin-right: 32px;
  }
`;

export const MoreInfoWrap = Styled.div`
  display: flex;
  flex-direction: column;
`;

export const MoreInfoBookTitle = Styled.span`
  font-family: 'Heebo';
  font-size: 24px;
  font-weight: bold;
`;

export const MoreInfoBookAuthor = Styled.span`
  color: #708;
  font-family: 'Heebo';
  font-size: 16px;
`;

export const MoreInfoBookText = Styled.span`
  font-family: 'Heebo';
  font-size: 16px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const MoreInfoBookInfoWrap = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MoreInfoBookInfo = Styled.span`
  color: ${(properties) => properties.infoColor};
  font-family: 'Heebo';
  font-size: 14px;
`;
