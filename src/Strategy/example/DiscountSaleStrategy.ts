import { Strategy } from "./IStrategy";

export class DiscountSaleStrategy implements Strategy {
  private tax: number;
  private discount: number;

  constructor(tax: number, discount: number) {
    this.tax = tax;
    this.discount = discount;
  }

  public calculate(amount: number) {
    return amount + amount * this.tax - this.discount;
  }
}
