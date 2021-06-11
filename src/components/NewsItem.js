import React from 'react';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

const NewsItemContainer = styled.li`
    width: 95%;
    height: 10vw;
    display: flex;
    background: #424242;
    & + & {
        margin: 1% 0;
    }
`;

const ThumbnailWrapper = styled.div`
    flex: 0.2;
    overflow: hidden;
`
;
const ThumnailImage = styled.img`
    max-width: 100%;
    min-height: 100%;
    object-fit: fill;
`;

const ContentWrapper = styled.div`
    flex: 0.8;
    display: inherit;
    flex-direction: column;
    color: white;
`;

const TitleBlock = styled.h2`
    text-align: left;
    margin: 0;
    padding: 0;
`

const DescriptionBlock = styled.p`
    text-align: left;
`

const PublishedDateBlock = styled.p`
    text-align: right;
    margin: 0;
    color: yellow;
`


const NewsItem = ({article}) => {
    
    const { urlToImage, url, title, description, publishedAt} = article;
    
    return (
        <NewsItemContainer>
            <ThumbnailWrapper>
                <ThumnailImage src={urlToImage}/>
            </ThumbnailWrapper>
            <ContentWrapper>
                <TitleBlock>
                    {   title?
                        title:
                        <Skeleton width="70%"/>
                    }
                </TitleBlock>
                <DescriptionBlock>
                    {description}
                </DescriptionBlock>
                <PublishedDateBlock>
                    {publishedAt}
                </PublishedDateBlock>
            </ContentWrapper>
        </NewsItemContainer>    
    );
};

export default NewsItem;