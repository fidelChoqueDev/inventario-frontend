interface IRequirement {
  id: string;
  description: string;
  regex: RegExp;
}

interface IRequirementsCheckboxes {
  minLength: boolean;
  lowerCase: boolean;
  upperCase: boolean;
  number: boolean;
  specialCharacter: boolean;
}

export type { IRequirement, IRequirementsCheckboxes };
