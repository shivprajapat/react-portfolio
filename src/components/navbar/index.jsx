import React from 'react'
import { Navbar, Container, Logo, Links, List, ListItem, Icons, Icon, Button } from './style'

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Navbar>
  )
}

export default Header