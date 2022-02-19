import styled, { css } from 'styled-components';


interface SortImageProps {
    source?: string;
}

export const SortArrowImage = styled.img<SortImageProps>`
    ${({ source }) => css`
    opacity: 0.5;
    content: url( ${source});
    `}
  `;

export const ProductListHeadDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const ProductListTypeDiv = styled.div`
    line-height: 150%;
`;

export const HeavySpan = styled.span`
    line-height: 150%;
`;

export const LightFiftySpan = styled.span`
    opacity: 0.5;
    font-weight: 400;
`;

export const ProductListFilterDiv = styled.div`
    display: flex;
    position: relative;
    align-items: center;
`;

export const ProductListSortDiv = styled.div`
    display: flex;
    position: relative;
    padding-right: 12px;
    cursor: pointer;
`;

export const LightTextDiv = styled.div`
    opacity: 0.7;
`;


