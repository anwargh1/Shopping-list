import { ShopProvider } from '../../Store/shopContext';
import CheckOut from './CheckOut'
import { render, screen, waitFor } from '@testing-library/react'
import { debug ,jestPreviewConfigure } from 'jest-preview';
jestPreviewConfigure({ autoPreview: true });


describe("CheckOut Component", () => {
            describe("Heading Component", () => {
                test('Renders "SHOPPING BAG" title', () => {
                    render( < CheckOut /> );

                    const headingElement = screen.getByText("SHOPPING BAG");
                    expect(headingElement).toBeInTheDocument();
                });
            })
            describe("If products length === 0", () => {

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
                    render( < CheckOut /> );

                    const nameInput = screen.queryByPlaceholderText('Your Name');
                    const emailInput = screen.queryByPlaceholderText('Your Email');
                    const checkoutButton = screen.queryByText('CHECKOUT');
                    const checkoutButtonByRole = screen.queryByRole('button')
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
                    render( < CheckOut /> );
                    const emptyCartMessage = screen.getByText('You have no items in your shopping cart.');
                    expect(emptyCartMessage).toBeInTheDocument();
                });

            })

            describe("If products length !== 0", () => {
               
                
                 beforeEach(()=>{
                    const mockProducts = [
                        {
                          id: 99,
                          title: "Women's Leather Belt",
                          price: 12.99,
                          description: "Classic leather belt with a timeless design.",
                          category: "Accessories",
                          image: "../Images/Outerwear/blazers/Image14.jpg",
                          rating: {
                            rate: 4.5,
                            count: 44,
                          },
                          color: "red",
                        },
                      ];
                      const mockTotal = 12.99;
                    jest.mock("../../Store/shopContext", () => ({
                        __esModule: true,
                        default: () => ({
                          products: mockProducts,
                          totals: mockTotal,
                        }),
                      }));
                 })
                  
                  it("displays the product subtotal", () => {
                    const { getByText } = render(<CheckOut />);
                    debug()
                    const subTotalElement = getByText(/Total:/i);
                    const subTotalValueElement = getByText(/12.99/i); 

                    expect(subTotalElement).toBeInTheDocument();
                    expect(subTotalValueElement).toBeInTheDocument();
                  });
                  
                
              });
              

  
});