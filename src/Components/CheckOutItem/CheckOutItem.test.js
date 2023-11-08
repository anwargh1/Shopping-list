import { render, screen, fireEvent } from '@testing-library/react'
import CheckOutItem from './CheckOutItem'
import { ShopProvider } from '../../Store/shopContext';
import * as shopContext from '../../Store/shopContext';



describe(" Component/CheckOutItem", () => {

            describe("Renders product information correctly", () => {
                    const item = {
                        "id": 99,
                        "title": "Women's Leather Belt",
                        "price": 12.99,
                        "description": "Classic leather belt with a timeless design.",
                        "category": "outerwear",
                        "image": "../Images/Outerwear/blazers/Image14.jpg",
                        "rating": {
                            "rate": 4.5,
                            "count": 44
                        },
                        "color": "red",
                        "quantity": 2,
                    }

                    beforeEach(() => {
                            render( < CheckOutItem item = { item }
                                />);
                            });

                        it("displays the product title", () => {
                            const titleElement = screen.getByText("Women's Leather Belt");
                            expect(titleElement).toBeInTheDocument();
                        });

                        it("displays the product category", () => {
                            const categoryElement = screen.getByText("outerwear");
                            expect(categoryElement).toBeInTheDocument();
                        });

                        it("displays the product color", () => {
                            const colorElement = screen.getByText("red");
                            expect(colorElement).toBeInTheDocument();
                        });

                        it("displays the product price", () => {
                            const priceElement = screen.getByText(/Price :/);
                            const priceValueElement = screen.getByText(/12.99/i);
                            expect(priceElement).toBeInTheDocument();
                            expect(priceValueElement).toBeInTheDocument();
                        });

                        it("displays the product quantity", () => {
                            const quantityElement = screen.getByText(/Quantity :/);
                            const quantityValueElement = screen.getByText("2");
                            expect(quantityElement).toBeInTheDocument();
                            expect(quantityValueElement).toBeInTheDocument();
                        });

                        it("displays the product subtotal", () => {
                            const subTotalElement = screen.getByText(/SubTotal :/);
                            const subTotalValueElement = screen.getByText(/25.98/i);
                            expect(subTotalElement).toBeInTheDocument();
                            expect(subTotalValueElement).toBeInTheDocument();
                        });

                        it("displays the product image", () => {
                            const imageElement = screen.getByAltText("Women's Leather Belt Image");
                            expect(imageElement).toBeInTheDocument();
                        });


                    })

                // describe("CheckOutItem Component", () => {
                //     it('calls removeFromCart when remove button is clicked', () => {
                //       const products = {
                //         "id": 99,
                //         "title": "Women's Leather Belt",
                //         "price": 12.99,
                //         "description": "Classic leather belt with a timeless design.",
                //         "category": "outerwear",
                //         "image": "../Images/Outerwear/blazers/Image14.jpg",
                //         "rating": {
                //           "rate": 4.5,
                //           "count": 44
                //         },
                //         "color": "red",
                //         "quantity": 2,
                //       };

                //       jest.mock('../../Store/shopContext', () => ({
                //         useShop: () => ({
                //   products,
                //removeFromCart :jest.fn()
                //   total: 12.99,
                // })
                //       }));

            })