export interface AuthSignUpRequest {
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  password: string,
  password_confirmation: string,
}

export interface AuthSignInRequest {
  email: string,
  password: string,
}

export interface AuthSignUpResponse {
  token: string,
}

export interface AuthSignInResponse {
  token: string,
}

export interface RegisterForm {
  firstName: null|string,
  lastName: null|string,
  email: null|string,
  phone: null|string,
  password: null|string,
  passwordConfirmation: null|string,
  firstNameInvalid: boolean,
  lastNameInvalid: boolean,
  emailInvalid: boolean,
  phoneInvalid: boolean,
  passwordInvalid: boolean,
  passwordConfirmationInvalid: boolean,
}
