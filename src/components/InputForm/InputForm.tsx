import { useState } from "react";
import "./InputForm.css";

interface InputFormProps extends HTMLInputElement {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  errorMessage: string;
  pattern: string;
  handleChange: () => void;
}

const InputForm = ({
  placeholder,
  name,
  type,
  errorMessage,
  pattern,
  handleChange,
}: InputFormProps) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        required
        pattern={pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() => name === "confirmPassword" && setFocused(true)}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputForm;
