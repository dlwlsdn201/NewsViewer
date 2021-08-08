import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Palette from '../lib/Palette';
import {Device, Boundary} from '../lib/Device';
import FontSize from '../lib/FontSize';



//name : 실제 카테고리 값
//text : 렌더링 시 사용될 한글 문자
const data = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name:'business',
        text: '비즈니스',
    },
    {
        name:'entertainment',
        text: '엔터테이먼트',
    },
    {
        name:'health',
        text: '건강',
    },
    {
        name:'science',
        text: '과학',
    },
    {
        name:'sports',
        text: '스포츠',
    }
];

const NavMenuContainer = styled.div`
    display: flex;
    justify-content: center;
    background: ${Palette.wrapper};
    font-size: 1.4rem;
    border-radius: 5px;
    width: 90%;
    /* @media screen and (min-width: ${Boundary.$OVER_TABLET}px) and (max-width: ${Boundary.$UNDER_NOTEBOOK}px){
        width: 22vw;
        font-size : ${FontSize.$TABLET_Title};
        border: 2px solid blue;
    } */

    @media screen and (min-width: ${Boundary.$OVER_IPHONE5}px) and (max-width: ${Boundary.$UNDER_TABLET}px){
        /* width: 22vw; */
        font-size : ${FontSize.$IPHONE_Text};
        border: 2px solid green;
        /* background: red; */
    }
`;

const NavMenuList = styled.ul`
    width: 100%;
    display: flex;
    list-style: none;
    color: ${Palette.fontColor};
    justify-content: space-around;
    padding: 1% 0;
    gap: 0 2%;
    margin: 0;
`;

const NavMenuItem = styled(NavLink)`
    display: flex;
    justify-content: center;
    word-break: keep-all;
    // nav item들간의 간격 밸런스를 위해 width: auto로 해야함.
    /* width: 6vw; */
    text-decoration: none;
    
    &::after{ 
        content: "";
        width: 0;
    }

    &:hover {
        cursor: pointer;
        position: relative;
        &::after {
            position: absolute;
            content : "";
            bottom: -10%;
            width: 3vw;
            border-top: 1px solid ${Palette.highlight};
            transition: width .3s ease;
        }
    }
    &:link {
        color: white;
    }

    &:visited {
        color: white;
    }

    &:active {
        color: #73b4ff;
    }
`;



const Categories = () => {
    return (
        <NavMenuContainer>
            <NavMenuList>
                {data.map(c=> (
                    <NavMenuItem
                        to={c.name === 'all'? '/' : `/${c.name}`}
                        key={c.name}
                        exact={c.name==='all'}
                        activeClassName='active'
                    >
                            {c.text}
                    </NavMenuItem>
                ))}
            </NavMenuList>
        </NavMenuContainer>
    );
};

export default Categories;