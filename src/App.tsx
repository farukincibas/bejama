import { useState, useEffect } from 'react';
import ContextProvider from './store/cart-context/ContextProvider';
import { ThemeProvider } from 'styled-components';
import GlobalStyleLocationBoard from './styles/GlobalStyle';
import { theme } from './styles/themes';
import Header from './components/Header';
import ProductArea from './components/ProductArea';
import ProductListArea from './components/ProductListArea';

const App = () => {
  const [products, setProducts] = useState([]);

  const getProductData = () => {
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
      .then(function (productJson) {
        setProducts(productJson.products);
      });
  }

  useEffect(() => {
    getProductData();
  }, [])

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyleLocationBoard />
        <Header></Header>
        <ProductArea products={products}></ProductArea>
        <ProductListArea products={products}></ProductListArea>
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;