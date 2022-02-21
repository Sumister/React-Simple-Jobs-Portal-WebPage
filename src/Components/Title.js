import React from 'react';
import styled from 'styled-components';

function Title(props) {
  return (
    <TitleStyled>
        <h3>{props.name}</h3>
        <p>{props.para}</p>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
    h3 {
        color: var(--color-dark);
        font-size: 2.2rem;
    }
    p {
        padding: 1rem 0;
    }
`;

export default Title;