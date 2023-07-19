import { useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import usePassword from '../../hooks/usePassword';

const Form = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [password, setPassword] = useState('');
  const inputPassword = usePassword(password,'red','yellow','green',['grey']);

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
          onChange={e => setPassword(e.target.value.trim())}
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
        <ul className="container">
            {inputPassword?.map((color,i)=>(
                <li key={i}
                className="container-item"
                style={{ backgroundColor: color }}
              ></li>
            ))}
        </ul>
      </form>
    </div>
  );
};

export default Form;
