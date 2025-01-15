import * as yup from 'yup'
import { requiredText } from './helpers'

export const boardSchema = yup.object().shape({
  title: yup.string().required(() => requiredText()),
  description: yup.string().required(() => requiredText()),
  tags: yup.array().of(yup.string().required(() => requiredText())),
})
