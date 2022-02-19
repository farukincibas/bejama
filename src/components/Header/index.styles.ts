import styled, { css } from 'styled-components';

import CartImage from '../../icons/shopping-cart.svg';

export const ProductNavDiv = styled.div`
${({ theme: { colors } }) => css`
    display: flex;
    position: relative;
    margin-bottom: 15px;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.BORDER_LINE};
    padding: 14px 0;
  `}
`;
export const ProductCartDiv = styled.div`
    align-self: center;
    position: relative;
`;

export const ProductCartImage = styled.img`
    height: 34px;
    cursor: pointer;
    flex-shrink: 0;
    width: 100%;
`;

ProductCartImage.defaultProps = {
  src: CartImage,
};

export const NavCartCounterDiv = styled.div`
${({ theme: { colors } }) => css`
    display: table;
    padding: 2px 5px;
    background: ${colors.DARK};
    color: ${colors.WHITE};
    font-size: 10px;
    position: absolute;
    right: 0;
    bottom: 0px; 
    `}
`;

