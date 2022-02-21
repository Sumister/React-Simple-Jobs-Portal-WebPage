import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from "../Layout";
import CatBtn from './CatBtn';
import Title from './Title';

function SectionCategory() {
  return (
    <SectionCategoryStyled>
        <InnerLayout>
            <div className="title-con">
                <Title name={'All Categories'} para={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quod quae quidem esse ratione autem a, natus modi nemo facilis.'} />
            </div>
            <div className="category-con">
                <CatBtn name={'Game Development (600)'} />
                <CatBtn name={'Game Design (100)'} />
                <CatBtn name={'Web Developer (400)'} />
                <CatBtn name={'Full Stack Developer (500)'} />
                <CatBtn name={'React Developer (600)'} />
                <CatBtn name={'Product Designer (1000+)'} />
                <CatBtn name={'Software Developer (800)'} />
                <CatBtn name={'UI /UX (300)'} />
                <CatBtn name={'Office manager (60)'} />
                <CatBtn name={'Web Researcher (700)'} />
                <CatBtn name={'AI Developer (400)'} />
                <CatBtn name={'Data Scientist (100+)'} />
            </div>
        </InnerLayout>
    </SectionCategoryStyled>
  )
}

const SectionCategoryStyled = styled.section`
    .category-con {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 1.2rem;
        padding-top: 3rem;
    }
`;

export default SectionCategory;