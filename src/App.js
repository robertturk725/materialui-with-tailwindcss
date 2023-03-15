import React from 'react';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles'; 
import { Button } from '@mui/material';

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <Button className='hover:bg-green-300'>Hi, there</Button>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
