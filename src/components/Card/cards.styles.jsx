import { Link } from "react-router-dom";
import styled from "styled-components";



export const EventosItem = styled.li`
  width: 360px;
  min-heigth: 320px;
  background-color: #D0E7D2;
  -webkit-box-shadow:0px 0px 10px 1px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.3);
  box-shadow:0px 0px 10px 1px rgba(0,0,0,0.3);
  list-style-type: none;
`

export const EventoTitulo = styled.h3`
font-family: 'Playfair Display', serif;
font-size: 18px;
padding: 15px 15px 0 15px;
font-weight: 300;
line-heigth: 150%;
`

export const EventoImagem = styled.img`
padding: 15px;
width: 100%;
aspect-ratio: 16/10;
object-fit: cover;
`

export const EventoDataHora = styled.p`
font-size 14px;
padding: 15px;
line-heigth: 150%
`

export const EventoLink = styled(Link)` 
display: block;
font-size: 14px;
padding: 15px;
line-heigth: 150%;
color: #5F6F52;
text-decoration: none;

`


