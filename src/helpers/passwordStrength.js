export const getpasswordStrength = password => {
  const passwordTracker = {
    characters: password.match(/[A-Za-z]/g),
    number: password.match(/[0-9]/g),
    specialChars: password.match(/[#?!@$%^&*-]/g),
    shortPassword: password.match(/.{8,}/g),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    value => value,
  ).length;

  return passwordStrength;
};
