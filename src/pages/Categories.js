import React from 'react';
import styled from 'styled-components';



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
`;

const NavMenuList = styled.ul`
    width: 90%;
    display: flex;
    list-style: none;
    color: white;
    justify-content: space-around;
    border: 1px solid #dca7ff;
    padding: 1% 0;
`;

const NavMenuItem = styled.li`
`;



const Categories = () => {
    return (
        <NavMenuContainer>
            <NavMenuList>
                <NavMenuItem>전체보기</NavMenuItem>
                <NavMenuItem>비즈니스</NavMenuItem>
                <NavMenuItem>엔터테이먼트</NavMenuItem>
                <NavMenuItem>건강</NavMenuItem>
                <NavMenuItem>과학</NavMenuItem>
                <NavMenuItem>스포츠</NavMenuItem>
            </NavMenuList>
        </NavMenuContainer>
    );
};

export default Categories;