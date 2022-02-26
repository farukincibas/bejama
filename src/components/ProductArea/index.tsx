import { useContext } from 'react';
import { ProductDiv, ProductTitleDiv, ProductAddToCartButton, ProductImageBox, ProductImage, ProductTagDiv, ProductSummaryDiv, ProductDescriptionDiv, AppTitleDiv, ProductCategoryDiv, ParagraphMaxWidthFiveHundred, ProductRecommendDiv, ProductRecommendPicsDiv, RecommendPicsBoxDiv, RecommendPicsImg, ClearBothDiv, Paragraph, ProductMainDiv, ProductAddToCartButtonMobile, MarginBottom } from './index.styles';
import { ActionTypes, Cart } from '../../store/cart-context/reducer';
import { Context } from '../../store/cart-context/context';
import { ActionTypesToggle } from '../../store/toggle-context/reducer';
import { ToggleContext } from '../../store/toggle-context/context';

const ProductArea = (products: any) => {
    const wholeProducts = products.products;
    const filteredProduct = wholeProducts.filter((product: any) => product.featured === true);
    const product = filteredProduct[0];
    const recommendations = product?.details?.recommendations;
    const { dispatch } = useContext(Context);
    const { dispatchToggle } = useContext(ToggleContext);

    const toggleCart = () => { dispatchToggle({ type: ActionTypesToggle.showCart, payload: { showCart: true } }); }

    const handleAdd = ({ name, image, price, productId }: Cart) => {
        const newCartItem = {
            productId: productId,
            name: name,
            image: image,
            price: price,
        };
        dispatch({ type: ActionTypes.addCart, payload: newCartItem });
        toggleCart();
    };


    return (
        <>
            {filteredProduct.length > 0 && (
                <ProductMainDiv>
                    <ProductDiv>
                        <ProductTitleDiv >{product?.name}</ProductTitleDiv>
                        <ProductAddToCartButton onClick={() => handleAdd({
                            productId: product?.productId,
                            name: product?.name,
                            image: product?.image?.src,
                            price: product?.price,
                        })}>ADD TO CART</ProductAddToCartButton>
                    </ProductDiv>

                    <ProductImageBox>
                        <ProductImage src={product?.image?.src} alt={product?.image?.alt} />
                        {(product?.featured) ? (
                            <ProductTagDiv>Photo of The Day</ProductTagDiv>
                        ) : ('')}
                    </ProductImageBox>
                    <ProductAddToCartButtonMobile onClick={() => handleAdd({
                        productId: product?.productId,
                        name: product?.name,
                        image: product?.image?.src,
                        price: product?.price,
                    })}>ADD TO CART</ProductAddToCartButtonMobile>
                    <ProductSummaryDiv>
                        <ProductDescriptionDiv>
                            <AppTitleDiv>About The {product?.name}</AppTitleDiv>
                            <ProductCategoryDiv>{product?.category}</ProductCategoryDiv>
                            <ParagraphMaxWidthFiveHundred>{product?.details?.description}</ParagraphMaxWidthFiveHundred>
                        </ProductDescriptionDiv>

                        <ProductRecommendDiv>
                            <AppTitleDiv>People also buy</AppTitleDiv>
                            <ProductRecommendPicsDiv>
                                {recommendations.length > 0 && recommendations.map((recommend: any) => (
                                    <RecommendPicsBoxDiv key={recommend?.alt}>
                                        <RecommendPicsImg src={recommend?.src} alt={recommend?.alt} />
                                    </RecommendPicsBoxDiv>
                                ))}
                            </ProductRecommendPicsDiv>
                            <ClearBothDiv />
                            <MarginBottom />
                            <AppTitleDiv>Details</AppTitleDiv>
                            <Paragraph>Size:{product?.details?.dimensions?.width} x {product?.details?.dimensions?.height} pixel</Paragraph>
                            <Paragraph>Size: {Math.round((product?.details?.size) / 1024)} MB</Paragraph>
                        </ProductRecommendDiv>
                    </ProductSummaryDiv>
                </ProductMainDiv>
            )
            }

        </>
    );
};

export default ProductArea;