const UserInfoSection = () => {
  return (
    <section>
      <h2>User Information</h2>
      <label>
        First Name
        <input type="text" name="firstName" required />
      </label>
      <label>
        Last Name
        <input type="text" name="lastName" required />
      </label>
      <label>
        Address
        <input type="text" name="address" required />
      </label>
    </section>
  );
};

export default UserInfoSection;
