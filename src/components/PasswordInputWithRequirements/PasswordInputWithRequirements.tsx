import { useMemo, useState } from "react";
import InputPasswordForm from "../InputPasswordForm/InputPasswordForm";
import "./PasswordInputWithRequirements.css";
import Requirements from "../Requirements/Requirements";
import { IErrorMessages } from "../../types/ErrorMessage";
import { helpMessageError } from "../../helpers/helpMessageError";

interface Props {
  passwordValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInputWithRequirements({
  passwordValue,
  onChange,
}: Props) {
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [inputValidity, setInputValidity] = useState(false);
  const [errorMessages, setErrorMessages] = useState<IErrorMessages>(
    {} as IErrorMessages,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(e.target.value);
  };

  const pattern = useMemo(() => {
    if (!inputValidity)
      return "^(?=.*[A-Z])(?=.*[a-z])(?=.*d)(?=.*[@#$%^&+=!])[^]{8,}$";
    if (passwordValue !== passwordConfirmation) return "^(?!.*).+$";
    return "^.+$";
  }, [inputValidity, passwordValue, passwordConfirmation]);

  const handleBlur = () =>
    helpMessageError(
      passwordValue,
      passwordConfirmation,
      inputValidity,
      setErrorMessages,
    );

  return (
    <div className="c-password-input-with-requirements">
      <InputPasswordForm
        name="password"
        errorMessage={errorMessages.passwordValue}
        placeholder="Contraseña"
        value={passwordValue}
        pattern={pattern}
        required={true}
        onChange={onChange}
        onBlur={handleBlur}
      />
      <InputPasswordForm
        name="passwordConfirmation"
        errorMessage={errorMessages.passwordConfirmation}
        placeholder="Repetir contraseña"
        value={passwordConfirmation}
        pattern={pattern}
        required={true}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Requirements
        passwordValue={passwordValue}
        setInputValidity={setInputValidity}
      />
    </div>
  );
}
