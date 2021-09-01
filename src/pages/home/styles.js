import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const GistIcon = styled(FaGithub)`
    font-size: 40px;

    cursor: pointer;
    transition: .2s;

    :hover{
        color: var(--primary);
    }
`;

export const Main = styled.main`
    margin-top: 70px;
    margin-left: 50px;

    display: grid;
    grid-template-columns: 20% 60% 20%;


    > nav {
        
        background-color: #fff;
        box-shadow: 0px 10px 20px rgba(0,0,0,0.25);
        width: auto;
        height: 70vh;
        display: flex;
        flex-direction:column;
        align-items: center;

        gap: 10px;
        padding: 10px;

         > img {
            height: 160px;
            width: 160px;
            border-radius: 50%;
            margin-left: auto;
            margin-right: auto;
         }

         >p{
             font-size: 18px;
             color: #000;
             font-family: Arial, Helvetica, sans-serif;
             font-weight: 600;
         }
    }

`;

export const FeedContainer = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
    padding: 10px;

    border: 1px  grey;

`;

export const Post = styled.article`

    width: 80%;
    min-height: 100px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    

    box-shadow: 0px 10px 10px rgba(0,0,0, 0.25);


    > header {
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 10px;

        > img {
            width: 70px;
            height: 70px;
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

        > img {
            width: calc(100% + 40px);
            margin-left: -20px;
            margin-top: 10px;
        }

        > div {
            > h1 {
                font-size: 22px;
            }
            > p {
                margin-top: 5px;
                padding: 10px 0px 10px 12px;

                border-left: 2px solid var(--primary);
                font-size: 18px;
            }
        }

        > section{
            margin-top: 10px;
            display: flex;
            gap: 5px;

            > p {
                padding: 5px;
                
                box-shadow: 0px 0px 10px rgba(0,0,0, 0.25);
                    
            }
        }
    }

    > footer {
        > h2 {
            margin-top: 10px;
            transition: 0.2s;
            font-size: 18px;
            cursor: pointer;
            
            :hover {
                color: var(--primary);
            }
        }
    }
  
`;

