import { createContext } from "react";
import { CharsType } from "../../helpers/generatePassword";

export interface PasswordContext {
  showPassword: boolean;
  passwordLength: number;
  generatedPassword: string;
  charsType: CharsType;
  isSpecialChars: boolean;

  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
  setCharsType: React.Dispatch<React.SetStateAction<CharsType>>;
  setIsSpecialChars: React.Dispatch<React.SetStateAction<boolean>>;
  generateNewPassword: () => void;
}

export const passwordContext = createContext<PasswordContext>(null);
