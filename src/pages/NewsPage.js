import React, {useState} from 'react';
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

const ScrollTopButton = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    right: 3%;
    bottom: 3%;
    width: 3vw;
    height: 3vw;
    border-radius: 10px;
    border: 1px solid white;
    opacity: ${props => props.toggle? 1 : 0};
    transition : opacity .3s ease;

    &:hover { 
        background: ${Palette.highlight};
        cursor: pointer;
        transition : background .3s ease;
    }
`


const NewsPage = ({match}) => {
    const [toggle, setToggle] = useState(false);
    
    const category = match.params.category || 'all';

    const handleScrollTop = () => {
        window.scrollTo({ top:0, behavior: 'smooth' });
    }

    const toggleTopButton = (result) => {
        setToggle()
    }

    window.addEventListener('scroll', function(){
        if(window.pageYOffset > 180){
            setToggle(true);
        }else {
            setToggle(false);
        }
    });

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
                <ScrollTopButton toggle={toggle} onClick={handleScrollTop}>
                    Top
                </ScrollTopButton>
            </NewsPageInner>
        </NewsPageContainer>
    );
};

export default NewsPage;