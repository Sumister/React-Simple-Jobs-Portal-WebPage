import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layout';
import ServiceItem from './ServiceItem';
import Title from './Title';
import apply from "../img/apply2.svg";
import search from "../img/search2.svg";
import account from "../img/create_account.svg";
import add from "../img/add.svg";

function SectionService() {
  return (
    <SectionServiceStyled>
        <InnerLayout>
            <div className="title-con">
                    <Title name={'Our Services'} para={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'} />
            </div>
            <div className="services-con">
                <ServiceItem icon={apply} name={'Submit Application'} para={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestiae nisi nemo sit, alias iure!'} />   
                <ServiceItem icon={search} name={'Search For a job'} para={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestiae nisi nemo sit, alias iure!'} />   
                <ServiceItem icon={add} name={'Apply By CV /  Resume'} para={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestiae nisi nemo sit, alias iure!'} />   
                <ServiceItem icon={account} name={'Create An Account'} para={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestiae nisi nemo sit, alias iure!'} />   
            </div>
        </InnerLayout>
    </SectionServiceStyled>
  )
}

const SectionServiceStyled = styled.section`
    .services-con {
        padding-top: 3rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }
`;


export default SectionService;