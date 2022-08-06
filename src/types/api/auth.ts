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

export interface SignUpForm {
  firstName: null|string,
  lastName: null|string,
  email: null|string,
  phone: null|string,
  password: null|string,
  passwordConfirmation: null|string,
  firstNameErrors: null|string[],
  lastNameErrors: null|string[],
  emailErrors: null|string[],
  phoneErrors: null|string[],
  passwordErrors: null|string[],
  passwordConfirmationErrors: null|string[],
}

export interface SignInForm {
  email: null|string,
  password: null|string,
  emailErrors: null|string[],
  passwordErrors: null|string[],
}
