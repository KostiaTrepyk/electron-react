import { createContext } from "react";
import { CharsType } from "../../helpers/generatePassword";

export interface PasswordContext {
  showPassword: boolean;
  passwordLength: number;
  generatedPassword: string;
  charsType: CharsType;
  isSpecialChars: boolean;

  changeShowPassword: (newVal?: boolean) => void;
  changePasswordLength: (newVal: number) => void;
  changeCharsType: (newVal: CharsType) => void;
  changeIsSpecialChars: (newVal?: boolean) => void;
  generateNewPassword: () => void;
}

export const passwordContext = createContext<PasswordContext>(null);
