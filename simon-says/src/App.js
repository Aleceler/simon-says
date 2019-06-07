import React from 'react';

import { Title, TitleSmall } from "./styles";

function App() {
  return (
    <div>
        <Title fontSize={20}>
          Hello World
          <span>texto menor</span>
        </Title>

        <TitleSmall>
           menor
        </TitleSmall>
    </div>
  );
}

export default App;
