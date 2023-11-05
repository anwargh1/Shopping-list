import { ShopProvider } from '../../Store/shopContext';
import  CheckOut from './CheckOut'
import {render , screen } from '@testing-library/react'



describe("CheckOut Component", () => {
    describe("Heading Component" , ()=>{
        test('Renders "SHOPPING BAG" title', () => {
            render(<CheckOut />);
    
            const headingElement = screen.getByText("SHOPPING BAG");
            expect(headingElement).toBeInTheDocument();
        });
    })

    describe("If products length === 0" , ()=>{

        beforeEach(() => {
            // Mock the useShop context to provide an empty cart
            jest.mock('../../Store/shopContext', () => {
              return {
                useShop: () => ({
                  products: [],
                  total: 0,
                })
              };
            });
          });

    it('Should not render form inputs when there are no products', () => {
        render(<CheckOut />);

        const nameInput = screen.queryByPlaceholderText('Your Name');
        const emailInput = screen.queryByPlaceholderText('Your Email');
        const checkoutButton = screen.queryByText('CHECKOUT');
        const checkoutButtonByRole= screen.queryByRole('button')
        const orderSummary = screen.queryByText('ORDER SUMMARY');
        const total = screen.queryByText(/Total:/i);
    
        expect(nameInput).toBeNull();
        expect(emailInput).toBeNull();
        expect(checkoutButton).toBeNull();
        expect(orderSummary).toBeNull();
        expect(checkoutButtonByRole).toBeNull();
        expect(total).toBeNull();
      });

      test('Renders "You have no items in your shopping cart." message when there are no products', () => {
        render(<CheckOut />);
        const emptyCartMessage = screen.getByText('You have no items in your shopping cart.');
        expect(emptyCartMessage).toBeInTheDocument();
      });

    })

    

    // describe("If products length !== 0" , ()=>{
    //     jest.mock('../../Store/shopContext', () => {
    //         return {
    //           useShop:() => ({
    //             products:[
    //               {
    //                 "id": 99,
    //                 "title": "Women's Leather Belt",
    //                 "price": 12.99,
    //                 "description": "Classic leather belt with a timeless design.",
    //                 "category": "Accessories",
    //                 "image": "../Images/Outerwear/blazers/Image14.jpg",
    //                 "rating": {
    //                   "rate": 4.5,
    //                   "count": 44
    //                 },
    //                 color: "red"
    //               }
    //             ],
    //             total: 12.99,
    //           })
    //         };
    //       });
       
    //    beforeEach(()=>{
    //         render(<ShopProvider><CheckOut /></ShopProvider>);
    //    }) 

    //    it('should display a list of products in the shopping bag',async () => {
    //     const bagItemContainer = await screen.findByTestId('bag-item');
    //     expect(bagItemContainer).toBeInTheDocument();
    //     // const productItems = screen.getAllByTestId('checkout-item');
    //     // expect(productItems.length).toBe(1); // Assuming there are two products
    //   });

            //     it('Expects products.length to not be 0', () => {
            //         const productElements = screen.findByTestId('all-bag-item');
            //         expect(productElements).toBeInTheDocument();
            //     });

            //   it("Should Renders product items when products are present", () => {
            //       const productElements = screen.queryByTestId('bag-item-contanir');
            //       console.log(productElements);
            //       expect(productElements).toBeInTheDocument();
            //   });

    // })

});

