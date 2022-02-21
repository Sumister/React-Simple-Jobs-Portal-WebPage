import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layout';
import logo from "../img/logo1.svg";

function SectionFooter() {
  return (
    <SectionFooterStyled>
        <InnerLayout>
            <div className="f-inner">
                <ul>
                    <div className="f-title logo">
                        <img src={logo} alt="" />
                        <h4>GetJob</h4>
                    </div>
                    <p className="f-text">
                        Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing elit.
                    </p>
                </ul>
                <ul>
                    <h4 className="f-title">Organization</h4>
                    <li className="nav-item">
                        <a href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">New App</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Email Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Our Clients</a>
                    </li>
                </ul>
                <ul>
                    <h4 className="f-title">Organization</h4>
                    <li className="nav-item">
                        <a href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">New App</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Email Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Our Clients</a>
                    </li>
                </ul>
                <ul>
                    <h4 className="f-title">Organization</h4>
                    <li className="nav-item">
                        <a href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">New App</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Email Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Our Clients</a>
                    </li>
                </ul>
            </div>
        </InnerLayout>
        <p className="footer">
            @ 2022 <span>GetJob</span>, Inc. All Rights reserved
        </p>
    </SectionFooterStyled>
  )
}

const SectionFooterStyled = styled.footer`
    background-color: #272A33;
    p{
        color: #d8dadf;
    }
    .f-inner {
        /* display: flex;
        justify-content: space-between; */
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        grid-gap: 2rem;
        p {
            color: #d8dadf;
            line-height: 1.9rem;
        }
        .logo {
            display: flex;
            img {
                width: 50px;
                margin-top: -13px;
            }
            h4 {
                margin-left: 16px;
            }
        }
        .f-title {
            padding-bottom: 2rem;
            font-size: 1.8rem;
            cursor: default;
        }
        li {
            margin: 1rem 0;
            a {
                transition: all .3s ease-in-out;
                color: #d8dadf;
                font-size: 1.1rem;
                &:hover {
                    color: var(--color-primary);
                }
            }
        }
    }
    .footer {
        width: 70%;
        margin: 0 auto;
        text-align: center;
        padding: 2rem 0;
        color: #d8dadf;
        border-top: 1px solid #cccccc1c;
        span {
            color: var(--color-primary);
        }
    }
`;

export default SectionFooter;