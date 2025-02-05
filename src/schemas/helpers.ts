import dayjs, { Dayjs } from 'dayjs'
import i18next from 'i18next'
import * as yup from 'yup'

// validation messages

export const requiredText = () => i18next.t('warning.required')
export const invalidText = () => i18next.t('warning.invalid')

// value transformation

export const applyDefaultNull = (fields: Record<string, yup.Schema<unknown>>) => {
  return Object.fromEntries(
    Object.entries(fields).map(([k, v]) => {
      if (yup.boolean().isType(v)) {
        return [k, v ? true : false]
      } else {
        return [k, v ? v : null]
      }
    }),
  )
}

export const numberOrNull = (value: string) => {
  return value ? parseInt(value, 10) : null
}

export const dateString = (value: string | Dayjs) => {
  return value ? dayjs(value).format('YYYY-MM-DD') : null
}

// validators

export const validatePattern = (regex: RegExp) => {
  return yup.string().matches(regex, () => invalidText())
}

export const validatePhone = () => {
  return validatePattern(/^\+?\d+$/)
}

export const validateNumber = (length?: number) => {
  const pattern = length ? new RegExp(`^\\d{${length}}$`) : /^\d*$/
  return validatePattern(pattern)
}
