import { useId, useState } from "react";
import "./InputPasswordForm.css";
import Icon from "../Icon/Icon";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  required: boolean;
  pattern: string;
  value: string;
  errorMessage?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputPasswordForm(props: Props) {
  const { errorMessage, ...rest } = props;
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const idShowPassword = useId();

  return (
    <div className="input-container">
      <div className="container-input-password">
        <input
          className="c-input-password"
          type={showPassword ? "text" : "password"}
          data-focused={focused.toString()}
          onFocus={() => setFocused(true)}
          {...rest}
        />
        <div className="c-checkbox-show-password">
          <label htmlFor={idShowPassword}>
            <Icon type={showPassword ? "CloseEye" : "OpenEye"} />
          </label>
          <input
            id={idShowPassword}
            type="checkbox"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
      </div>
      <ErrorMessage>{errorMessage ?? <>&nbsp;</>}</ErrorMessage>
    </div>
  );
}
