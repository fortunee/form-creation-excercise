import { useState } from 'react';

import BandInfoSection from './components/BandInfoSection';
import TicketTypeSection from './components/TicketTypeSection';
import PaymentDetailsSection from './components/PaymentDetailsSection';
import UserInfoSection from './components/UserInfoSection';
import Form from './components/Form';
import { formatDate, formatPrice } from './util';
import { type Transaction, type Band, Ticket } from './types';

type BandFormProps = {
  band: Band;
};

function BandForm({ band }: BandFormProps) {
  const { ticketTypes, name, date, location } = band;

  const [ticketQuantities, setTicketQuantities] = useState(
    ticketTypes.reduce((acc, ticket) => {
      acc[ticket.type] = 0;
      return acc;
    }, {} as { [key: string]: number })
  );

  const handleTicketQuantityChange = (ticketType: string, quantity: number) => {
    setTicketQuantities((prevQuantities) => ({
      ...prevQuantities,
      [ticketType]: quantity,
    }));
  };

  const calculateTotal = () => {
    return ticketTypes.reduce((total, ticket) => {
      const quantity = ticketQuantities[ticket.type];
      return total + quantity * ticket.cost;
    }, 0);
  };

  const validateTicketQuantites = (tickets: Ticket[]) => {
    return tickets.some((ticket) => ticket.quantity > 0);
  }

  const submitTransaction = (transaction: Partial<Transaction>) => {
    transaction.total = calculateTotal();
    transaction.tickets = ticketTypes.map((ticket) => ({
      ...ticket,
      quantity: ticketQuantities[ticket.type],
    }));

    const hasValidTicketQuantities = validateTicketQuantites(transaction.tickets);

    if (!hasValidTicketQuantities) {
      // TODO: show error message with Bootstrap alert
      alert('Please select at least one ticket type.');
      return;
    }

    // TODO: send transaction to some payment API maybe Stripe
    console.log(transaction);
  };

  return (
    <div>
      <header>
        <h1>{name}</h1>
        <p>{formatDate(date)}</p>
        <p>{location}</p>
      </header>
      <div>
        <BandInfoSection {...band} />

        <Form onSubmitTransaction={submitTransaction}>
          <TicketTypeSection
            ticketTypes={ticketTypes}
            ticketQuantities={ticketQuantities}
            onQuantityChange={handleTicketQuantityChange}
          />

          <section>
            <h2>Total Amount</h2>
            <p>{formatPrice(calculateTotal())}</p>
          </section>

          <UserInfoSection />

          <PaymentDetailsSection />

          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
}

export default BandForm;
