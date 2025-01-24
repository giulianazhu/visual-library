import * as yup from 'yup'
import { requiredText } from './helpers'

export const practiceSchema = yup.object().shape({
  boards: yup.array().of(yup.string().required(() => requiredText())),
  tags: yup.array().of(yup.string().required(() => requiredText())),
  number: yup.number().required(() => requiredText()),
  sortBy: yup.string().required(() => requiredText()),
  timed: yup.boolean().required(() => requiredText()),
  duration: yup.number().required(() => requiredText()),
  pause: yup.number().required(() => requiredText()),
})
