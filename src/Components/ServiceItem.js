import React from 'react';
import styled from 'styled-components';

function ServiceItem(props) {
  return (
    <ServiceItemStyled>
        <div className="image">
            <img src={props.icon} alt="" />
        </div>
        <h4>{props.name}</h4>
        <p>{props.para}</p>
    </ServiceItemStyled>
  )
}

const ServiceItemStyled = styled.div`
    &:hover {
        .image {
            border: 2px dashed var(--color-primary);
        }
    }
    text-align: center;

    .image {
        border-radius: 7px;
        border: 2px dashed #F4F7F7;
        display: flex;
        justify-content: center;
        align-items: center;
        display: inline-block;
        transition: all .4s ease-in-out;
        img {
            width: 100px;
            padding: 2rem;
            background-color: #F4F7F7;
            margin: 1rem;
            border-radius: 7px;
        }
    }
    h4 {
        color: var(--color-dark);
        padding: 1rem 0;
    }
    p {
        font-size: 1rem;
        line-height: 1.7rem;
    }
`;

export default ServiceItem;