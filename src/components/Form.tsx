import { type ComponentPropsWithoutRef } from "react";
import { type Transaction } from "../types";

type FormProps = ComponentPropsWithoutRef<'form'> & {
  children: React.ReactNode;
  onSubmitTransaction: (transaction: Partial<Transaction>) => void;
};
const Form = ({ children, onSubmitTransaction, ...otherProps }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const transaction = Object.fromEntries(formData);

    onSubmitTransaction({
      ...transaction,
      cvv: parseInt(transaction.cvv as string, 10),
      creditCardNumber: +transaction.creditCardNumber,
    });
  };

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
};

export default Form;
