type TicketType = {
  name: string;
  description: string;
};

type Band = {
  name: string;
  ticketTypes: TicketType[];
};

type BandFormProps = {
  band: Band;
};

function BandForm({ band }: BandFormProps) {
  return (
    <div>
      <h1>{band.name}</h1>
      {band.ticketTypes.map((ticket) => (
        <p>
          {ticket.name} - {ticket.description}
        </p>
      ))}
    </div>
  );
}

export default BandForm;
