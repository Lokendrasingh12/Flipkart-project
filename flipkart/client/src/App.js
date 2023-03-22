import logo from './logo.svg';
import './App.css';


//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material';

import DataProvider from './context/dataProvider';

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 54}} >
        <Home />
      </Box>
      
    </DataProvider>
  );
}

export default App;
