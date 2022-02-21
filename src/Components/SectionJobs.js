import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Layout';
import JobsCard from './JobsCard';
import Title from './Title';
import logo1 from '../img/logo1.svg';
import logo2 from '../img/logo2.svg';
import logo3 from '../img/logo3.svg';
import logo4 from '../img/logo4.svg';
import logo5 from '../img/logo5.svg';
import logo6 from '../img/logo6.svg';
import logo7 from '../img/logo7.svg';

function SectionJobs() {
    return (
        <SectionJobsStyled>
            <InnerLayout>
                <div className="title-con">
                    <Title name={'Recent Jobs'} para={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quod quae quidem esse ratione autem a, natus modi nemo facilis.'} />
                </div>
                <div className="cards-con">
                    <JobsCard
                        logo={logo1}
                        bg={'#27AE60'}
                        name={'TechStar'}
                        location={'Mumbai'}
                        title={'Software Developer'}
                        type={'Full Time'}
                        stack={'C++, Python, Java, MySQL or MongoDb'}
                        salary={'Rs.50000 - Rs.1.2L'}
                    />
                    <JobsCard
                        logo={logo2}
                        bg={'#27AE60'}
                        name={'TechStar'}
                        location={'Mumbai'}
                        title={'Software Developer'}
                        type={'Full Time'}
                        stack={'C++, Python, Java, MySQL or MongoDb'}
                        salary={'Rs.50000 - Rs.1.2L'}
                    />
                    <JobsCard
                        logo={logo3}
                        bg={'#27AE60'}
                        name={'TechStar'}
                        location={'Mumbai'}
                        title={'Software Developer'}
                        type={'Full Time'}
                        stack={'C++, Python, Java, MySQL or MongoDb'}
                        salary={'Rs.50000 - Rs.1.2L'}
                    />
                    <JobsCard
                        logo={logo4}
                        bg={'#27AE60'}
                        name={'TechStar'}
                        location={'Mumbai'}
                        title={'Software Developer'}
                        type={'Full Time'}
                        stack={'C++, Python, Java, MySQL or MongoDb'}
                        salary={'Rs.50000 - Rs.1.2L'}
                    />
                    <JobsCard
                        logo={logo5}
                        bg={'#27AE60'}
                        name={'TechStar'}
                        location={'Mumbai'}
                        title={'Software Developer'}
                        type={'Full Time'}
                        stack={'C++, Python, Java, MySQL or MongoDb'}
                        salary={'Rs.50000 - Rs.1.2L'}
                    />
                    <JobsCard
                        logo={logo6}
                        bg={'#27AE60'}
                        name={'TechStar'}
                        location={'Mumbai'}
                        title={'Software Developer'}
                        type={'Full Time'}
                        stack={'C++, Python, Java, MySQL or MongoDb'}
                        salary={'Rs.50000 - Rs.1.2L'}
                    />
                    <JobsCard
                        logo={logo6}
                        bg={'#27AE60'}
                        name={'TechStar'}
                        location={'Mumbai'}
                        title={'Software Developer'}
                        type={'Full Time'}
                        stack={'C++, Python, Java, MySQL or MongoDb'}
                        salary={'Rs.50000 - Rs.1.2L'}
                    />
                    <JobsCard
                        logo={logo7}
                        bg={'#27AE60'}
                        name={'TechStar'}
                        location={'Mumbai'}
                        title={'Software Developer'}
                        type={'Full Time'}
                        stack={'C++, Python, Java, MySQL or MongoDb'}
                        salary={'Rs.50000 - Rs.1.2L'}
                    />
                </div>
            </InnerLayout>
        </SectionJobsStyled>
    )
}

const SectionJobsStyled = styled.section`
    background-color: var(--color-neutral-3);
    .cards-con {
        padding-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        grid-gap: 2rem;
    }
`;

export default SectionJobs;