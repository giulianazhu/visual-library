import * as yup from 'yup'
import { requiredText } from './helpers'

export const practiceSchema = yup.object().shape({
  boards: yup.array().required(() => requiredText()),
  tags: yup.array().required(() => requiredText()),
  number: yup.number().required(() => requiredText()),
  sortBy: yup.string().required(() => requiredText()),
})
