import { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./Requirements.css";
import { helpValidatePassword } from "../../helpers/helpValidatePassword";
import {
  IRequirement,
  IRequirementsCheckboxes,
} from "../../types/Requirements";

interface Props {
  setInputValidity: React.Dispatch<React.SetStateAction<boolean>>;
  passwordValue: string;
}

const requirements: IRequirement[] = [
  {
    id: "lowerCase",
    description: "Minúscula ",
    regex: /[a-z]/,
  },
  {
    id: "minLength",
    description: "8 caracteres",
    regex: /^.{8,}$/,
  },
  {
    id: "upperCase",
    description: "Mayúscula",
    regex: /[A-Z]/,
  },
  {
    id: "number",
    description: "Número",
    regex: /[0-9]/,
  },
  {
    id: "specialCharacter",
    description: "Símbolo (!@#,$%.^&*:+)",
    regex: /[!@#$%^&*(),.?":{}|<>]/,
  },
];

export default function Requirements({
  setInputValidity,
  passwordValue,
}: Props) {
  const [requirementsCheckboxes, setRequirementsCheckboxes] =
    useState<IRequirementsCheckboxes>({
      lowerCase: false,
      upperCase: false,
      number: false,
      minLength: false,
      specialCharacter: false,
    });
  useEffect(() => {
    helpValidatePassword(
      passwordValue,
      requirements,
      setRequirementsCheckboxes,
      setInputValidity,
    );
  }, [passwordValue, setInputValidity]);
  return (
    <div>
      <p className="description">
        La contraseña debe cumplir los siguientes requisitos:
      </p>
      <div className="container-requirements">
        {requirements.map((requirement) => (
          <Checkbox
            key={requirement.id}
            name={requirement.id}
            clickable={false}
            isChecked={
              requirementsCheckboxes[
                requirement.id as keyof IRequirementsCheckboxes
              ]
            }
            content={requirement.description}
          />
        ))}
      </div>
    </div>
  );
}
