import "./InputPhoneForm.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  errorMessage: string;
  name: string;
  placeholder: string;
  required: boolean;
  pattern: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCountryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  countryCode: string;
}

const InputPhoneForm = (props: Props) => {
  const { errorMessage, onCountryChange, countryCode, ...rest } = props;
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <>
      <div className="phone-input-container">
        <div className="phone-input-prefix">
          <select
            value={countryCode}
            onChange={onCountryChange}
            className="phone-input-select"
          >
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+34">+34</option>
            <option value="+91">+91</option>
          </select>
        </div>
        <input
          data-focused={focused.toString()}
          onFocus={handleFocus}
          className="phone-input-number"
          {...rest}
        />
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
};

export default InputPhoneForm;
