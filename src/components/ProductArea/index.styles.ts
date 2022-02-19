import styled, { css } from 'styled-components';

export const ProductDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 12px 0;
`;

export const ProductTitleDiv = styled.div`
    flex: 5 1;
    font-weight: 700;
    font-size: 18px;
`;

export const ProductAddToCartButton = styled.button`
${({ theme: { colors } }) => css`
    flex: 1 1;
    width: 100%;
    border: 1px solid ${colors.DARK};
    padding: 10px;
    background:  ${colors.DARK};
    color: ${colors.WHITE};
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    
    @media(max-width: 480px){
        display:none;
    }
    `}
`;

export const ProductAddToCartButtonMobile = styled.button`
${({ theme: { colors } }) => css`
    flex: 1 1;
    width: 100%;
    border: 1px solid ${colors.DARK};
    padding: 10px;
    background:  ${colors.DARK};
    color: ${colors.WHITE};
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    display:none;
    @media(max-width: 480px){
        display:block;
    }
    `}
`;

export const ProductImageBox = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
`;

interface CartImageProps {
    cartImage?: string;
}

export const ProductImage = styled.img<CartImageProps>`
    ${({ cartImage }) => css`
    width: 100%;
    object-fit: cover;
    content: url( ${cartImage});
    `}
  `;

export const ProductTagDiv = styled.div`
  ${({ theme: { colors } }) => css`
      padding: 10px 15px;
      font-size: 14px;
      background: ${colors.WHITE};
      position: absolute;
      bottom: 0;
      left: 0;
      font-weight: 700;
      `}
  `;


export const ProductSummaryDiv = styled.div`
    display: flex;
    position: relative;
    padding: 14px 0;
    grid-gap: 20px;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
      }
`;

export const ProductDescriptionDiv = styled.div`
    flex: 1 1;
`;

export const AppTitleDiv = styled.div`
    flex: 5 1;
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 15px;
`;

export const ProductCategoryDiv = styled.div`
    opacity: 0.5;
    font-weight: 700;
    text-transform: capitalize;
    padding-bottom: 7px;
`;

export const ParagraphMaxWidthFiveHundred = styled.p`
    max-width: 500px;
    line-height: 150%;
    opacity: 0.6;
`;

export const ProductRecommendDiv = styled.div`
    flex: 1 1;
    text-align: right;
    @media (max-width: 600px){
        text-align: left;
    }
`;

export const ProductRecommendPicsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(80px, 117px));
    grid-gap: 10px;
    float: right;
`;

export const RecommendPicsBoxDiv = styled.div`
    width: 100%;
    height: 147px;
    overflow: hidden;
    align-self: flex-end;
`;

export const RecommendPicsImg = styled.img<CartImageProps>`
    ${({ cartImage }) => css`
    height: 100%;
    object-fit: cover;
    content: url( ${cartImage});
    `}
  `;

export const ClearBothDiv = styled.div`
  clear: both;
`;

export const MarginBottom = styled.div`
  margin-top:40px;
`;

export const Paragraph = styled.p`
    line-height: 150%;
    opacity: 0.6;
`;

export const ProductMainDiv = styled.div`
    ${({ theme: { colors } }) => css`
        padding-bottom: 15px;
        margin-bottom: 25px;
        border-bottom: 1px solid ${colors.BORDER_LINE};
    `}
`;

