import backgroundImage from "../../Images/HomeBackgroundImage.png";
import moreInfoMockBookCover from "../../Images/HomeMoreInfoMockBookCover.png";
import titleLogo from "../../Images/HomeTitleLogo.png";

import bookList from "../../MockData/bookList";

import * as Styled from "./home.styled";

import { useHistory } from "react-router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight, faQuoteLeft, faSignOutAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons";


const Home = () => {

  const [leftIconOpacity, setLeftIconOpacity] = useState(0.5);

  const [pageNumber, setPageNumber] = useState(1);

  function nextPage() {
    if (pageNumber === 1) {
      setLeftIconOpacity(1.0);
    }

    setPageNumber(pageNumber + 1);
  }
  
  function previousPage() {
    if (pageNumber > 1) {
      if (pageNumber === 2) {
        setLeftIconOpacity(0.5);
      }

      setPageNumber(pageNumber - 1);
    }
  }


  const history = useHistory();

  function exitHomePage() {
    history.push("/");
  }


  const [containerFilter, setContainerFilter] = useState("none");

  const [isShowingDetails, setIsShowingDetails] = useState(false);

  function handleBookClick(bookID) {
    setContainerFilter("BLUR(2px)");

    setIsShowingDetails(true);
  }

  function handleIconClick() {
    setContainerFilter("none");

    setIsShowingDetails(false);
  }

  
  return (
    <Styled.Background backgroundImage={backgroundImage}>
      <Styled.Container containerFilter={containerFilter}>
        <Styled.Header>
          <Styled.HeaderTitleWrap>
            <Styled.HeaderImage alt="TitleLogo" src={titleLogo}/>
            <Styled.HeaderTitle>
              Books
            </Styled.HeaderTitle>
          </Styled.HeaderTitleWrap>
          <Styled.HeaderIconWrap>
              <Styled.HeaderText>
                Bem-vindo, usuário!
              </Styled.HeaderText>
              <FontAwesomeIcon
                size="2x"
                icon={faSignOutAlt}
                onClick={() => exitHomePage()}
              />
          </Styled.HeaderIconWrap>
        </Styled.Header>
        <Styled.Main>
          {
            bookList.map((book) => (
              <Styled.BookCard onClick={() => handleBookClick()}>
                <Styled.BookCover alt="MockBookCover" src={book.cover} />
                <Styled.BookWrap>
                  <Styled.BookInfoWrap>
                    <Styled.BookTitle>
                      {book.title}
                    </Styled.BookTitle>
                    <Styled.BookAuthor>
                      {book.author}
                    </Styled.BookAuthor>
                  </Styled.BookInfoWrap>
                  <Styled.BookInfoWrap>
                    <Styled.BookInfo>
                      150 Páginas
                    </Styled.BookInfo>
                    <Styled.BookInfo>
                      Editora Loyola
                    </Styled.BookInfo>
                    <Styled.BookInfo>
                      Publicado em 2021
                    </Styled.BookInfo>
                  </Styled.BookInfoWrap>
                </Styled.BookWrap>
              </Styled.BookCard>
            ))
          }
        </Styled.Main>
        <Styled.Footer>  
          <Styled.FooterIconWrap>
            <FontAwesomeIcon
              size="2x"
              icon={faChevronCircleLeft}
              onClick={() => previousPage()}
              opacity={leftIconOpacity}
            />
            <Styled.FooterText>
              Página {pageNumber} de 100
            </Styled.FooterText>
            <FontAwesomeIcon
              size="2x"
              icon={faChevronCircleRight}
              onClick={() => nextPage()}
            />
          </Styled.FooterIconWrap>
        </Styled.Footer>
      </Styled.Container>
      {
        isShowingDetails
        &&
        <Styled.MoreInfoBackground>
          <Styled.IconContainer>
            <FontAwesomeIcon
              icon={faTimesCircle}
              onClick={() => handleIconClick()}
              size="2x"
            />
          </Styled.IconContainer>
          <Styled.MoreInfoContainer>
            <Styled.MoreInfoBookCover alt="MoreInfoMockBookCover" src={moreInfoMockBookCover} />
            <Styled.MoreInfoWrap>
              <Styled.MoreInfoBookTitle>
                Change By Design <br />
                Second Line Example
              </Styled.MoreInfoBookTitle>
              <Styled.MoreInfoBookAuthor>
                Tim Brown, Julie Zhuo, Fried Maximiilian
              </Styled.MoreInfoBookAuthor>
              <Styled.MoreInfoBookText>
                INFORMAÇÕES
              </Styled.MoreInfoBookText>
              <Styled.MoreInfoBookInfoWrap>
                <Styled.MoreInfoBookInfo infoColor="#000">
                  Páginas
                </Styled.MoreInfoBookInfo>
                <Styled.MoreInfoBookInfo infoColor="#999">
                  150 Páginas
                </Styled.MoreInfoBookInfo>
              </Styled.MoreInfoBookInfoWrap>
              <Styled.MoreInfoBookInfoWrap>
                <Styled.MoreInfoBookInfo infoColor="#000">
                  Editora
                </Styled.MoreInfoBookInfo>
                <Styled.MoreInfoBookInfo infoColor="#999">
                  Editora Loyola
                </Styled.MoreInfoBookInfo>
              </Styled.MoreInfoBookInfoWrap>
              <Styled.MoreInfoBookInfoWrap>
                <Styled.MoreInfoBookInfo infoColor="#000">
                  Publicação
                </Styled.MoreInfoBookInfo>
                <Styled.MoreInfoBookInfo infoColor="#999">
                  2021
                </Styled.MoreInfoBookInfo>
              </Styled.MoreInfoBookInfoWrap>
              <Styled.MoreInfoBookInfoWrap>
                <Styled.MoreInfoBookInfo infoColor="#000">
                  Idioma
                </Styled.MoreInfoBookInfo>
                <Styled.MoreInfoBookInfo infoColor="#999">
                  Inglês
                </Styled.MoreInfoBookInfo>
              </Styled.MoreInfoBookInfoWrap>
              <Styled.MoreInfoBookInfoWrap>
                <Styled.MoreInfoBookInfo infoColor="#000">
                  Título Original
                </Styled.MoreInfoBookInfo>
                <Styled.MoreInfoBookInfo infoColor="#999">
                  Change By Design
                </Styled.MoreInfoBookInfo>
              </Styled.MoreInfoBookInfoWrap>
              <Styled.MoreInfoBookInfoWrap>
                <Styled.MoreInfoBookInfo infoColor="#000">
                  ISBN-10
                </Styled.MoreInfoBookInfo>
                <Styled.MoreInfoBookInfo infoColor="#999">
                  0062856626
                </Styled.MoreInfoBookInfo>
              </Styled.MoreInfoBookInfoWrap>
              <Styled.MoreInfoBookInfoWrap>
                <Styled.MoreInfoBookInfo infoColor="#000">
                  ISBN-13
                </Styled.MoreInfoBookInfo>
                <Styled.MoreInfoBookInfo infoColor="#999">
                  978-0062856626
                </Styled.MoreInfoBookInfo>
              </Styled.MoreInfoBookInfoWrap>
              <Styled.MoreInfoBookText>
                RESENHA DA EDITORA
              </Styled.MoreInfoBookText>
              <Styled.MoreInfoBookInfoWrap>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  opacity="0.5"
                />  
                <Styled.MoreInfoBookInfo infoColor="#999">
                  The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
                </Styled.MoreInfoBookInfo>
              </Styled.MoreInfoBookInfoWrap>
            </Styled.MoreInfoWrap>
          </Styled.MoreInfoContainer>
        </Styled.MoreInfoBackground>
      }
    </Styled.Background>
  );
}


export default Home;
