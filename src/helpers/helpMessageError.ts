import { IErrorMessages } from "../types/ErrorMessage";

export function helpMessageError(
  passwordValue: string,
  passwordConfirmation: string,
  inputValidity: boolean,
  setErrorMessages: React.Dispatch<React.SetStateAction<IErrorMessages>>,
) {
  const errorMessages: IErrorMessages = {
    passwordValue: null,
    passwordConfirmation: null,
  };
  if (passwordValue === "")
    errorMessages.passwordValue = "Este campo es requerido";
  else if (!inputValidity) errorMessages.passwordValue = "Contraseña no válida";
  else if (passwordValue !== passwordConfirmation)
    errorMessages.passwordValue = "Contraseñas no coinciden";

  if (passwordConfirmation === "")
    errorMessages.passwordConfirmation = "Este campo es requerido";
  else if (passwordValue !== passwordConfirmation)
    errorMessages.passwordConfirmation = "Contraseñas no coinciden";
  else if (!inputValidity)
    errorMessages.passwordConfirmation = "Contraseña no válida";

  setErrorMessages(errorMessages);
}
