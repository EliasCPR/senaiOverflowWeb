import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";


export const Container = styled.header`
   width : 100vw;
   position: fixed;
   height: 60px;
   top: 0;

   background-color: var(--primary);

   display: flex;
   align-items: center;
   justify-content: space-between;

   > img{
      width: 120px;
      margin-left: 10px;
   }

   > input{
      width: 754px;
      height: 50px;

      border: none;
      font-size: 22px;
      padding-left: 10px;
      border-radius: 3.5px;
   }
`;

export const IconSignOut = styled(FaSignOutAlt)`
   color: white;
   margin-right: 25px;
   font-size: 25px;
   cursor: pointer;

   :hover{
      transform: scale(1.5)
      /* rotate(180deg); */;
      transition: .2s;
   }
`