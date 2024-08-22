import { IRequirement, IRequirementsCheckboxes } from "../types/Requirements";

export function helpValidatePassword(
  passwordValue: string,
  requirements: IRequirement[],
  setRequirementsCheckboxes: React.Dispatch<
    React.SetStateAction<IRequirementsCheckboxes>
  >,
  setInputValidity: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const newStateCheckboxes: IRequirementsCheckboxes =
    {} as IRequirementsCheckboxes;
  requirements.forEach((requirement) => {
    const isValid = !!passwordValue.match(requirement.regex);
    newStateCheckboxes[requirement.id as keyof IRequirementsCheckboxes] =
      isValid;
  });
  setInputValidity(
    Object.values(newStateCheckboxes).every((checkbox: boolean) => checkbox),
  );
  setRequirementsCheckboxes(() => newStateCheckboxes);
}
