import { useState, useEffect } from 'react';
import ContextProvider from './store/ContextProvider';
import { ThemeProvider } from 'styled-components';
import GlobalStyleLocationBoard from './styles/GlobalStyle';
import { theme } from './styles/themes';
import Header from './components/Header';

const App = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('json/products.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyleLocationBoard />
        <Header></Header>
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;