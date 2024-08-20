import { IObserver } from "./models/IObserver";
import { ISubject } from "./models/ISubject";

export class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>) {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>) {
    this.observers = this.observers.filter(
      (obs: IObserver<T>) => obs !== observer
    );
  }

  notify(value: T) {
    this.observers.forEach((obs: IObserver<T>) => obs.refresh(value));
  }
}
