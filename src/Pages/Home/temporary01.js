import * as Styled from "./home.styled";
import BackgroundImage from "../../Images/HomeBackgroundImage.png";
import HeaderLogo from "../../Images/HomeHeaderLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight, faQuoteLeft, faSignOutAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router";
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(1);

  const [filter, setFilter] = useState("none");

  const [leftIconOpacity, setLeftIconOpacity] = useState(0.5);
  const [rightIconOpacity, setRightIconOpacity] = useState(1.0);

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const history = useHistory();

  function decrementCounter() {
    if (counter === 2) {
      setCounter(counter - 1);
      setLeftIconOpacity(0.5);
    } else if (counter > 2) {
      setCounter(counter - 1);
    }
  }

  function incrementCounter() {
    setCounter(counter + 1);
    setLeftIconOpacity(1.0);
  }

  function showMoreBookInfo() {
    setFilter("blur(1px)");
    setShowMoreInfo(true);
  }

  function showLessBookInfo() {
    setFilter("none");
    setShowMoreInfo(false);
  }

  return (
    <Styled.Body backgroundImage={BackgroundImage}>
      <Styled.Container filter={filter}>
        <Styled.Header>
          <Styled.TitleWrapper>
            <Styled.Image alt="HeaderLogo" src={HeaderLogo} />
            <Styled.Title>Books</Styled.Title>
          </Styled.TitleWrapper>
          <Styled.IconWrapper>
            <Styled.Text>Bem-vindo, Lorenzo!</Styled.Text>
            <FontAwesomeIcon icon={faSignOutAlt} onClick={() => history.push("/")} size="2x" />
          </Styled.IconWrapper>
        </Styled.Header>
        <Styled.Main>
          <Styled.BookCard>
            <Styled.BookCover  onClick={() => showMoreBookInfo()}  />
            <Styled.BookWrap>
              <Styled.BookTitleWrap>
                <Styled.BookTitle>Change By Design</Styled.BookTitle>
                <Styled.BookAuthor>Tim Brown</Styled.BookAuthor>
              </Styled.BookTitleWrap>
              <Styled.BookInfo>
                150 Páginas <br />
                Editora Loyola <br />
                Publicado em 2021
              </Styled.BookInfo>
            </Styled.BookWrap>
          </Styled.BookCard>
          <Styled.BookCard>
            <Styled.BookCover  onClick={() => showMoreBookInfo()}  />
            <Styled.BookWrap>
              <Styled.BookTitleWrap>
                <Styled.BookTitle>Change By Design</Styled.BookTitle>
                <Styled.BookAuthor>Tim Brown</Styled.BookAuthor>
              </Styled.BookTitleWrap>
              <Styled.BookInfo>
                150 Páginas <br />
                Editora Loyola <br />
                Publicado em 2021
              </Styled.BookInfo>
            </Styled.BookWrap>
          </Styled.BookCard>
          <Styled.BookCard>
            <Styled.BookCover  onClick={() => showMoreBookInfo()}  />
            <Styled.BookWrap>
              <Styled.BookTitleWrap>
                <Styled.BookTitle>Change By Design</Styled.BookTitle>
                <Styled.BookAuthor>Tim Brown</Styled.BookAuthor>
              </Styled.BookTitleWrap>
              <Styled.BookInfo>
                150 Páginas <br />
                Editora Loyola <br />
                Publicado em 2021
              </Styled.BookInfo>
            </Styled.BookWrap>
          </Styled.BookCard>
          <Styled.BookCard>
            <Styled.BookCover  onClick={() => showMoreBookInfo()}  />
            <Styled.BookWrap>
              <Styled.BookTitleWrap>
                <Styled.BookTitle>Change By Design</Styled.BookTitle>
                <Styled.BookAuthor>Tim Brown</Styled.BookAuthor>
              </Styled.BookTitleWrap>
              <Styled.BookInfo>
                150 Páginas <br />
                Editora Loyola <br />
                Publicado em 2021
              </Styled.BookInfo>
            </Styled.BookWrap>
          </Styled.BookCard>
          <Styled.BookCard>
            <Styled.BookCover  onClick={() => showMoreBookInfo()}  />
            <Styled.BookWrap>
              <Styled.BookTitleWrap>
                <Styled.BookTitle>Change By Design</Styled.BookTitle>
                <Styled.BookAuthor>Tim Brown</Styled.BookAuthor>
              </Styled.BookTitleWrap>
              <Styled.BookInfo>
                150 Páginas <br />
                Editora Loyola <br />
                Publicado em 2021
              </Styled.BookInfo>
            </Styled.BookWrap>
          </Styled.BookCard>
        </Styled.Main>
        <Styled.Footer>
          <Styled.IconWrapper>
            <FontAwesomeIcon icon={faChevronCircleLeft} onClick={() => decrementCounter()} opacity={leftIconOpacity} size="2x" />
            <Styled.Text>{counter}</Styled.Text>
            <FontAwesomeIcon icon={faChevronCircleRight} onClick={() => incrementCounter()} opacity={rightIconOpacity} size="2x" />
          </Styled.IconWrapper>
        </Styled.Footer>
      </Styled.Container>
      {showMoreInfo &&
        <Styled.BookMoreInfoCard>
          <Styled.BookMoreInfo>
            <Styled.BookMoreInfoCover   />
            <Styled.BookWrap>
              <Styled.BookTitleWrap>
                <Styled.BookMoreInfoTitle>
                  Change By Design <br />
                  Second Line Example
                </Styled.BookMoreInfoTitle>
                <Styled.BookMoreInfoAuthor>
                  Tim Brown, Julie Zhuo, Fried Maximiiliam
                </Styled.BookMoreInfoAuthor>
              </Styled.BookTitleWrap>
              <Styled.BookTitle>INFORMAÇÕES</Styled.BookTitle>
              <Styled.BookMoreInfoWrap>
                <Styled.BookTitle>
                  Páginas <br />Editora <br />Publicação <br />Idioma <br />Título Original <br />ISBN-10 <br />ISBN-13
                </Styled.BookTitle>
                <Styled.BookInfo>
                  304 páginas <br />Editora Loyola <br />2020 <br />Inglês <br />Change By Design <br />0062856626 <br />978-0062856623
                </Styled.BookInfo>
              </Styled.BookMoreInfoWrap>
              <Styled.BookTitle>RESENHA DA EDITORA</Styled.BookTitle>
              <Styled.BookMoreInfoWrap>
                <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
                <Styled.BookInfo>
                  The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
                </Styled.BookInfo>
              </Styled.BookMoreInfoWrap>
            </Styled.BookWrap>
          </Styled.BookMoreInfo>
          <FontAwesomeIcon icon={faTimesCircle} onClick={() => showLessBookInfo()} size="2x" />
        </Styled.BookMoreInfoCard>
      }
    </Styled.Body>
  );
};

export default Home;
