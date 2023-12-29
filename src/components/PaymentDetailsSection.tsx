const PaymentDetailsSection = () => {
  return (
    <section>
      <h2>Payment Details</h2>
      <label>
        Credit Card Number
        <input
          type="tel"
          name="creditCardNumber"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          autoComplete="cc-number"
          maxLength={19}
          placeholder="xxxx xxxx xxxx xxxx"
          required
        />
      </label>
      <label>
        Expiration Date
        <input type="date" name="expirationDate" required />
      </label>
      <label>
        CVV
        <input
          name="cvv"
          type="password"
          inputMode="numeric"
          pattern="[0-9]{3}"
          autoComplete="off"
          maxLength={3}
          placeholder="123"
          required
        />
      </label>
    </section>
  );
};

export default PaymentDetailsSection;
