import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please, type your e-mail")
    .email("Invalid e-mail"),
  password: yup.string().required("Please, type your password"),
});

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("E-mail is required").email("Invalid e-mail"),
  password: yup.string().required("Password is required"),
  confirm_password: yup
    .string()
    .required("Confirm password required")
    .oneOf([yup.ref("password")], "Password don't match"),
});

export const editAnimeSchema = yup.object().shape({
  status: yup.string(),
  episodes: yup.number(),
  rating: yup.number(),
});

export const updateSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "As senhas não são iguais!!"),
});
