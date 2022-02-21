import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layout';

function SubscribeSection() {
  return (
    <SubscribeSectionStyled>
        <InnerLayout>
            <div className="s-con">
                <div className="left">
                    <h2>
                        Subscribe to Our NewsLetter<br />for the Latest News update.
                    </h2>
                </div>
                <div className="right">
                    <div className="input-control">
                        <input type="text" placeholder='Enter your Email' />
                        <div className="s-btn">
                            Subscribe Now
                        </div>
                    </div>
                </div>
            </div>
        </InnerLayout>
    </SubscribeSectionStyled>
  )
}

const SubscribeSectionStyled = styled.section`
    background-color: var(--color-primary);
    .s-con {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 1rem;
        .left {
            display: flex;
            align-items: center;
            margin-right: 2rem;
            h2 {
                font-size: 2rem;
                line-height: 3rem;
            }
        }
        .right{
            display: flex;
            align-items: center;
        }
        .input-control {
            position: relative;
            font-weight: 500;
            width: 100%;
            input {
                width: 100%;
                font-family: inherit;
                font-size: inherit;
                padding: 1.4rem 2rem;
                outline: none;
                border: none;
                border-radius: 7px;
                @media screen and (max-width: 375px) {
                    font-size: 15px;
                }
            }
            .s-btn {
                position: absolute;
                top: 50%;
                background-color: var(--color-dark);
                right: .2rem;
                transform: translateY(-50%);
                padding: 1.1rem 2rem;
                cursor: pointer;
                border-radius: 7px;
                transition: all .4s ease-in-out;
                &:hover {
                    background-color: var(--color-primary);
                }
            }
        }
    }
`;

export default SubscribeSection;