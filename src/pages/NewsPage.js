import React, { useState, useEffect } from "react";
import NewsList from "../components/NewsList";
import Categories from "../components/Categories";
import styled from "styled-components";
import Palette from "../lib/Palette";
import FontSize from "../lib/FontSize";
import { Boundary } from "../lib/Device";
import { ArrowFatUp, ArrowFatDown } from "phosphor-react";

const Header = styled.header``;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3vw;

  .title {
    margin: 0;
  }
`;

const NewsPageContainer = styled.div`
  padding: 2% 3%;
  background: ${Palette.background};
  box-sizing: border-box;
  overflow-y: hidden;
`;

const NewsPageInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScrollButtonContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  right: 3%;
  bottom: 3%;
  font-size: ${FontSize.$BUTTON_Title};

  @media screen and (min-width: ${Boundary.$OVER_IPHONE5}px) and (max-width: ${Boundary.$UNDER_TABLET}px) {
    right: 1%;
  }
`;

const ScrollButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 2.5vw;
  height: 3vw;
  margin-bottom: 3px;
  border: 1px solid white;
  opacity: ${(props) => (props.toggle ? 0.5 : 0)};
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  transition: opacity 0.2s ease, visibility 0.5s ease;

  &:hover {
    background: ${Palette.highlight};
    cursor: pointer;
    opacity: 1;
    transition: background 0.3s ease, opacity 0.3s ease;
  }

  @media screen and (min-width: ${Boundary.$OVER_IPHONE5}px) and (max-width: ${Boundary.$UNDER_TABLET}px) {
    width: 5vw;
    height: 5vw;
    border-radius: 2px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: ${Boundary.$UNDER_TABLET}px) and (max-width: ${Boundary.$UNDER_NOTEBOOK}px) {
    width: 3vw;
    height: 3.5vw;
    border-radius: 2px;
    margin-bottom: 8px;
  }
`;


const NewsPage = ({ match }) => {
  const [toggleTop, setToggleTop] = useState(null);
  const [toggleBottom, setToggleBottom] = useState(null);
  const [deviceType, setDevice] = useState(null);
  const root = document.querySelector("#root");
  const category = match.params.category || "all";

  const screenWidth = window.outerWidth;

  useEffect(() => {
    handleDeviceType();
    handleUpdateScrollState();
    window.addEventListener("scroll", handleUpdateScrollState);
    return () => {
      window.removeEventListener("scroll", () => console.log("scroll off"));
    };
  }, []);
  
  const handleDeviceType = () => {
    if (screenWidth < 768) {
      setDevice("mobile");
    } else if (768 < screenWidth && screenWidth < 1060) {
      setDevice("tablet");
    } else if (1060 < screenWidth && screenWidth < 1920) {
      setDevice("notebook");
    } else {
      setDevice("desktop");
    }
  }

  const handleScrollButton = (type) => {
    if (type === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: root.scrollHeight, behavior: "smooth" });
    }
  };

  const handleGetWindow = (attr) => {
    if (attr === "Height") {
      return window.innerHeight;
    }
    if (attr === "YOffset") return window.pageYOffset;
  };

  const handleUpdateScrollState = () => {
    let scrollLength = handleGetWindow("Height"); // 스크롤바 길이 : 962
    let scrollLocation = handleGetWindow("YOffset"); // 스크롤바 좌표

    let rootHeight = root.scrollHeight; // 최상위 컴포넌트의 스크롤 높이 : 3005
    let maxScrollLocation = rootHeight - scrollLength; // 스크롤 최대 좌표

    if (scrollLocation > 0 && scrollLocation < maxScrollLocation - 5) {
      setToggleTop(true);
      setToggleBottom(true);
    }

    // 스크롤 위치가 끝일 경우
    else if (scrollLocation > 0 && scrollLocation > maxScrollLocation - 5) {
      setToggleTop(true);
      setToggleBottom(false);
      // 스크롤 위치가 시작일 경우
    } else if (scrollLocation < 1) {
      setToggleTop(false);
      setToggleBottom(true);
    }
  };

  return (
    <NewsPageContainer>
      <Header>
        <HeaderWrapper>
          <h1 className="title">Free News Web Service</h1>
        </HeaderWrapper>
      </Header>
      <NewsPageInner>
        <Categories />
        <NewsList category={category} deviceType={deviceType}/>
        <ScrollButtonContainer>
          <ScrollButton
            toggle={toggleTop}
            type="top"
            onClick={() => handleScrollButton("top")}
          >
            <ArrowFatUp size={48} />
          </ScrollButton>
          <ScrollButton
            toggle={toggleBottom}
            type="bottom"
            onClick={() => handleScrollButton("bottom")}
          >
            <ArrowFatDown size={48} />
          </ScrollButton>
        </ScrollButtonContainer>
      </NewsPageInner>
    </NewsPageContainer>
  );
};

export default NewsPage;
