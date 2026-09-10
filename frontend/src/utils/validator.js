export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validateInfoForm = ({ name, college, email }) => {
  const errors = {};
  if (!name?.trim()) errors.name = "Name is required";
  if (!college?.trim()) errors.college = "College name is required";
  if (!email?.trim()) errors.email = "Email is required";
  else if (!isValidEmail(email)) errors.email = "Enter a valid email address";
  return errors;
};