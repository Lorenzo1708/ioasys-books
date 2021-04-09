import Styled from "styled-components";

export const Body = Styled.div`
  display: flex;

  align-items: center;
  
  background-image: URL(${(properties) => properties.backgroundImage});
  background-position: center;
  background-size: cover;

  height: 100%;
  width: 100%;

  justify-content: center;

  left: 0;
  top: 0;

  padding-right: CALC(100% - 32px);

  @media (min-width: 1024px) {
    padding-right: CALC(100% - 192px);

    position: fixed;
  }
`

export const Container = Styled.div`
  display: flex;
  flex-direction: column;

  filter: ${(properties) => properties.filter};

  @media (min-width: 1024px) {
    min-width: CALC(100% - 384px);
  }
`

export const Header = Styled.header`
  display: flex;
  flex-direction: row;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`

export const Main = Styled.main`
  align-items: center;
  display: grid;
  grid-template-columns: 344px;
  justify-content: center;

  @media (min-width: 1280px) {
    grid-template-columns: 344px 344px 344px 344px;
  }
`

export const Footer = Styled.footer`
  display: flex;
  flex-direction: row;
`

export const TitleWrapper = Styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`

export const IconWrapper = Styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: 0;
  }
`

export const Image = Styled.img`
  margin-right: 12px;
  margin-top: 2px;
`

export const Title = Styled.h1`
  font-family: 'Roboto';
`

export const Text = Styled.span`
  display: none;
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 24px;
  margin-right: 24px;

  @media (min-width: 1024px) {
    display: flex;
  }
`

export const BookCard = Styled.section`
  background-color: #FFF;

  border-radius: 8px;

  box-shadow: 0px 6px 24px RGBA(64, 16, 96, 0.12);

  display: flex;
  flex-direction: row;

  height: 192px;
  width: 288px;

  padding: 24px 16px;

  margin: 12px 12px;
`

export const BookCover = Styled.img`
  margin-right: 16px;

  max-height: 100%;
  max-width: 100%;
`

export const BookWrap = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100%;
`

export const BookTitleWrap = Styled.div`
  display: flex;
  flex-direction: column;
`

export const BookTitle = Styled.span`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
`

export const BookAuthor = Styled.span`
  color: #708;
  font-family: 'Roboto';
  font-size: 16px;
`

export const BookInfo = Styled.span`
  color: #999;
  font-family: 'Roboto';
  font-size: 16px;
`

export const BookMoreInfoCard = Styled.div`
  background-color: RGBA(0, 0, 0, 0.32);

  display: flex;
  flex-direction: row;

  height: 100%;
  width: 100%;

  justify-content: center;

  padding-top: 32px;

  @media
`

export const BookMoreInfo = Styled.div`
  background-color: #FFF;

  border-radius: 8px;

  display: flex;
  flex-direction: column;

  height: 1024px;
  width: 256px;

  margin: auto 12px;

  padding: 48px 32px;

  @media (min-width: 1280px) {
    flex-direction: row;
    
    height: 640px;
    width: 832px;
  }
`

export const BookMoreInfoCover = Styled.img`
  margin-right: 32px;

  max-height: 100%;
  max-width: 100%;
`

export const BookMoreInfoTitle = Styled.span`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;

  margin-bottom: 16px;
`

export const BookMoreInfoAuthor = Styled.span`
  color: #708;
  font-family: 'Roboto';
  font-size: 16px;
`

export const BookMoreInfoWrap = Styled.div`
  display: flex;
  flex-direction: row;
`
