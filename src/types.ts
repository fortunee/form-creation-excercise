export type TicketType = {
  name: string;
  description: string;
  type: string;
  cost: number;
};

export type Band = {
  id: string;
  name: string;
  description_blurb: string;
  date: number;
  location: string;
  imgUrl: string;
  ticketTypes: TicketType[];
};

export type Ticket = {
  type: string;
  quantity: number;
};

export type Transaction = {
  total: number;
  tickets: Ticket[];
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  creditCardNumber: number;
  expirationDate: string;
  cvv: number;
};