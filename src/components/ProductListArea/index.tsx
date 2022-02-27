import { CancelMarkImage, HeavySpan, HeavyText, LightFiftySpan, LightTextDiv, ProductItemsList, ProductListCategory, ProductListCategoryGroupDiv, ProductListCategoryTitleDiv, ProductListFilterDiv, ProductListHeadDiv, ProductListMobileSortDiv, ProductListSection, ProductListSortDiv, ProductListTypeDiv, SelectSort, SettingsImage, SortArrowImage } from './index.styles';
import Sort from '../../icons/sort.svg';
import CarretDown from '../../icons/carret-down.svg';
import SettingsIcon from '../../icons/setting-lines.svg';
import CancelIcon from '../../icons/close.svg';
import { useEffect, useState } from 'react';
import '../../styles/Form.css';
import ProductItemsArea from '../ProductItemArea';
import ReactPaginate from 'react-paginate'


const ProductListArea = ({ products, setProducts, productsCurrent }: any) => {
    const [showCategory, setShowCategory] = useState(true);
    const [pageNum, setPageNum] = useState(0);
    const [hidePrev, setHidePrev] = useState("hidebx");
    const [hideNext, setHideNext] = useState("");
    const productsPerPage = 6
    const pagesVisited = pageNum * productsPerPage;
    const pageCounter = Math.ceil(products.length / productsPerPage);
    const [filterCategoryList, setFilterCategoryList] = useState<string[]>([]);



    const changePage = ({ selected }: any) => {
        setPageNum(selected)
        if (selected > 0) setHidePrev("")
        if (selected === 0) setHidePrev("hidebx")
        if (selected >= pageCounter - 1) setHideNext("hidebx")
        if (selected < pageCounter - 1) setHideNext("")
    }

    const sortByPrice = () => {
        const sortedPriceMinToMax = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedPriceMinToMax);
    }


    const sortByAscending = () => {
        const ascending = [...products].sort((a: { name: string; }, b: { name: string; }) => a?.name.localeCompare(b?.name));
        setProducts(ascending);
    }

    const sortByDescending = () => {
        const descending = [...products].sort((a: { name: string; }, b: { name: string; }) => b?.name.localeCompare(a?.name));
        setProducts(descending);
    }


    const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        const filterName = event.target.value;

        if (filterName === 'Ascending') {
            sortByAscending();
        }
        else if (filterName === 'Descending') {
            sortByDescending();
        }
        else if (filterName === 'Price') {
            sortByPrice();
        }

    }


    const handleCheckboxChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkedName = e.target.value;
        if (!filterCategoryList.includes(checkedName)) {
            setFilterCategoryList(arr => [...arr, checkedName]);
        } else {
            setFilterCategoryList(filterCategoryList.filter(item => item !== checkedName));
        }
    }

    const handleRadioboxChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkedPrice = e.target.value;
        console.log(productsCurrent);
        if (checkedPrice === 'lower-than-twenty') {
            setProducts(productsCurrent.filter((product: any) => product.price < 20));
        }
        else if (checkedPrice === 'twenty-between-hundred') {
            setProducts(productsCurrent.filter((product: any) => product.price >= 20 && product.price <= 100));
        }
        else if (checkedPrice === 'hundred-between-twoHundred') {
            setProducts(productsCurrent.filter((product: any) => product.price >= 100 && product.price <= 200));
        }
        else if (checkedPrice === 'more-than-twoHundred') {
            setProducts(productsCurrent.filter((product: any) => product.price > 200));
        }
    }

    const buildFilter = (filter: { [x: string]: any; category?: string[]; }) => {
        let query: any = {};
        for (let keys in filter) {
            if (filter[keys].constructor === Array && filter[keys].length > 0) {
                query[keys] = filter[keys];
            }
        }
        return query;
    }

    const filterData = (data: any[], query: { [x: string]: string | any[]; }) => {
        const filteredData = data.filter((item) => {
            for (let key in query) {
                if (item[key] === undefined || !query[key].includes(item[key])) {
                    return false;
                }
            }
            return true;
        });
        return filteredData;
    };



    useEffect(() => {
        let filter = {
            category: filterCategoryList,
        };
        const query = buildFilter(filter);
        const resultFilter = filterData(productsCurrent, query);
        setProducts(resultFilter);
    }, [filterCategoryList])


    useEffect(() => {
        sortByPrice();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            Math.max(window.innerWidth || document.documentElement.clientWidth) > 999 ? setShowCategory(true) : setShowCategory(false);
        }
        window.addEventListener('resize', handleResize)
    })

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
                    <SelectSort onChange={(event) => handleSort(event)} source={CarretDown}>
                        <option value="Price">Price</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </SelectSort>

                    {/* mobile tap filter */}
                    <ProductListMobileSortDiv onClick={() => setShowCategory(!showCategory)}>
                        <SettingsImage src={SettingsIcon}></SettingsImage>
                    </ProductListMobileSortDiv>

                </ProductListFilterDiv>
            </ProductListHeadDiv>

            <ProductListSection>
                {showCategory && (
                    <ProductListCategory>
                        <ProductListCategoryTitleDiv>
                            <HeavyText>Category</HeavyText>
                            <CancelMarkImage onClick={() => setShowCategory(!showCategory)} source={CancelIcon}></CancelMarkImage>
                        </ProductListCategoryTitleDiv>



                        <ProductListCategoryGroupDiv>
                            <form>
                                <div className="checkbox-holder">
                                    <input type="checkbox" value="people" onChange={(event) => { handleCheckboxChanged(event); }} name="category" className="hidebx" id="c1" />
                                    <label htmlFor='c1' className="form-checkbox">people</label>
                                </div>

                                <div className="checkbox-holder">
                                    <input type="checkbox" value="premium" onChange={(event) => handleCheckboxChanged(event)} name="category" className="hidebx" id="c2" />
                                    <label htmlFor='c2' className="form-checkbox" >premium</label>
                                </div>

                                <div className="checkbox-holder">
                                    <input type="checkbox" value="pets" onChange={(event) => handleCheckboxChanged(event)} name="category" className="hidebx" id="c3" />
                                    <label htmlFor='c3' className="form-checkbox" >pets</label>
                                </div>

                                <div className="checkbox-holder">
                                    <input type="checkbox" value="food" onChange={(event) => handleCheckboxChanged(event)} defaultChecked={false} name="category" className="hidebx" id="c4" />
                                    <label htmlFor='c4' className="form-checkbox" >food</label>
                                </div>

                                <div className="checkbox-holder">
                                    <input type="checkbox" value="landmarks" onChange={(event) => handleCheckboxChanged(event)} defaultChecked={false} name="category" className="hidebx" id="c5" />
                                    <label htmlFor='c5' className="form-checkbox" >landmarks</label>
                                </div>

                                <div className="checkbox-holder">
                                    <input type="checkbox" value="cities" onChange={(event) => handleCheckboxChanged(event)} defaultChecked={false} name="category" className="hidebx" id="c6" />
                                    <label htmlFor='c6' className="form-checkbox" >cities</label>
                                </div>

                                <div className="checkbox-holder">
                                    <input type="checkbox" value="nature" onChange={(event) => handleCheckboxChanged(event)} defaultChecked={false} name="category" className="hidebx" id="c7" />
                                    <label htmlFor='c7' className="form-checkbox" >nature</label>
                                </div>

                            </form>

                        </ProductListCategoryGroupDiv>

                        <ProductListCategoryGroupDiv>
                            <form>
                                <div className="checkbox-holder">
                                    <input type="radio" value="lower-than-twenty" onChange={(event) => handleRadioboxChanged(event)} name="category" className="hidebx" id="r1" />
                                    <label htmlFor='r1' className="form-checkbox" >Lower Than $20</label>
                                </div>
                                <div className="checkbox-holder">
                                    <input type="radio" value="twenty-between-hundred" onChange={(event) => handleRadioboxChanged(event)} name="category" className="hidebx" id="r2" />
                                    <label htmlFor='r2' className="form-checkbox" >$20-$100</label>
                                </div>
                                <div className="checkbox-holder">
                                    <input type="radio" value="hundred-between-twoHundred" onChange={(event) => handleRadioboxChanged(event)} name="category" className="hidebx" id="r3" />
                                    <label htmlFor='r3' className="form-checkbox" >$100-$200</label>
                                </div>
                                <div className="checkbox-holder">
                                    <input type="radio" value="more-than-twoHundred" onChange={(event) => handleRadioboxChanged(event)} name="category" className="hidebx" id="r4" />
                                    <label htmlFor='r4' className="form-checkbox" >More Than $200</label>
                                </div>

                            </form>
                        </ProductListCategoryGroupDiv>
                    </ProductListCategory>
                )}
                <div>
                    <ProductItemsList>
                        {products.slice(pagesVisited, (pagesVisited + productsPerPage))
                            .map(((product: any, keyId: Number) => {
                                return <ProductItemsArea key={keyId} product={product} />
                            }))}
                    </ProductItemsList>

                    <ReactPaginate
                        previousLabel={""}
                        nextLabel={""}
                        pageCount={pageCounter}
                        onPageChange={changePage}
                        containerClassName={"paginationHolder"}
                        previousLinkClassName={"prevBtn"}
                        previousClassName={`prevHolder ${hidePrev}`}
                        nextLinkClassName={"nextBtn"}
                        nextClassName={`nextHolder ${hideNext}`}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            </ProductListSection>
        </>
    );
};

export default ProductListArea;