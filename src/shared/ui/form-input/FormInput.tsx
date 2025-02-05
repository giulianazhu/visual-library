import { Control, FieldPath, FieldPathValue, FieldValues, RegisterOptions, useController } from 'react-hook-form'
import FormError from '../form-error'
import { Input } from 'antd'
import style from './styles.module.scss'
import classNames from 'classnames'

export type FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
  shouldUnregister?: boolean
  defaultValue?: FieldPathValue<TFieldValues, TName>
  control?: Control<TFieldValues>
  disabled?: boolean
  placeholder?: string
  type?: string
}

function FormInput<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  name,
  control,
  disabled = false,
  placeholder = '',
  type = 'text',
}: FormInputProps<TFieldValues, TName>) {
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
    defaultValue: '' as FieldPathValue<TFieldValues, TName>,
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      field.onChange(e.target.files)
    }
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value)
    field.onChange(isNaN(parsedValue) || !parsedValue ? 0 : parsedValue)
  }

  return (
    <>
      {type === 'text' && (
        <Input
          onChange={field.onChange}
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          value={field.value}
          ref={field.ref}
        />
      )}
      {type === 'number' && (
        <Input
          onChange={handleNumberChange}
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          value={field.value ? field.value + '' : '0'}
          ref={field.ref}
        />
      )}
      {type === 'password' && (
        <Input.Password
          onChange={field.onChange}
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          value={field.value}
          ref={field.ref}
        />
      )}
      {type === 'file' && (
        <input
          className={classNames(style.input, 'input')}
          type="file"
          onChange={handleFileChange}
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          ref={field.ref}
        />
      )}
      {errors[name]?.message && <FormError>{errors[name].message.toString()}</FormError>}
    </>
  )
}

export default FormInput
