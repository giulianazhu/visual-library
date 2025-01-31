import * as yup from 'yup'
import { requiredText } from './helpers'

export const boardSchema = yup.object().shape({
  title: yup.string().required(() => requiredText()),
  description: yup.string(),
  tags: yup.array(),
})
