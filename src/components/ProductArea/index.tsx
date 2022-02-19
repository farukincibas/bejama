import { ProductDiv, ProductTitleDiv, ProductAddToCartButton, ProductImageBox, ProductImage, ProductTagDiv, ProductSummaryDiv, ProductDescriptionDiv, AppTitleDiv, ProductCategoryDiv, ParagraphMaxWidthFiveHundred, ProductRecommendDiv, ProductRecommendPicsDiv, RecommendPicsBoxDiv, RecommendPicsImg, ClearBothDiv, Paragraph, ProductMainDiv, ProductAddToCartButtonMobile, MarginBottom } from './index.styles';


const ProductArea = () => {
    return (
        <>
            <ProductMainDiv>
                <ProductDiv>
                    <ProductTitleDiv>Samurai King Restling</ProductTitleDiv>
                    <ProductAddToCartButton>ADD TO CART</ProductAddToCartButton>
                </ProductDiv>

                <ProductImageBox>
                    <ProductImage cartImage={"https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"} />
                    <ProductTagDiv>Photo of The Day</ProductTagDiv>
                </ProductImageBox>
                <ProductAddToCartButtonMobile>ADD TO CART</ProductAddToCartButtonMobile>
                <ProductSummaryDiv>
                    <ProductDescriptionDiv>
                        <AppTitleDiv>About The Samurai King Restling</AppTitleDiv>
                        <ProductCategoryDiv>Pets</ProductCategoryDiv>
                        <ParagraphMaxWidthFiveHundred>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely</ParagraphMaxWidthFiveHundred>
                    </ProductDescriptionDiv>

                    <ProductRecommendDiv>
                        <AppTitleDiv>People also buy</AppTitleDiv>
                        <ProductRecommendPicsDiv>
                            <RecommendPicsBoxDiv>
                                <RecommendPicsImg cartImage={"https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"} />
                            </RecommendPicsBoxDiv>

                            <RecommendPicsBoxDiv>
                                <RecommendPicsImg cartImage={"https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} />
                            </RecommendPicsBoxDiv>

                            <RecommendPicsBoxDiv>
                                <RecommendPicsImg cartImage={"https://images.pexels.com/photos/33152/european-rabbits-bunnies-grass-wildlife.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
                            </RecommendPicsBoxDiv>

                        </ProductRecommendPicsDiv>
                        <ClearBothDiv />
                        <MarginBottom />
                        <AppTitleDiv>Details</AppTitleDiv>
                        <Paragraph>Size: 2250 x 1500 pixel</Paragraph>
                        <Paragraph>Size: 15 MB</Paragraph>
                    </ProductRecommendDiv>
                </ProductSummaryDiv>
            </ProductMainDiv>
        </>
    );
};

export default ProductArea;