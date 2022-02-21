import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layout';
import StaffCard from './StaffCard';
import Title from './Title';
import avatar1 from '../img/avatar1.jpg';
import avatar2 from '../img/avatar2.jpg';
import avatar3 from '../img/avatar3.jpg';
import avatar4 from '../img/avatar4.jpg';
import star from '../img/star.svg';
import star_half from '../img/star_half.svg';
import bookmark from "../img/bookmark.svg";

function SectionStaff() {
  return (
    <SectionStaffStyled>
      <InnerLayout>
        <div className="title-con">
          <Title name={'Our Staffs'} para={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quod quae quidem esse ratione autem a, natus modi nemo facilis.'} />
        </div>
        <div className="staff-cards">
          <StaffCard
            img={avatar1}
            bookmark={bookmark}
            name={'Akshay Mishra'}
            title={'Developer'}
            rating={star}
            rating_half={star_half}
            stack={'C++, Python, Java, JavaScript, Django '}
          />
          <StaffCard
            img={avatar2}
            bookmark={bookmark}
            name={'Akshay Mishra'}
            title={'Developer'}
            rating={star}
            rating_half={star_half}
            stack={'C++, Python, Java, JavaScript, Django '}
          />
          <StaffCard
            img={avatar3}
            bookmark={bookmark}
            name={'Akshay Mishra'}
            title={'Developer'}
            rating={star}
            rating_half={star_half}
            stack={'C++, Python, Java, JavaScript, Django '}
          />
          <StaffCard
            img={avatar4}
            bookmark={bookmark}
            name={'Akshay Mishra'}
            title={'Developer'}
            rating={star}
            rating_half={star_half}
            stack={'C++, Python, Java, JavaScript, Django '}
          />
        </div>
      </InnerLayout>
    </SectionStaffStyled>
  )
}

const SectionStaffStyled = styled.section`
  .staff-cards {
    padding-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    @media screen and (max-width: 2700px) and (min-width: 1440px){
            grid-template-columns: repeat(4, 1fr);
        }
  }
`;

export default SectionStaff;