import { getpasswordStrength } from '../helpers/passwordStrength';

const usePassword = (password, ...args) => {
  const Passwordstrength = getpasswordStrength(password);
  const colorArgs = [...args];
  console.log(colorArgs);
  let colors = [];

  const getColorSection = idx => {
    for (let i = 0; i < colorArgs.length - 1; i++) {
      if (password.length === 0) {
        return colorArgs[3];
      } else if (password.length > 0 && password.length < 8) {
        return colorArgs[0];
      } else if (password.length > 7 && Passwordstrength === 2 && idx < 2) {
        return colorArgs[0];
      } else if (password.length > 7 && Passwordstrength === 3 && idx < 3) {
        return colorArgs[1];
      } else if (password.length >= 8 && Passwordstrength === 4) {
        return colorArgs[2];
      } else {
        return colorArgs[3];
      }
    }
  };

  colors.push(getColorSection(1), getColorSection(2), getColorSection(3));
  return colors;
};

export default usePassword;
