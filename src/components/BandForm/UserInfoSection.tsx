import Input from '../ui/Input';
import bandFormStyles from './BandForm.module.css';

const UserInfoSection = () => {
  return (
    <section className={bandFormStyles.userinfo__section}>
      <div>
        <Input labelText="First Name" type="text" name="firstName" required />
        <Input labelText="Last Name" type="text" name="lastName" required />
      </div>
      <Input labelText="Address" type="text" name="address" required />
    </section>
  );
};

export default UserInfoSection;
