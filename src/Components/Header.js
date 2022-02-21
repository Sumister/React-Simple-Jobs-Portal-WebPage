import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo1.svg';
import hero from '../img/hero.jpg';
import search from "../img/search.svg";

function Header() {
    return (
        <HeaderStyled>
            <nav className="navigation">
                <div className="nav-wrapper">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className='nav-items'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Near jobs</a>
                        </li>
                        <li>
                            <a href="#">Find jobs</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    <a href="#" className="cta-btn">+ Create Account</a>
                </div>
            </nav>

            <div className="header-content">
                <h1>
                    More Than <span>20,000 </span> jobs available <br />
                    You can Also get your Dream Job
                </h1>
                <p className="main-para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="input-control">
                    <input type="text" placeholder='Job Title or Keywords' />
                    <select name="location" id="location">
                        <option value="">Mumbai</option>
                        <option value="">Delhi</option>
                        <option value="">Bangalore</option>
                        <option value="">Hyderabad</option>
                    </select>
                    <select name="jobs" id="jobs">
                        <option value="">Game Developement</option>
                        <option value="">web Developement</option>
                        <option value="">FrontEnd Development</option>
                        <option value="">Full Stack Developement</option>
                        <option value="">UI / UX</option>
                    </select>
                    <button className='search-btn'>
                        <img src={search} alt="" />
                    </button>
                </div>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    min-height: 90vh;
    position: relative;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${hero});
    background-repeat: no-repeat;
    background-size: cover;
    .navigation {
        border-bottom: 1px solid #f4f7f773;
        .nav-wrapper {
            margin: 0 20rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 10vh;
            @media screen and (max-width: 1430px) {
                margin: 0 10rem;
            }
            @media screen and (max-width: 850px) {
                margin: 0 5rem;
            }
            @media screen and (max-width: 485px) {
                margin: 0 2rem;
            }
            @media screen and (max-width: 320px) {
                margin: 0 1rem;
            }
        }
        .logo {
            img {
                width: 50px;
            }
        }
        ul {
            display: flex;
            align-items: center;
            li {
                margin: 0 1rem;
            }
        }
        .cta-btn {
            display: inline-block;
            background-color: var(--color-primary);
            padding: 1rem 1.7rem;
            border-radius: 7px;
            text-align: center;
        }
    }

    .header-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 60%;
        @media screen and (max-width: 1325px) {
                width: 80%;
            }
        @media screen and (max-width: 850px) {
                width: 90%;
            }
        h1 {
            font-size: 3rem;
            span {
                font-size: 4rem;
                color: var(--color-primary);
            }
            @media screen and (max-width: 1150px) {
                font-size: 2rem;
                span {
                    font-size: 3rem;
                }
            }
            @media screen and (max-width: 620px) {
                font-size: 1.5rem;
                span {
                    font-size: 2.5rem;
                }
            }
            @media screen and (max-width: 485px) {
                font-size: 1rem;
                span {
                    font-size: 2rem;
                }
            }
            @media screen and (max-width: 320px) {
                font-size: 0.8rem;
                span {
                    font-size: 1.5rem;
                }
            }
        }
        .main-para {
            padding: 2rem;
            color: var(--color-white);
            @media screen and (max-width: 620px) {
                padding: 1rem;
            }
            @media screen and (max-width: 485px) {
                padding: 0.5rem;
                }
            @media screen and (max-width: 320px) {
                display: none;
                }
    }
        .input-control {
            display: flex;
            justify-content: center;
            width: 100%;
            input, select {
                background-color: var(--color-white);
                padding: 1.4rem;
                outline: none;
                border: none;
                margin-right: 10px;
                border-radius: 7px;
                font-size: inherit;
                width: 40%;
                color: #a1a1a1;
                font-weight: 500;

                @media screen and (max-width: 620px) {
                    padding: 1rem;
                    margin-right: 5px;
                    width: 50%;
                    font-size: 15px;
                }
                @media screen and (max-width: 320px) {
                    padding: 0.5rem;
                    margin-right: 5px;
                    width: 80%;
                    font-size: 10px;
                    margin-top: 15px;
                }
            }
            input[type='text']::placeholder {
                color: #a1a1a1;
            }
        }

        .search-btn {
            background-color: var(--color-primary);
            outline: none;
            border: none;
            padding: .5rem 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 7px;
            cursor: pointer;
            @media screen and (max-width: 320px) {
                padding: 0px 10px;
                border-radius: 50px;
                img {
                    width: 15px;
                }
            }
        }
    }

    @media screen and (max-width: 1150px) {
        .nav-items {
            display: none !important;
        }
    }
`;

export default Header;


