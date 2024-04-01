export const useFormRules = () => {
  return {
    requiredRule: (v: any) => !!v || 'Required',
    emailRule: (value: any) => {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || 'Enter a valid email';
    },
    passwordLengthRule: (v: string) => (!!v && v.length >= 6) || 'Password must be 6 chars or more',
    passwordRegexRule: (value: string) => {
      const pattern =
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

      return pattern.test(value) || 'Password requires a lowercase letter, an uppercase letter, and a number or symbol';
    },
    passwordTheSameRule: (password: string, repeatedPassword: string) => {
      const isSame = password === repeatedPassword;

      return (v: string) => {
        return isSame || 'Passwords should be the same';
      };
    }
  };
};