export interface IFormState {
  email: string;
  password: string;
  passwordConfirm?: string;
  [key: string]: string | undefined;
}
