import { AddToCartBelow, ProductCategory, ProductImageBelow, ProductItemDiv, ProductItemImgDiv, ProductName, ProductPrice, ProductTopLeftText } from './index.styles';
import { Context } from '../../store/cart-context/context';
import { ActionTypes, Cart } from '../../store/cart-context/reducer';
import { useContext } from 'react';
import { ActionTypesToggle } from '../../store/toggle-context/reducer';
import { ToggleContext } from '../../store/toggle-context/context';

const ProductItemsArea = ({ product }: any) => {
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
            <ProductItemDiv>
                <ProductItemImgDiv>
                    <ProductImageBelow src={product?.image?.src} alt={product?.image?.alt}></ProductImageBelow>
                    {(product?.bestseller) ? (
                        <ProductTopLeftText>Best Seller</ProductTopLeftText>
                    ) : ('')}
                    {(product?.featured) ? (
                        <ProductTopLeftText>Featured</ProductTopLeftText>
                    ) : ('')}

                    <AddToCartBelow onClick={() => handleAdd({
                        productId: product?.productId,
                        name: product?.name,
                        image: product?.image?.src,
                        price: product?.price,
                    })}>ADD TO CART</AddToCartBelow>
                </ProductItemImgDiv>

                <ProductCategory>{product?.category}</ProductCategory>
                <ProductName>{product?.name}</ProductName>
                <ProductPrice>${product?.price}</ProductPrice>
            </ProductItemDiv>
        </>
    );

};

export default ProductItemsArea;