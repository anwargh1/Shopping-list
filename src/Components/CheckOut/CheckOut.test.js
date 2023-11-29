import CheckOut from './CheckOut';
import { render, screen } from '@testing-library/react';
import { debug, jestPreviewConfigure } from 'jest-preview';

jestPreviewConfigure({ autoPreview: true });
  jest.mock("../../Store/shopContext", () => ({
    __esModule: true,
    default: () => ({
      products: [
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
          quantity: 2,
        },
      ],
      total: 25.98,
    }),
  }));
describe("CheckOut Component", () => {
  describe("Heading Component", () => {
    describe("If products length === 0", () => {
      beforeEach(() => {
        jest.clearAllMocks();
                
      });

    test('Renders "SHOPPING BAG" title', () => {
      render(<CheckOut />);
      const headingElement = screen.getByText("SHOPPING BAG");
      expect(headingElement).toBeInTheDocument();
    });
  });

    it('Should not render form inputs when there are no products', () => {
      render(<CheckOut/>);

      const nameInput = screen.queryByPlaceholderText('Your Name');
      const emailInput = screen.queryByPlaceholderText('Your Email');
      const checkoutButton = screen.queryByText('CHECKOUT');
      const orderSummary = screen.queryByText('ORDER SUMMARY');
      const total = screen.queryByText(/Total:/i);

      expect(nameInput).toBeNull();
      expect(emailInput).toBeNull();
      expect(checkoutButton).toBeNull();
      expect(orderSummary).toBeNull();
      expect(total).toBeNull();
    });

    test('Renders "You have no items in your shopping cart." message when there are no products', () => {
      render(<CheckOut/>);
      const emptyCartMessage = screen.getByText('You have no items in your shopping cart.');
      expect(emptyCartMessage).toBeInTheDocument();
    });
  });

  describe("If products length !== 0", () => {
    it("displays the product subtotal", () => {
      const { getByText, getAllByText } = render(<CheckOut/>);
      debug();
      const subTotalElement = getByText(/Total:/i);
      const subTotalValueElement = getAllByText("$25.98");

      expect(subTotalElement).toBeInTheDocument();
      expect(subTotalValueElement.length).toBeGreaterThan(0);
      expect(subTotalValueElement[0]).toBeInTheDocument();
      expect(subTotalValueElement[1]).toBeInTheDocument();
    });
  });
});


          
              
