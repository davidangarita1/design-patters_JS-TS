type FnObserver<T> = (value: T) => void;

export class Observer<T> {
  private fn: FnObserver<T>;

  constructor(fn: FnObserver<T>) {
    this.fn = fn;
  }

  refresh(value: T): void {
    this.fn(value);
  }
}
