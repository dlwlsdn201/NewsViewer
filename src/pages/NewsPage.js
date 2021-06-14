import React from 'react';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';
import styled from 'styled-components';
import Palette from '../lib/Palette';

const Header = styled.header`
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3vw;

    .title {
        margin: 0;
    }

`

const NewsPageContainer = styled.div`
    padding: 2% 3%;
    background: ${Palette.background};
    box-sizing: border-box;
`;

const NewsPageInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';

    return (
        <NewsPageContainer>
            <Header>
                <HeaderWrapper>
                    <h1 className="title">Free News Web Service</h1>
                </HeaderWrapper>
            </Header>
            <NewsPageInner>
                <Categories/>
                <NewsList category={category}/>
            </NewsPageInner>
        </NewsPageContainer>
    );
};

export default NewsPage;