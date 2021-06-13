import React from 'react';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

const Device = {
    // device-width
    $IPHONE5 : 320,
    $MOBILE : 480,
    $TABLET : 768,
    $NOTEBOOK: 1060,
    $DESKTOP: 1920,
}


const Boundary = {
    $OVER_IPHONE5 : `${Device.$IPHONE5 + 1}px`,
    $OVER_MOBILE : `${Device.$MOBILE + 1}px`,
    $OVER_TABLET : `${Device.$TABLET + 1}px`,
    $OVER_NOTEBOOK : `${Device.$NOTEBOOK + 1}px`,
    $UNDER_DESKTOP : `${Device.$DESKTOP}px`,
    $UNDER_NOTEBOOK : `${Device.$NOTEBOOK}px`,
    $UNDER_TABLET : `${Device.$TABLET}px`,
    $UNDER_IPHONE5 : `${Device.$IPHONE5}px`,
}


const NewsItemContainer = styled.li`
    width: 25vw;
    height: 25vw;
    display: flex;
    border-radius: 4px;
    justify-content: center;
    align-items: space-between;
    padding: 1%;
    background: #424242;
    & + & {
        margin: 2% 0;
    }

    @media screen and (max-width: ${Boundary.$UNDER_TABLET}){
        height: 20vw;
    }
`;

const ContentWrapper = styled.div`
    padding: 1% 3%;
    display: inherit;
    flex-direction: column;
    justify-content: space-between;
    color: white;

    @media screen and (max-width: ${Boundary.$UNDER_TABLET}){
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
`
;
const ThumnailImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: fill;
`;


const TitleBlock = styled.div`
    text-align: left;
    font-weight: 600;
    margin: 0;
    padding: 0;
    flex: 0.1;
    
    @media screen and (min-width: ${Boundary.$OVER_NOTEBOOK}){
        font-size: 1vw;
    }
    @media screen and (min-width: ${Boundary.$OVER_TABLET}) and (max-width: ${Boundary.$UNDER_NOTEBOOK}){

    }

    @media screen and (min-width: ${Boundary.$OVER_IPHONE5}) and (max-width: ${Boundary.$UNDER_TABLET}){}

    
    @media screen and (max-width: ${Boundary.$UNDER_IPHONE5}){}

/*   
    @media screen and (min-width: ${Boundary.$OVER_NOTEBOOK}){
    }

    @media screen and (min-width: ${Boundary.$OVER_TABLET}) and (max-width: ${Boundary.$UNDER_NOTEBOOK}){}

    @media screen and (min-width: ${Boundary.$OVER_IPHONE5}) and (max-width: ${Boundary.$UNDER_TABLET}){}

    
    @media screen and (max-width: ${Boundary.$UNDER_IPHONE5}){} */

`

const DescriptionBlock = styled.p`
    text-align: left;
    margin: 1% 0;
    flex: 0.2;
    
    @media screen and (min-width: ${Boundary.$OVER_NOTEBOOK}){
        font-size: 1rem;
    }

    @media screen and (min-width: ${Boundary.$OVER_TABLET}) and (max-width: ${Boundary.$UNDER_NOTEBOOK}){}

    @media screen and (min-width: ${Boundary.$OVER_IPHONE5}) and (max-width: ${Boundary.$UNDER_TABLET}){
        overflow-y: hidden;
        margin: 0;
    }

    
    @media screen and (max-width: ${Boundary.$UNDER_IPHONE5}){}

`

const PublishedDateBlock = styled.p`
    text-align: right;
    align-self: flex-end;
    margin: 0;
    color: yellow;
    flex: 0.1;
`


const NewsItem = ({article}) => {
    
    const { urlToImage, url, title, description, publishedAt} = article;


    const summaryDesc = description && description.length > 50 ?
        `${description.slice(0,72)}...` :
        '요약 데이터 없음';

    return (
        <NewsItemContainer>
            <ContentWrapper>
                <TitleBlock>
                    {   title?
                        title:
                        <Skeleton width="70%"/>
                    }
                </TitleBlock>
                <ThumbnailBlock>
                    <ThumnailImage src={urlToImage}/>
                </ThumbnailBlock>
                <DescriptionBlock>
                    {summaryDesc}
                </DescriptionBlock>
                <PublishedDateBlock>
                    {publishedAt}
                </PublishedDateBlock>
            </ContentWrapper>
        </NewsItemContainer>    
    );
};

export default NewsItem;