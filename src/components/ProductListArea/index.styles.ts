import styled, { css } from 'styled-components';


interface ImageProps {
    source?: string;
}

export const SortArrowImage = styled.img`
        opacity: 0.5;
        width: 15px;
  `;

export const SettingsImage = styled.img`
        width: 100%;
        object-fit: contain;
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
    font-size: 21px;
    margin-left: 4px;
`;

export const SelectPrice = styled.select<ImageProps>`
    ${({ source, theme: { colors } }) => css`
        font-size: 18px;
        padding: 3px 5px;
        padding-right: 17px;
        appearance: none;
        -webkit-appearance: none;
        border: none;
        background: ${colors.WHITE};
        background-image: url(${source});
        background-repeat: no-repeat;
        background-position: right;
        background-size: 15px;
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

export const ProductListSection = styled.section`
    display: flex;
    position: relative;
    margin-bottom: 35px;
    grid-gap: 20px;
    gap: 20px;
`;

export const ProductListCategory = styled.aside`
${({ theme: { colors } }) => css`
        width: 100%;
        max-width: 200px;
        @media (max-width: 999px) {
            width: 95% !important;
            max-width: 300px !important;
            background: ${colors.WHITE};
            box-shadow: 0px 3px 12px rgb(0 0 0 / 30%);
            padding: 30px 10px;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 3;
        }
    `}
`;

export const ProductItemsList = styled.aside`
    flex: 1 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px 20px;
`;

export const ProductListCategoryTitleDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
`;

export const HeavyText = styled.div`
    font-weight: 700;
`;


export const CancelMarkImage = styled.img<ImageProps>`
    ${({ source }) => css`
        width: 15px;
        display: none;
        content: url( ${source});
        @media (max-width: 480px){
            display:block;
        }
    `}
  `;

export const ProductListCategoryGroupDiv = styled.div`
    ${({ theme: { colors } }) => css`
        padding: 12px 0;
        margin-bottom: 20px;
        border-bottom: 1px solid ${colors.BORDER_LINE};
    `}
`;


