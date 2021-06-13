import React from 'react';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';
import styled from 'styled-components';
import Palette from '../lib/Palette';

const NewsPageContainer = styled.div`
    padding: 2% 3%;
    background: ${Palette.background};
    box-sizing: border-box;
`;

const NewsPageInner = styled.div`
    
`;

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';

    return (
        <NewsPageContainer>
            <NewsPageInner>
                <Categories/>
                <NewsList category={category}/>
            </NewsPageInner>
        </NewsPageContainer>
    );
};

export default NewsPage;