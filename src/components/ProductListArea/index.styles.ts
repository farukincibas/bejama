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

  export const SettingsImage = styled.img<SortImageProps>`
    ${({ source }) => css`
        width: 100%;
        object-fit: contain;
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
    @media (max-width: 999px) {
        display: none;
    }
`;

export const LightTextDiv = styled.div`
    opacity: 0.7;
`;

export const SelectPrice = styled.select<SortImageProps>`
    ${({ source, theme: { colors } }) => css`
        padding: 3px 5px;
        padding-right: 17px;
        appearance: none;
        -webkit-appearance: none;
        border: none;
        background: ${colors.WHITE};
        background-image: url(${source});
        background-repeat: no-repeat;
        background-position: right;
        background-size: 10px;
        @media (max-width: 999px) {
            display: none;
        }
    `}
`;


export const ProductListMobileSortDiv = styled.div`
    ${({ theme: { colors } }) => css`
        width: 30px;
        height: 30px;
        margin-left: 12px;
        padding: 7px;
        border: 1px solid ${colors.DARK};
        border-radius: 7px;
        display: none;
        @media (max-width: 999px) {
            display: block;
        }
    `}
`;

