import { ForwardedRef, forwardRef, useState } from "react";
import "./InputPasswordForm.css";
import Icon from "../Icon/Icon";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const InputPasswordForm = forwardRef(function InputPasswordForm(
  props: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container-input-password">
      <input
        className="c-input-password"
        type={showPassword ? "text" : "password"}
        ref={ref}
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
});

export default InputPasswordForm;
