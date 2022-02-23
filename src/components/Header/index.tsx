import { ProductNavDiv, ProductCartDiv, NavCartCounterDiv, ProductCartImage, ProductCartBasketAside, CloseButton, ProductCartBasketTile, ProductBagInfoDiv, ProductBagName, ProductBagImageBoxDiv, ProductBagImageBoxImg, ButtonClear } from './index.styles';
import AppLogo from '../../icons/bejamas-logo.svg'
import CancelIcon from '../../icons/close.svg';
import { ClearBothDiv } from '../ProductArea/index.styles';
import { useState, useContext } from 'react';
import { Context } from '../../store/context';
import { Cart } from '../../store/reducer';

const Header = () => {
    const [showBasket, setShowBasket] = useState(false);
    const { state } = useContext(Context);
    return (
        <ProductNavDiv>
            <img src={AppLogo} alt="Bejamas Logo" />
            {/* cart */}
            <ProductCartDiv>
                <ProductCartImage onClick={() => setShowBasket(!showBasket)}></ProductCartImage>
                {state.length > 0 ? <NavCartCounterDiv>  {state.length} </NavCartCounterDiv> : <></>}
            </ProductCartDiv>
            {showBasket && (
                <ProductCartBasketAside>
                    <CloseButton onClick={() => setShowBasket(!showBasket)} source={CancelIcon}></CloseButton>
                    <ClearBothDiv></ClearBothDiv>
                    {state.length > 0 && state.map((cartItems: Cart, index) => (
                        <ProductCartBasketTile key={index}>
                            <ProductBagInfoDiv>
                                <ProductBagName>{cartItems.name}</ProductBagName>
                                <div>${cartItems.price}</div>
                            </ProductBagInfoDiv>
                            <ProductBagImageBoxDiv>
                                <ProductBagImageBoxImg src={cartItems.image} />
                            </ProductBagImageBoxDiv>
                        </ProductCartBasketTile>
                    ))}
                    <ButtonClear>Clear</ButtonClear>
                </ProductCartBasketAside>
            )}
        </ProductNavDiv>
    );
};

export default Header;