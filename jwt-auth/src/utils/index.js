export const userRegistrationFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter Your User Name",
    type: "text",
    componentType: "input",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter Your Email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter Your Password",
    type: "password",
    componentType: "input",
  },
];

export const userLoginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter Your Email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter Your Password",
    type: "password",
    componentType: "input",
  },
];

export const initializeSignUpFormData = {
  userName: "",
  email: "",
  password: "",
};

export const initializeSignInFormData = { email: "", password: "" };
