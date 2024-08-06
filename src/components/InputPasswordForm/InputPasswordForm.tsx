import { useState } from "react";
import "./InputPasswordForm.css";
import Icon from "../Icon/Icon";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export default function InputPasswordForm(props: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container-input-password">
      <input
        minLength={15}
        className="c-input-password"
        type={showPassword ? "text" : "password"}
        {...props}
      />
      <div className="c-checkbox-show-password">
        <label htmlFor="showPassword">
          <Icon type={showPassword ? "CloseEye" : "OpenEye"} />
        </label>
        <input
          id="showPassword"
          type="checkbox"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
    </div>
  );
}
