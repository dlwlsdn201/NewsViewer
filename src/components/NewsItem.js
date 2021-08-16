import React, { useState } from "react";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import Palette from "../lib/Palette";
import { Device, Boundary } from "../lib/Device";
import FontSize from "../lib/FontSize";
import { FileX } from "phosphor-react";

const NewsItemContainer = styled.a`
  width: 29%;
  height: 25vw;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  /* flex-wrap: nowrap; */
  align-items: space-between;
  text-decoration: none;
  padding: 1%;
  background: ${Palette.wrapper};
  flex: auto;

  &:hover {
    background: ${Palette.highlight};
    transform: translateY(-10px) scale(1.05);
    transition: transform 0.8s ease, background 0.5s ease;
  }

  @media screen and (min-width: ${Boundary.$OVER_NOTEBOOK}px) {
    /* width: 24vw; */
    height: 28vw;
    padding: 1.5% 1.7% 0;
  }

  @media screen and (min-width: ${Boundary.$OVER_IPHONE5}px) and (max-width: ${Boundary.$UNDER_TABLET}px) {
    /* border: 0.1px solid green; */
    height: 33vh;
  }

  @media screen and (min-width: ${Boundary.$UNDER_TABLET}px) and (max-width: ${Boundary.$UNDER_NOTEBOOK}px) {
    height: 30vw;
  }
`;

const ContentWrapper = styled.div`
  padding: 1% 3%;
  display: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;

  @media screen and (max-width: ${Boundary.$UNDER_TABLET}) {
    padding: 1% 3%;
  }
`;
const ThumbnailBlock = styled.div`
  margin: 5% 0;
  width: 100%;
  min-height: 40%;
  height: 50%;
  display: inherit;
  justify-content: center;
  flex: 0.7;

  @media screen and (max-width: ${Boundary.$UNDER_NOTEBOOK}) {
    width: 20vw;
    height: 20vw;
  }
`;
const ThumnailImage = styled.img`
  min-width: 40%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;

  @media screen and (min-width: ${Boundary.$OVER_IPHONE5}px) and (max-width: ${Boundary.$UNDER_TABLET}px) {
    min-width: 100%;
  }
`;

const TitleBlock = styled.div`
  text-align: left;
  font-weight: 600;
  width: 100%;
  margin: 0;
  padding: 0;
  flex: 0.1;
  @media screen and (min-width: ${Boundary.$OVER_NOTEBOOK}px) {
    font-size: ${FontSize.$DESKTOP_Title};
  }

  @media screen and (max-width: ${Boundary.$UNDER_NOTEBOOK}px) {
    font-size: ${FontSize.$TABLET_Title};
  }

  @media screen and (min-width: ${Boundary.$OVER_IPHONE5}px) and (max-width: ${Boundary.$UNDER_TABLET}px) {
    font-size: ${FontSize.$IPHONE_Title};
  }
`;

const DescriptionBlock = styled.p`
  text-align: left;
  width: 100%;
  margin: 1% 0;
  flex: 0.2;

  @media screen and (min-width: ${Boundary.$OVER_NOTEBOOK}) {
    font-size: ${FontSize.$DESKTOP_Text};
  }

  @media screen and (min-width: ${Boundary.$OVER_IPHONE5}px) and (max-width: ${Boundary.$UNDER_TABLET}px) {
    display: none;
  }

  @media screen and (min-width: ${Boundary.$UNDER_TABLET}px) and (max-width: ${Boundary.$UNDER_NOTEBOOK}px) {
    font-size: ${FontSize.$TABLET_Text};
  }
`;

const PublishedDateBlock = styled.p`
  text-align: right;
  align-self: flex-end;
  width: 100%;
  margin: 0;
  flex: 0.1;
  opacity: 0.2;

  @media screen and (min-width: ${Boundary.$OVER_TABLET}px) and (max-width: ${Boundary.$UNDER_NOTEBOOK}px) {
    font-size: ${FontSize.$TABLET_PublishedAt};
  }

  @media screen and (min-width: ${Boundary.$OVER_IPHONE5}px) and (max-width: ${Boundary.$UNDER_TABLET}px) {
    font-size: ${FontSize.$IPHONE_PublishedAt};
    letter-spacing: -0.2px;
  }
`;

const NewsItem = ({ article, loading, deviceType }) => {

  const { urlToImage, url, title, description, publishedAt } = article;


  const summaryDesc = description && description.length > 60 ? 
    (deviceType === 'tablet' ? `${description.slice(0, 40)}...` : `${description.slice(0, 80)}...`) 
    : description
  
  const summaryTitle = title && title.length > 40 ? `${title.slice(0, 49)}...` : title;

  return urlToImage && title && description && description !== "" ? (
    !loading ? (
      <NewsItemContainer href={url} target="_blank">
        <ContentWrapper>
          <TitleBlock>{summaryTitle}</TitleBlock>
          <ThumbnailBlock>
            {urlToImage !== undefined ? (
              <ThumnailImage src={urlToImage} />
            ) : (
              <FileX size={24} />
            )}
          </ThumbnailBlock>
          <DescriptionBlock>{summaryDesc}</DescriptionBlock>
          <PublishedDateBlock>{publishedAt}</PublishedDateBlock>
        </ContentWrapper>
      </NewsItemContainer>
    ) : (
      <NewsItemContainer>
        <ContentWrapper style={{ width: "80%" }}>
          <TitleBlock style={{ paddingTop: "0" }}>
            <Skeleton
              variant="text"
              width="100%"
              height={100}
              animation="wave"
            />
          </TitleBlock>
          <ThumbnailBlock style={{ height: "100%", marginBottom: 0 }}>
            <Skeleton
              variant="rect"
              width="100%"
              height="auto"
              animation="wave"
            />
          </ThumbnailBlock>
          <DescriptionBlock style={{ marginTop: "0.5vw" }}>
            <Skeleton variant="text" height={100} animation="wave" />
          </DescriptionBlock>
          <PublishedDateBlock style={{ opacity: 1 }}>
            <Skeleton variant="text" width={220} height={30} animation="wave" />
          </PublishedDateBlock>
        </ContentWrapper>
      </NewsItemContainer>
    )
  ) : (
    false
  );
};

export default NewsItem;
