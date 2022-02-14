import styled from "styled-components";

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.color || "var(--black)"};
`;
export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.color || "var(--black)"};
  line-height: 25px;
  margin:0;
`;

export const Button = styled.button`
  border: none;
  font-size: 16px;
  color: ${(props) => props.color || "var(--white)"};
  background: ${(props) => props.color || "var(--blue)"};
  padding: 8px 27px;
  border-radius: 5px;
  font-weight: bold;
  transition: 250ms ease;
  &:hover {
    color: var(--white);
    cursor: pointer;
    background: var(--black);
  }
`;

export const Input = styled.input`
  border: 8px solid;
  border-color : ${props => props.borderColor || 'var(--blue)'};
  border-radius : 8px;
  padding : 5px 10px;
  color : ${props=>props.color || 'var(--balck)'};
  font-size : 14px;
  display : block;
  width : 100%;
  margin-bottom : 10px;
  &:focus {
    outline: none;
  }
  &::placeholder{
    color : ${p=>p.phc || 'var(--grey)'};
    font-size : 14px;
  }
`;

 export const Ul = styled.ul`
   margin : 0;
   padding : 0;
   list-style : none;
 `

 export const A  = styled.a`
  text-decoration : none;
  font-size : 17px;
 `

 export const Error = styled.span`
 font-size : 13px;
 color : var(--tomato);
 position : absolute;
 bottom : -20px;
 left : 0;
 `