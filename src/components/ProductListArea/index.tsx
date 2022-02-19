import { HeavySpan, LightFiftySpan, LightTextDiv, ProductListFilterDiv, ProductListHeadDiv, ProductListSortDiv, ProductListTypeDiv, SortArrowImage } from './index.styles';
import Sort from '../../icons/sort.svg';

const ProductListArea = () => {
    return (
        <>
            <ProductListHeadDiv>
                <ProductListTypeDiv>
                    <HeavySpan>Photography</HeavySpan>
                    <span>/</span>
                    <LightFiftySpan>Premium Photos</LightFiftySpan>
                </ProductListTypeDiv>

                <ProductListFilterDiv>
                    <ProductListSortDiv>
                        <SortArrowImage source={Sort}></SortArrowImage>
                        <LightTextDiv>Sort</LightTextDiv>
                    </ProductListSortDiv>
                    
                </ProductListFilterDiv>
            </ProductListHeadDiv>
        </>
    );
};

export default ProductListArea;