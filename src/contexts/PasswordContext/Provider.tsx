import React from "react";
import { type PasswordContext, passwordContext } from "./context";
import { generatePassword, type CharsType } from "../../helpers/generatePassword";

const PasswordContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [passwordLength, setPasswordLength] = React.useState<number>(12);
  const [generatedPassword, setGeneratedPassword] = React.useState<string>("");
  const [charsType, setCharsType] = React.useState<CharsType>("alphanumeric");
  const [isSpecialChars, setIsSpecialChars] = React.useState<boolean>(true);

  const changeShowPassword = React.useCallback((newVal?: boolean) => {
    if (newVal) return setShowPassword(newVal);
    setShowPassword((prev) => !prev);
  }, []);

  const changePasswordLength = React.useCallback((newVal: number) => {
    setPasswordLength(newVal);
  }, []);

  const changeCharsType = React.useCallback((newVal: CharsType) => {
    return setCharsType(newVal);
  }, []);

  const changeIsSpecialChars = React.useCallback((newVal?: boolean) => {
    if (newVal) return setIsSpecialChars(newVal);
    setIsSpecialChars((prev) => !prev);
  }, []);

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

    changeShowPassword,
    changePasswordLength,
    changeCharsType,
    changeIsSpecialChars,
    generateNewPassword,
  };

  return (
    <passwordContext.Provider value={contextValue}>
      {children}
    </passwordContext.Provider>
  );
};

export default PasswordContextProvider;
