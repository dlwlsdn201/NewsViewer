import React from 'react';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';
import Palette from '../lib/Palette';
import {Device, Boundary} from '../lib/Device';
import FontSize from '../lib/FontSize';

// const Device = {
//     // device-width
//     $IPHONE5 : 320,
//     $MOBILE : 480,
//     $TABLET : 768,
//     $NOTEBOOK: 1060,
//     $DESKTOP: 1920,
// }



// const Boundary = {
//     $OVER_IPHONE5 : `${Device.$IPHONE5 + 1}px`,
//     $OVER_MOBILE : `${Device.$MOBILE + 1}px`,
//     $OVER_TABLET : `${Device.$TABLET + 1}px`,
//     $OVER_NOTEBOOK : `${Device.$NOTEBOOK + 1}px`,
//     $UNDER_DESKTOP : `${Device.$DESKTOP}px`,
//     $UNDER_NOTEBOOK : `${Device.$NOTEBOOK}px`,
//     $UNDER_TABLET : `${Device.$TABLET}px`,
//     $UNDER_IPHONE5 : `${Device.$IPHONE5}px`,
// }


const NewsItemContainer = styled.a`
    width: 25vw;
    height: 25vw;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: space-between;
    text-decoration: none;
    padding: 1%;
    background: ${Palette.wrapper};

    & + & {
        margin: 2% 0;
    }

    &:nth-child(3n+2){
        margin: 0 2%;
    }

    &:hover {
        background: ${Palette.highlight};
        transform: translate(10px, -10px);
        transition: transform 1s ease, background .5s ease;
        /* transition: ; */
    }

    @media screen and (max-width: ${Boundary.$UNDER_NOTEBOOK}){
        width: 24vw;
        height: 35vw;
        padding: 1.5% 1.7% 0;
    }
`;

const ContentWrapper = styled.div`
    padding: 1% 3%;
    display: inherit;
    flex-direction: column;
    align-items: center;
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

    @media screen and (max-width: ${Boundary.$UNDER_NOTEBOOK}){
        width: 20vw;
        height: 20vw;
    }
`
;
const ThumnailImage = styled.img`
    min-width: 40%;
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
    /* @media screen and (min-width: ${Boundary.$OVER_NOTEBOOK}){
    } */
    @media screen and (max-width: ${Boundary.$UNDER_NOTEBOOK}){
        font-size: ${FontSize.$TABLET_Title};
    }

    @media screen and (min-width: ${Boundary.$OVER_IPHONE5}) and (max-width: ${Boundary.$UNDER_TABLET}){}
`

const DescriptionBlock = styled.p`
    text-align: left;
    margin: 1% 0;
    flex: 0.2;
    
    /* @media screen and (min-width: ${Boundary.$OVER_NOTEBOOK}){
        font-size: 1rem;
    } */

    @media screen and (max-width: ${Boundary.$UNDER_NOTEBOOK}){
        font-size : ${FontSize.$TABLET_Text};
    }

    /* @media screen and (min-width: ${Boundary.$OVER_IPHONE5}) and (max-width: ${Boundary.$UNDER_TABLET}){
        overflow-y: hidden;
        margin: 0;
    }

    
    @media screen and (max-width: ${Boundary.$UNDER_IPHONE5}){} */

`

const PublishedDateBlock = styled.p`
    text-align: right;
    align-self: flex-end;
    margin: 0;
    flex: 0.1;
    opacity: 0.2;

    @media screen and (max-width: ${Boundary.$UNDER_NOTEBOOK}){
        font-size : ${FontSize.$TABLET_PublishedAt};
    }
`;


const NewsItem = ({article, loading}) => {
    
    const { urlToImage, url, title, description, publishedAt} = article;


    const summaryDesc = description && description.length > 80?
        `${description.slice(0,80)}...` :
        description

        console.log(`urlToImage title description description loading: ${urlToImage}, ${title}, ${description}, ${description}, ${loading}}`);
    return (
        (urlToImage && title && description && description !== "" ?
            (!loading?
            <NewsItemContainer href={url} target="_blank">
                <ContentWrapper>
                    <TitleBlock>
                        {title}
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
            </NewsItemContainer> :
            <NewsItemContainer>
            <ContentWrapper style={{width: "80%"}}>
                <TitleBlock style={{paddingTop:"0"}}>
                    <Skeleton variant="text" width="100%" height={100} animation='wave'/>
                </TitleBlock>
                <ThumbnailBlock style={{height: "100%", marginBottom: 0}}>
                    <Skeleton variant="rect" width="100%" height="auto" animation='wave'/>
                </ThumbnailBlock>
                <DescriptionBlock style={{marginTop: "0.5vw"}}>
                    <Skeleton variant="text" height={100} animation='wave'/>
                </DescriptionBlock>
                <PublishedDateBlock style={{opacity: 1}}>
                    <Skeleton variant="text" width={220} height={30} animation='wave'/>
                </PublishedDateBlock>
            </ContentWrapper>
            </NewsItemContainer>    
            )
            : false
           
            )
    );
};

export default NewsItem;