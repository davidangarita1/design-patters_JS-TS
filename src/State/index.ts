import { Ticket } from "./example/State";

const StatePattern = () => {
  const ticket = new Ticket(2);
  ticket.add(1)
  ticket.add(1)
  ticket.next();
  
  console.log("|State|:", ticket.getState);
};

export default StatePattern;
