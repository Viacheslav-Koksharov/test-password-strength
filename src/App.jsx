import { useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

const App = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [password, setPassword] = useState('');

  const passwordTracker = {
    characters: password.match(/[A-Za-z]/g),
    number: password.match(/[0-9]/g),
    specialChars: password.match(/[#?!@$%^&*-]/g),
    eightCharsOrGreater: password.match(/.{8,}/g),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    value => value,
  ).length;

  let colorR;
  let colorY;
  let colorG;

  if (password.trim().length > 0 && password.trim().length < 8) {
    colorR = 'red';
    colorY = 'red';
    colorG = 'red';
  } else if (password.trim().length > 7 && passwordStrength === 2) {
    colorR = 'red';
    colorY = 'grey';
    colorG = 'grey';
  } else if (password.trim().length >= 8 && passwordStrength === 3) {
    colorR = 'yellow';
    colorY = 'yellow';
  } else if (password.trim().length >= 8 && passwordStrength === 4) {
    colorR = 'green';
    colorY = 'green';
    colorG = 'green';
  }

  const togglePassword = e => {
    e.preventDefault();
    passwordType === 'password'
      ? setPasswordType('text')
      : setPasswordType('password');
  };

  return (
    <div className="form-container">
      <h1>Password Strength Meter</h1>
      <form>
        <input
          onChange={e => setPassword(e.target.value)}
          type={passwordType}
          placeholder="Enter your password..."
          value={password}
          name="password"
        />
        <button className="shown-password" onClick={togglePassword}>
          {passwordType === 'password' ? (
            <BsEye className="password-icon" />
          ) : (
            <BsEyeSlash className="password-icon" />
          )}
        </button>
        <div className="container">
          <div
            className="container-item"
            style={{ backgroundColor: colorR }}
          ></div>
          <div
            className="container-item"
            style={{ backgroundColor: colorY }}
          ></div>
          <div
            className="container-item"
            style={{ backgroundColor: colorG }}
          ></div>
        </div>
      </form>
    </div>
  );
};

export default App;
