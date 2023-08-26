import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavBar: React.FC = () => {
  return (
    <Container>
      <UL>
       
      <LI to='/'>List</LI>
      <LI to='/todo'>Todo</LI>
      <LI to='/panda'>panda</LI>
      </UL>
     
    </Container>
  )
}

export default NavBar


const Container = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #000;
  display: flex;
align-items: center;
justify-content: center;
`
const UL = styled.ul`
display: flex;
align-items: center;
justify-content: center;
background-color: #201f1f68;
width: 80%;

`
const LI = styled(Link)`

display: flex;
text-decoration: none;
margin: 10px;
font-size: 25px;
color: #fff;
font-weight: 500;
font-family: sans-serif,Georgia;
`