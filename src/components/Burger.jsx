import { useState } from 'react'
import styled from 'styled-components'
import { NavMenu } from './NavMenu'

const StyledBurger = styled.div`
padding:40px 32px;
  width: 2rem;
  position relative;
  top: 15px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  z-index: 20;
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 32px;
  }
  div {
    width: 2rem;
    height: 3px;
    background-color: #D86E15;
    border-radius: 10px;
  }
  button{
    width:135px;
    

  }
  img {
    width: 32px;
    height: 32px;
    position: absolute;
    right: 32px;
    top: 40px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`

export const Burger = () => {
  const [open, setOpen] = useState(false) // Initialize open state as false
  const toggleMenu = () => setOpen(!open) // Function to toggle the menu
  return (
    <>
      <StyledBurger onClick={toggleMenu}>
        {open ? (
          <h2 onClick={toggleMenu}>MENU</h2>
        ) : (
          <>
            <div />
            <div />
            <div />
          </>
        )}

        {open ? <img onClick={toggleMenu} src="/Close.png" alt="" /> : null}
      </StyledBurger>
      <NavMenu open={open} />
    </>
  )
}