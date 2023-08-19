import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavBar: React.FC = () => {
  return (
    <Container>
      <Link to='/'>Home</Link>
      <Link to='/todo'>Todo</Link>
      <Link to='/panda'>panda</Link>
     
    </Container>
  )
}

export default NavBar


const Container = styled.nav`
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`