import styled from "styled-components";


export const MasterButton = styled.button`
  background-color:${props => props.backcolor1 ? "tomato" : props.backcolor2 ? "orange" : props.backcolor3  };
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.4s;

  &:active{
    transform: scale(0.2);
  }

  &:hover{
    opacity: 0.5;
  }
`;