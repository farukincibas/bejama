import { CancelMarkImage, HeavySpan, HeavyText, LightFiftySpan, LightTextDiv, MarginBottomCheckbox, ProductListCategory, ProductListCategoryGroupDiv, ProductListCategoryTitleDiv, ProductListFilterDiv, ProductListHeadDiv, ProductListMobileSortDiv, ProductListSection, ProductListSortDiv, ProductListTypeDiv, SelectPrice, SettingsImage, SortArrowImage } from './index.styles';
import Sort from '../../icons/sort.svg';
import CarretDown from '../../icons/carret-down.svg';
import SettingsIcon from '../../icons/setting-lines.svg';
import CancelIcon from '../../icons/close.svg';
//import CheckBoxEmpty from '../../icons/checkbox-empty.svg';
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

            <ProductListSection>
                <ProductListCategory>
                    <ProductListCategoryTitleDiv>
                        <HeavyText>Category</HeavyText>
                        <CancelMarkImage source={CancelIcon}></CancelMarkImage>
                    </ProductListCategoryTitleDiv>

                    <ProductListCategoryGroupDiv>
                        <MarginBottomCheckbox>

                        </MarginBottomCheckbox>
                    </ProductListCategoryGroupDiv>

                </ProductListCategory>
            </ProductListSection>
        </>
    );
};

export default ProductListArea;