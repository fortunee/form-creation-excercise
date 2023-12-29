import Input from '../ui/Input';
import bandFormStyles from './BandForm.module.css';

const PaymentDetailsSection = () => {
  return (
    <section className={bandFormStyles.payment_details__section}>
      <h4>Payment Details</h4>
      <Input
        labelText="Credit Card Number"
        type="tel"
        name="creditCardNumber"
        inputMode="numeric"
        pattern="[0-9\s]{13,19}"
        autoComplete="cc-number"
        maxLength={19}
        placeholder="xxxx xxxx xxxx xxxx"
        required
      />
      <div>
        <Input
          labelText="Expiration Date"
          type="date"
          name="expirationDate"
          pattern="\d{4}-\d{2}-\d{2}"
          required
        />
        <Input
          labelText="CVV"
          type="password"
          name="cvv"
          inputMode="numeric"
          pattern="[0-9]{3}"
          autoComplete="off"
          maxLength={3}
          placeholder="123"
          required
        />
      </div>
    </section>
  );
};

export default PaymentDetailsSection;
