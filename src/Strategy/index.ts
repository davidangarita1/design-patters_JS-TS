import {
  SaleContext,
  RegularSaleStrategy,
  DiscountSaleStrategy,
  ForeignSaleStrategy,
} from "./example";

const regularSale = new RegularSaleStrategy(0.16);
const discountSale = new DiscountSaleStrategy(0.16, 3);
const foreignSale = new ForeignSaleStrategy();

const StrategyPattern = () => {
  const sale = new SaleContext(regularSale);
  const regular = sale.calculate(10);

  sale.setStrategy(discountSale);
  const discount = sale.calculate(10);

  sale.setStrategy(foreignSale);
  const foreign = sale.calculate(10);
  console.log("|Strategy|:", { regular, discount, foreign });
};

export default StrategyPattern;
