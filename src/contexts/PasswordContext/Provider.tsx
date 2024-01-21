import React from "react";
import { type PasswordContext, passwordContext } from "./context";
import {
  generatePassword,
  type CharsType,
} from "../../helpers/generatePassword";

const PasswordContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [passwordLength, setPasswordLength] = React.useState<number>(12);
  const [generatedPassword, setGeneratedPassword] = React.useState<string>("");
  const [charsType, setCharsType] = React.useState<CharsType>("alphanumeric");
  const [isSpecialChars, setIsSpecialChars] = React.useState<boolean>(true);

  const generateNewPassword = React.useCallback(() => {
    setGeneratedPassword(
      generatePassword({
        length: passwordLength,
        charsType: charsType,
        specialChars: isSpecialChars,
      })
    );
  }, [passwordLength, charsType, isSpecialChars]);

  const contextValue: PasswordContext = {
    showPassword,
    passwordLength,
    generatedPassword,
    charsType,
    isSpecialChars,

    setShowPassword,
    setPasswordLength,
    setCharsType,
    setIsSpecialChars,
    generateNewPassword,
  };

  return (
    <passwordContext.Provider value={contextValue}>
      {children}
    </passwordContext.Provider>
  );
};

export default PasswordContextProvider;
