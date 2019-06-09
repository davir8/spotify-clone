import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars2.githubusercontent.com/u/6731139?s=460&v=4" alt="Avatar" />
      Davi Rodrigues
    </User>
  </Container>
);

export default Header;
