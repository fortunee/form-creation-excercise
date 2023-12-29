import { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { CiCalendarDate } from 'react-icons/ci';

import BandInfoSection from './BandInfoSection';
import TicketTypeSection from './TicketTypeSection';
import PaymentDetailsSection from './PaymentDetailsSection';
import UserInfoSection from './UserInfoSection';
import Form from '../ui/Form';
import Button from './../ui/Button';
import Alert from '../ui/Alert';

import { formatDate, formatPrice } from '../../util';
import { type Transaction, type Band, Ticket } from '../../types';

import bandformStyles from './BandForm.module.css';

type BandFormProps = {
  band: Band;
};

function BandForm({ band }: BandFormProps) {
  const { ticketTypes, name, date, location } = band;
  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

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
  };

  const submitTransaction = (transaction: Partial<Transaction>) => {
    transaction.total = calculateTotal();
    transaction.tickets = ticketTypes.map((ticket) => ({
      ...ticket,
      quantity: ticketQuantities[ticket.type],
    }));

    const hasValidTicketQuantities = validateTicketQuantites(
      transaction.tickets
    );

    if (!hasValidTicketQuantities) {
      setErrorMessage('Please select at least one ticket type');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('You have successfully purchased some tickets!');

    // TODO: send transaction to some payment API maybe Stripe
    console.log(transaction);
  };

  return (
    <div className={bandformStyles.wrapper}>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <header className={bandformStyles.header}>
        <h1>{name}</h1>
        <p>
          <CiCalendarDate size={30} />
          {formatDate(date)}
        </p>
        <p>
          <IoLocationOutline size={30} />
          {location}
        </p>
      </header>
      <div className={bandformStyles.form__section}>
        <BandInfoSection {...band} />

        <Form onSubmitTransaction={submitTransaction}>
          <TicketTypeSection
            ticketTypes={ticketTypes}
            ticketQuantities={ticketQuantities}
            onQuantityChange={handleTicketQuantityChange}
          />
          <div className={bandformStyles.total_section}>
            <p>Total</p>
            <p>{formatPrice(calculateTotal())}</p>
          </div>
          <UserInfoSection />
          <PaymentDetailsSection />
          <Button type="submit">Get Tickets</Button>
        </Form>
      </div>
    </div>
  );
}

export default BandForm;
