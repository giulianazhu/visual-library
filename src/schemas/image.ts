import * as yup from 'yup'
import { requiredText } from './helpers'

export const imageSchema = yup.object().shape({
  boardId: yup.array().of(yup.string().required(() => requiredText())),
  title: yup.string().required(() => requiredText()),
  description: yup.string().required(() => requiredText()),
  tags: yup.array().of(yup.string().required(() => requiredText())),
  notes: yup.string().required(() => requiredText()),
})
