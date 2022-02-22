import { ProductNavDiv, ProductCartDiv, NavCartCounterDiv, ProductCartImage, ProductCartBasketAside, CloseButton, ProductCartBasketTile, ProductBagInfoDiv, ProductBagName, ProductBagImageBoxDiv, ProductBagImageBoxImg, ButtonClear } from './index.styles';
import AppLogo from '../../icons/bejamas-logo.svg'
import CancelIcon from '../../icons/close.svg';
import { ClearBothDiv } from '../ProductArea/index.styles';
import { useState } from 'react';

const Header = () => {
    const [showBasket, setShowBasket] = useState(false);
    return (
        <ProductNavDiv>
            <img src={AppLogo} alt="Bejamas Logo" />
            {/* cart */}
            <ProductCartDiv>
                <ProductCartImage onClick={() => setShowBasket(!showBasket)}></ProductCartImage>
                <NavCartCounterDiv>0</NavCartCounterDiv>
            </ProductCartDiv>
            {showBasket && (
                <ProductCartBasketAside>
                    <CloseButton onClick={() => setShowBasket(!showBasket)} source={CancelIcon}></CloseButton>
                    <ClearBothDiv></ClearBothDiv>
                    <ProductCartBasketTile>
                        <ProductBagInfoDiv>
                            <ProductBagName>Samurai King Restling</ProductBagName>
                            <div>$101</div>
                        </ProductBagInfoDiv>
                        <ProductBagImageBoxDiv>
                            <ProductBagImageBoxImg src="https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Samurai King Restling" />
                        </ProductBagImageBoxDiv>
                    </ProductCartBasketTile>
                    <ButtonClear>Clear</ButtonClear>
                </ProductCartBasketAside>
            )}
        </ProductNavDiv>
    );
};

export default Header;