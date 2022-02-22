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

export const ProductCartBasketAside = styled.aside`
    ${({ theme: { colors } }) => css`
            width: 100%;
            max-width: 300px;
            position: absolute;
            top: 55px;
            right: 0;
            z-index: 3;
            background: ${colors.WHITE};
            border: 1px solid ${colors.BORDER_LINE};
            padding: 10px;
        `}
`;


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





interface ImageProps {
  source?: string;
}

export const CloseButton = styled.aside<ImageProps>`
          ${({ source }) => css`
            width: 24px;
            height: 18px;
            display: table;
            float: right;
            margin-bottom: 5px;
            background-image: url(${source});
            background-size: 50%;
            background-position: center;
            background-repeat: no-repeat;
            cursor: pointer;
              `}
      `;


export const ProductCartBasketTile = styled.div`
    ${({ theme: { colors } }) => css`
            display: flex;
            position: relative;
            padding-bottom: 7px;
            border-bottom: 1px solid ${colors.BORDER_LINE};
            margin-bottom: 10px;
        `}
`;

export const ProductBagInfoDiv = styled.div`
  flex: 2 1;
`;

export const ProductBagName = styled.div`
  font-size: 14px;
`;

export const ProductBagImageBoxDiv = styled.div`
  flex: 1 1;
  padding-left: 15px;
`;

export const ProductBagImageBoxImg = styled.img`
  width: 100%;
  object-fit: cover;
`;


export const ButtonClear = styled.button`
    ${({ theme: { colors } }) => css`
            width: 100%;
            border: 1px solid ${colors.DARK};
            padding: 10px;
            background: ${colors.DARK};
            color: ${colors.WHITE};
            text-transform: uppercase;
            font-size: 14px;
            font-weight:500;
            letter-spacing: 1px;
            cursor: pointer;
            background: ${colors.WHITE};
            color: ${colors.DARK};
        `}
`;