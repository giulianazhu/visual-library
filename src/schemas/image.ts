import * as yup from 'yup'
import { requiredText } from './helpers'

export const imageSchema = yup.object().shape({
  boardId: yup
    .array()
    .of(yup.number().required(() => requiredText()))
    .required(() => requiredText()),
  title: yup.string().required(() => requiredText()),
  description: yup.string(),
  tags: yup.array().of(yup.number().required(() => requiredText())),
  notes: yup.string(),
})
