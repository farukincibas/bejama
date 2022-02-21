import styled, { css } from 'styled-components';


export const ProductImageBelow = styled.img`
    height: 100%;
    object-fit: cover;
    object-position: center;
  `;


export const ProductItemDiv = styled.div`
    width: 100%;
    overflow-x: hidden;
  `;



export const ProductItemImgDiv = styled.div`
    ${({ theme: { colors } }) => css`
        background: ${colors.BORDER_LINE};
        width: 100 %;
        height: 390px;
        position: relative;
        overflow: hidden;

    `}
`;

export const AddToCartBelow = styled.button`
    ${({ theme: { colors } }) => css`
        width: 100%;
        border: 1px solid ${colors.DARK};
        padding: 10px;
        background: ${colors.DARK};
        color: ${colors.WHITE};
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
        cursor: pointer;
        position: absolute;
        bottom: -40px;
        left: 0;
        transition: 0.2s ease; 
        ${ProductItemImgDiv}:hover &{
            bottom:0px;
        }
    `}

`;

export const ProductTopLeftText = styled.div`
    ${({ theme: { colors } }) => css`
        background: ${colors.WHITE};
        top: 0 !important;
        left: 0 !important;
        bottom: unset !important;
        padding: 10px 15px;
        font-size: 14px;
        position: absolute;
    `}
`;



export const ProductTitle = styled.div`
    text-transform: capitalize;
    opacity: 0.5;
    padding: 10px 0;
`;

export const ProductName = styled.div`
    font-weight: 700;
    padding-bottom: 7px;
`;

export const ProductPrice = styled.div`
    opacity: 0.5;
`;