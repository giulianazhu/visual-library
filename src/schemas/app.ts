import * as yup from 'yup'
import { requiredText } from './helpers'

export const loginSchema = yup.object().shape({
  username: yup.string().required(() => requiredText()),
  password: yup.string().required(() => requiredText()),
})
