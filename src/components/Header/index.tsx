import { ProductNavDiv, ProductCartDiv, NavCartCounterDiv, ProductCartImage } from './index.styles';
import AppLogo from '../../icons/bejamas-logo.svg'

const Header = () => {
    return (
        <ProductNavDiv>
            <img src={AppLogo} alt="Bejamas Logo" />
            {/* cart */}
            <ProductCartDiv>
                <ProductCartImage></ProductCartImage>
                <NavCartCounterDiv>0</NavCartCounterDiv>
            </ProductCartDiv>
        </ProductNavDiv>
    );
};

export default Header;