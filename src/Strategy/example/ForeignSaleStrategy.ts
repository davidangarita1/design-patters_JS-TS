import { Strategy } from "./IStrategy";

export class ForeignSaleStrategy implements Strategy {
  calculate(amount: number) {
    return amount * this.getDollarPrice();
  }

  getDollarPrice() {
    return 20;
  }
}
