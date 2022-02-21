import { AddToCartBelow, ProductImageBelow, ProductItemDiv, ProductItemImgDiv, ProductName, ProductPrice, ProductTitle, ProductTopLeftText } from './index.styles';

const ProductItemsArea = () => {
    return (
        <>
            <ProductItemDiv>
                <ProductItemImgDiv>
                    <ProductImageBelow src='https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' alt="Bench In Forest"></ProductImageBelow>
                    <ProductTopLeftText>Best Seller</ProductTopLeftText>
                    <AddToCartBelow>ADD TO CART</AddToCartBelow>
                </ProductItemImgDiv>

                <ProductTitle>people</ProductTitle>
                <ProductName>Bench In Forest</ProductName>
                <ProductPrice>$3.89</ProductPrice>
            </ProductItemDiv>
        </>
    );
};

export default ProductItemsArea;