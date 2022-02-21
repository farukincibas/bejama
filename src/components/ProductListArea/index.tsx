import { CancelMarkImage, HeavySpan, HeavyText, LightFiftySpan, LightTextDiv, MarginBottomCheckbox, ProductItemsList, ProductListCategory, ProductListCategoryGroupDiv, ProductListCategoryTitleDiv, ProductListFilterDiv, ProductListHeadDiv, ProductListMobileSortDiv, ProductListSection, ProductListSortDiv, ProductListTypeDiv, SelectPrice, SettingsImage, SortArrowImage } from './index.styles';
import Sort from '../../icons/sort.svg';
import CarretDown from '../../icons/carret-down.svg';
import SettingsIcon from '../../icons/setting-lines.svg';
import CancelIcon from '../../icons/close.svg';
import { ChangeEvent, useState } from 'react';
import '../../styles/Form.css';
import ProductItemsArea from '../ProductItemArea';
const ProductListArea = () => {
    const [checkedPeople, setCheckedPeople] = useState(false);
    const [checkedPremium, setCheckedPremium] = useState(false);
    const [checkedPets, setCheckedPets] = useState(false);

    const handlePeopleCheckboxChange = (checkedName: string) => {
        console.log(checkedName);
        setCheckedPeople(!checkedPeople);
    }
    const handlePremiumCheckboxChange = (checkedName: string) => {
        console.log(checkedName);
        setCheckedPremium(!checkedPremium);
    }
    const handlePetsCheckboxChange = (checkedName: string) => {
        console.log(checkedName);
        setCheckedPets(!checkedPets);
    }

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
                        <SortArrowImage src={Sort}></SortArrowImage>
                        <LightTextDiv>Sort By</LightTextDiv>
                    </ProductListSortDiv>

                    {/* price */}
                    <SelectPrice source={CarretDown}>
                        <option value="">Price</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </SelectPrice>

                    {/* mobile tap filter */}
                    <ProductListMobileSortDiv>
                        <SettingsImage src={SettingsIcon}></SettingsImage>
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
                        <form>
                            <div className="checkbox-holder">
                                <input type="checkbox" checked={checkedPeople} onChange={() => { handlePeopleCheckboxChange("people"); }} name="category" className="hidebx" id="c1" />
                                <label htmlFor='c1' className="form-checkbox">people</label>
                            </div>

                            <div className="checkbox-holder">
                                <input type="checkbox" checked={checkedPremium} onChange={() => { handlePremiumCheckboxChange("premimum"); }} name="category" className="hidebx" id="c2" />
                                <label htmlFor='c2' className="form-checkbox" >premium</label>
                            </div>

                            <div className="checkbox-holder">
                                <input type="checkbox" checked={checkedPets} onChange={() => { handlePetsCheckboxChange("pets"); }} name="category" className="hidebx" id="c3" />
                                <label htmlFor='c3' className="form-checkbox" >pets</label>
                            </div>

                            <div className="checkbox-holder">
                                <input type="checkbox" defaultChecked={false} name="category" className="hidebx" id="c4" />
                                <label htmlFor='c4' className="form-checkbox" >food</label>
                            </div>

                            <div className="checkbox-holder">
                                <input type="checkbox" defaultChecked={false} name="category" className="hidebx" id="c5" />
                                <label htmlFor='c5' className="form-checkbox" >landmarks</label>
                            </div>

                            <div className="checkbox-holder">
                                <input type="checkbox" defaultChecked={false} name="category" className="hidebx" id="c6" />
                                <label htmlFor='c6' className="form-checkbox" >cities</label>
                            </div>

                            <div className="checkbox-holder">
                                <input type="checkbox" defaultChecked={false} name="category" className="hidebx" id="c7" />
                                <label htmlFor='c7' className="form-checkbox" >nature</label>
                            </div>

                        </form>

                    </ProductListCategoryGroupDiv>

                    <ProductListCategoryGroupDiv>
                        <form>
                            <div className="checkbox-holder">
                                <input type="radio" defaultChecked={false} name="category" className="hidebx" id="r1" />
                                <label htmlFor='r1' className="form-checkbox" >Lower Than $20</label>
                            </div>
                            <div className="checkbox-holder">
                                <input type="radio" defaultChecked={false} name="category" className="hidebx" id="r2" />
                                <label htmlFor='r2' className="form-checkbox" >$20-$100</label>
                            </div>
                            <div className="checkbox-holder">
                                <input type="radio" defaultChecked={false} name="category" className="hidebx" id="r3" />
                                <label htmlFor='r3' className="form-checkbox" >$100-$200</label>
                            </div>
                            <div className="checkbox-holder">
                                <input type="radio" defaultChecked={false} name="category" className="hidebx" id="r4" />
                                <label htmlFor='r4' className="form-checkbox" >More Than $200</label>
                            </div>

                        </form>
                    </ProductListCategoryGroupDiv>
                </ProductListCategory>

                <ProductItemsList>
                    <ProductItemsArea></ProductItemsArea>
                </ProductItemsList>

            </ProductListSection>
        </>
    );
};

export default ProductListArea;