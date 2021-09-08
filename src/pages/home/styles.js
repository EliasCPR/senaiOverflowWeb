import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"

export const GistIcon = styled(FaGithub)`
    font-size: 40px;
    gap: 50px;
    cursor: pointer;
    transition: .2;

    :hover{
        color: #ff8400;
    }
`;
export const EmailIcon = styled(MdEmail)`
    font-size: 40px;
    cursor: pointer;
    transition: .2;

    :hover{
        color: var(--primary);
    }
`;

export const LinkedinIcone = styled(FaLinkedin)`
    font-size: 40px;
    cursor: pointer;
    transition: .2;

    :hover{
        color: #0f67f5;
    }
`;



export const Main = styled.main`
    margin-top: 60px;

    display: grid;
    grid-template-columns: 20% 60% 20%;

    > nav {
        width: auto;
        height: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 10px 10px rgba(0,0,0,0.25);


        gap: 10px;
        padding: 40px;
        

        > img {
            height: 110px;
            width: 110px;
            border-radius: 50%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 25px;
        }

        > p {
                font-size: 18px;
                color: black;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: 600;

            }
        
        > div {
            height: 4.5vh;
            width: 8vw;
            display: flex;
            gap: 15px;
        }    

    }
`;


export const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
    padding: 10px;

    border: 1px gray;
`;

export const Post = styled.article`
    width: 80%;
    min-height: 100px;
    padding: 20px;

    box-shadow: 0px 10px 10px rgba(0,0,0,0.25);

    > header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    
        > img {
            height: 70px;
            width: 70px;
            border-radius: 50%;
        }
        

        > div {
            gap: 5px;
            font-size: 18px;

            > p {
                font-size: 14px;
                color: var(--textGray);
            }
        }

    }

    > main {
       
        margin-top: 10px;
        > div {
            > h1 {
                font-size: 22px;
            }

            > p{
                margin-top: 5px;
                padding: 10px 0px 10px 12px;
                
                font-size: 18px;
                border-left: 2px solid var(--primary);
            }
        }

        > img {
            width: calc(100% + 20px);
            margin-left: -10px;
            margin-top: 10px;
        }
        
        > section{
            margin-top: 10px;
            display: flex;
            gap: 5px;

            > p {
                padding: 5px;
                box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
            }
        }
    }

    > footer{

        > h2{
            margin-top: 10px;
            font-size: 18px;
            transition: 0.2s;
            cursor: pointer;

            :hover{
                color: var(--primary);
            }
        }
    }
`;