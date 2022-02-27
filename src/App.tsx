import { useState, useEffect } from 'react';
import ContextProvider from './store/cart-context/ContextProvider';
import { ThemeProvider } from 'styled-components';
import GlobalStyleLocationBoard from './styles/GlobalStyle';
import { theme } from './styles/themes';
import Header from './components/Header';
import ProductArea from './components/ProductArea';
import ProductListArea from './components/ProductListArea';
import ToggleContextProvider from './store/toggle-context/ToggleContextProvider';

const App = () => {
  const [products, setProducts] = useState([]);
  const [productsCurrent, setProductsCurrent] = useState([]);

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
        setProductsCurrent(productJson.products);
      });
  }

  useEffect(() => {
    getProductData();
  }, [])

  return (
    <ContextProvider>
      <ToggleContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyleLocationBoard />
          <Header></Header>
          <ProductArea products={products}></ProductArea>
          <ProductListArea products={products} setProducts={setProducts} productsCurrent={productsCurrent}></ProductListArea>
        </ThemeProvider>
      </ToggleContextProvider>
    </ContextProvider>
  );
};

export default App;