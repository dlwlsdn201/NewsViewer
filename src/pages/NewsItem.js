import React from 'react';
import styled from 'styled-components';

const NewsItemContainer = styled.li`
    width: 90%;
    border: 1px solid red;
    display: flex;

    & + & {
        margin: 1% 0;
    }
`;

const ThumbnailWrapper = styled.div`
    flex: 0.3;
    background: lightcyan;
`
;
const ThumnailBlock = styled.div`
`;

const ContentWrapper = styled.div`
    flex: 0.7;
    display: inherit;
    flex-direction: column;
    background: gray;
`;

const TitleBlock = styled.h1`
    text-align: center;
    margin: 0;
    padding: 0;
`

const DescriptionBlock = styled.p`
    text-align: left;
    border: 1px dashed blue;
    color: blue;
`

const PublishedDateBlock = styled.p`
    text-align: right;
    margin: 0;
    color: yellow;
`


const NewsItem = () => {
    return (
        <NewsItemContainer>
            <ThumbnailWrapper>
                <ThumnailBlock>
                    썸네일
                </ThumnailBlock>
            </ThumbnailWrapper>
            <ContentWrapper>
            <TitleBlock>
                제목
            </TitleBlock>
            <DescriptionBlock>
                설명
            </DescriptionBlock>
            <PublishedDateBlock>
                게시일
            </PublishedDateBlock>
            </ContentWrapper>
        </NewsItemContainer>    
    );
};

export default NewsItem;