import { AddToCartBelow, ProductCategory, ProductImageBelow, ProductItemDiv, ProductItemImgDiv, ProductName, ProductPrice, ProductTopLeftText } from './index.styles';

const ProductItemsArea = ({ product }: any) => {
    return (
        <>
            <ProductItemDiv>
                <ProductItemImgDiv>
                    <ProductImageBelow src={product?.image?.src} alt={product?.image?.alt}></ProductImageBelow>
                    {(product?.bestseller) ? (
                        <ProductTopLeftText>Best Seller</ProductTopLeftText>
                    ) : ('')}
                    {(product?.featured) ? (
                        <ProductTopLeftText>Featured</ProductTopLeftText>
                    ) : ('')}

                    <AddToCartBelow>ADD TO CART</AddToCartBelow>
                </ProductItemImgDiv>

                <ProductCategory>{product?.category}</ProductCategory>
                <ProductName>{product?.name}</ProductName>
                <ProductPrice>${product?.price}</ProductPrice>
            </ProductItemDiv>
        </>
    );

};

export default ProductItemsArea;