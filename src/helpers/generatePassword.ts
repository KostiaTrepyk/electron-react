export type CharsType = "alphabetic" | "alphanumeric" | "numeric";

export type PasswordOptions = {
  length: number;
  charsType: CharsType;
  specialChars?: boolean;
};

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const special = "!@#$%^&*()-_=+";

export function generatePassword(options: PasswordOptions): string {
  let charset = "";

  /* Chars type */
  if (options.charsType === "alphabetic") charset = letters;
  else if (options.charsType === "alphanumeric") charset = letters + nums;
  else if (options.charsType === "numeric") charset = nums;

  /* Special chars */
  if (options.specialChars) charset += special;

  /* Generation */
  let password = "";
  for (var i = 0, n = charset.length; i < options.length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  return password;
}
