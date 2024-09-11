import { Observer, Subject } from "./example";

const ObserverPattern = () => {
  const subject = new Subject<number>();
  const observer1 = new Observer<number>((n) => console.log(`|Observer|:`, n));
  subject.subscribe(observer1);
  subject.notify(1.2)
};

export default ObserverPattern;
