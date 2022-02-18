import styled, { css } from 'styled-components';

import CartImage from '../../ico/shopping-cart.svg';

export const ProductNavDiv = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 15px;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    padding: 14px 0;
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
    display: table;
    padding: 2px 5px;
    background: #000000;
    color: #ffffff;
    font-size: 10px;
    position: absolute;
    right: 0;
    bottom: 0px;
`;


/*
interface CartImageProps {
  cartImage?: string;
}

export const ProductCartImage = styled.img<CartImageProps>`
  ${({ cartImage }) => css`
  height: 34px;
  cursor: pointer;
  flex-shrink: 0;
  content: url( ${cartImage});
  
  `}
`;

export const TableHeader = styled.th`
  ${({ theme: { colors } }) => css`
    font-family: sans-serif;
    font-size: 12px;
    text-align: center;
    padding: 2px 0;
    background-color: ${colors.LIGHT_BLUE};
    color: ${colors.WHITE};
    border-radius: 4px;
  `}
`;*/