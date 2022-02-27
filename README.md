# Project Detail

This project includes typescript and styled-component.

1. Featured Product(DONE)
One of the products should have a flag that it's a featured artwork. It should be displayed above the product list.

2. Product List(DONE)
The product list should contain 6 artworks. After hovering over the image, you should display the "add to cart" bar.
Remember that some products have the bestseller flag.

3. Add to Cart(DONE)
After clicking "Add to cart" in the cart icon in the header should appear the badge with the counter of elements in
the cart. Each 'Add to cart' action should open the cart dropdown with items. The dropdown should be also visible
after clicking the basket icon in the header. Clicking in the "Clear" button should remove items from the cart and
hide the dropdown.

4. Pagination(DONE)
Products should be paginated. On one page should be 6 items. The pagination should show the current page. Hide
the 'prev' arrow on the first page and hide the 'next' arrow on the last page

5. Sorting(DONE)
Implement 2 types of sorting: alphabetically or by price. Use basic HTML select. Clicking on arrows should change
the order to 'ascending' or 'descending'.

6. Filtering(DONE)
Products should be filterable. You can filter products by multiple categories (multiple filters) and only one price
range (single filter). Using filters should affect the pagination. Try to build filter options dynamically (don't hardcode
them).


## Available Scripts

In the project directory, you can run:

### `npm i`

you have to download npm packages first.

### `npm run start`

after downloading packages you can start project on your local via npm run start.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
