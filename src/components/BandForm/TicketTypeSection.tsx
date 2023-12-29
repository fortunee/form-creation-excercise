import Input from '../ui/Input';
import { type TicketType } from '../../types';
import { formatPrice } from '../../util';
import ticketStyles from './BandForm.module.css';

type TicketTypeSectionProps = {
  ticketTypes: TicketType[];
  ticketQuantities: { [key: string]: number };
  onQuantityChange: (ticketType: string, quantity: number) => void;
};
const TicketTypeSection = (props: TicketTypeSectionProps) => {
  const { ticketTypes, ticketQuantities, onQuantityChange } = props;

  const handleOnChange =
    (tickeType: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.max(0, parseInt(event.target.value));
      if (isNaN(value)) return;

      onQuantityChange(tickeType, value);
    };

  return (
    <section className={ticketStyles.ticket__section}>
      <h2>Select Tickets</h2>
      <ul>
        {ticketTypes.map((ticketType) => (
          <li key={ticketType.name}>
            <div>
              <h5>{ticketType.name}</h5>
              <p>{ticketType.description}</p>
              <h5>{formatPrice(ticketType.cost)}</h5>
            </div>
            <Input
              labelText="Quantity"
              type="number"
              min={0}
              value={ticketQuantities[ticketType.type]}
              onChange={handleOnChange(ticketType.type)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TicketTypeSection;
