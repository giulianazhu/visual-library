import * as yup from 'yup'
import { requiredText } from './helpers'

export const imageSchema = yup.object().shape({
  boardId: yup
    .array()
    .of(yup.number().required(() => requiredText()))
    .min(1, () => requiredText())
    .required(() => requiredText()),
  title: yup.string(),
  description: yup.string(),
  tags: yup.array().of(yup.number().required(() => requiredText())),
  note: yup.string(),
})
