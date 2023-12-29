import { type TicketType } from '../types';
import { formatPrice } from '../util';

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
    <section>
      <h2>Ticket Selection</h2>
      <ul>
        {ticketTypes.map((ticketType) => (
          <li key={ticketType.name}>
            <div>
              {ticketType.name}
              {ticketType.description} - {formatPrice(ticketType.cost)}
            </div>
            <label>
              <input
                type="number"
                min={0}
                value={ticketQuantities[ticketType.type]}
                onChange={handleOnChange(ticketType.type)}
              />
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TicketTypeSection;
