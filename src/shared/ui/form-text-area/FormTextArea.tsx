import { Control, FieldPath, FieldPathValue, FieldValues, RegisterOptions, useController } from 'react-hook-form'
import FormError from '../form-error'
import TextArea from 'antd/es/input/TextArea'
import style from './styles.module.scss'

export type FormTextAreaProps<
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
  rows?: number
}

function FormTextArea<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  name,
  control,
  disabled = false,
  placeholder = '',
  rows = 2,
}: FormTextAreaProps<TFieldValues, TName>) {
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
    defaultValue: '' as FieldPathValue<TFieldValues, TName>,
  })

  return (
    <>
      <TextArea
        className={style['form-text-area']}
        onChange={field.onChange}
        id={name}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        value={field.value}
      />
      {errors[name]?.message && <FormError>{errors[name].message.toString()}</FormError>}
    </>
  )
}

export default FormTextArea
