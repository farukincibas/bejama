import { HeavySpan, LightFiftySpan, LightTextDiv, ProductListFilterDiv, ProductListHeadDiv, ProductListMobileSortDiv, ProductListSortDiv, ProductListTypeDiv, SelectPrice, SettingsImage, SortArrowImage } from './index.styles';
import Sort from '../../icons/sort.svg';
import CarretDown from '../../icons/carret-down.svg';
import SettingsIcon from '../../icons/setting-lines.svg';
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

                    {/* price */}
                    <SelectPrice source={CarretDown}>
                        <option value="">Price</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </SelectPrice>

                    {/* mobile tap filter */}
                    <ProductListMobileSortDiv>
                        <SettingsImage source={SettingsIcon}></SettingsImage>
                    </ProductListMobileSortDiv>
                    

                </ProductListFilterDiv>
            </ProductListHeadDiv>
        </>
    );
};

export default ProductListArea;