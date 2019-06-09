import React from 'react';

import GlobalStyle from './styles/global';
import { Wrapper, Container } from './styles/components';

import Sidebar from './components/Sidebar';
import Player from './components/Player';

function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <Sidebar />
        </Container>
        <Player />
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
