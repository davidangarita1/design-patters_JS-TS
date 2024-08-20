import { Strategy } from "./IStrategy";

export class SaleContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  calculate(amount: number) {
    return this.strategy.calculate(amount);
  }
}
