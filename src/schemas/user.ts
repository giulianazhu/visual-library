import * as yup from 'yup'
import { requiredText } from './helpers'
import { theme } from 'antd'

export const userSchema = yup.object().shape({
  nickname: yup.string().required(() => requiredText()),
  email: yup
    .string()
    .email()
    .required(() => requiredText()),
  password: yup.string().required(() => requiredText()),
})

export const settingsSchema = yup.object().shape({
  theme: yup.string().oneOf(Object.keys(theme), () => requiredText()),
  language: yup.string().required(() => requiredText()),
})
