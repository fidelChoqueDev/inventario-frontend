import "./InputForm.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  errorMessage: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  pattern?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = (props: Props) => {
  const { errorMessage, ...rest } = props;
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="input-container">
      <input
        data-focused={focused.toString()}
        onFocus={handleFocus}
        className="c-input"
        {...rest}
      />
      <ErrorMessage>{errorMessage ?? <>&nbsp;</>}</ErrorMessage>
    </div>
  );
};

export default InputForm;
