import { useTranslation } from 'react-i18next'
import { Control, FieldPath, FieldPathValue, FieldValues, RegisterOptions, useController } from 'react-hook-form'
import { Select } from 'antd'
import FormError from '../form-error'

export type FormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
  shouldUnregister?: boolean
  defaultValue?: FieldPathValue<TFieldValues, TName>
  control: Control<TFieldValues>
  disabled?: boolean
  disableFuture?: boolean
  options: { label: string; value: string | number | boolean }[] | []
  placeholder?: string
  onChange?: (value: string | number | boolean) => void
  showSearch?: boolean
  mode?: 'multiple' | 'tags' | undefined
}

function FormSelect<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  name,
  control,
  disabled = false,
  options,
  placeholder,
  onChange,
  showSearch = false,
  mode,
}: FormSelectProps<TFieldValues, TName>) {
  const { t } = useTranslation()

  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
    rules: { required: true },
  })

  return (
    <>
      <Select
        mode={mode}
        showSearch={showSearch}
        filterOption={(input, option) => (option ? option.label.toLowerCase().includes(input.toLowerCase()) : false)}
        id={name}
        onChange={(val) => {
          field.onChange(val)
          if (onChange) {
            onChange(val)
          }
        }}
        disabled={disabled}
        placeholder={placeholder ? placeholder : t('placeholder.select')}
        options={options?.length ? options : []}
        value={field.value}
      />

      {errors[name]?.message && <FormError>{errors[name].message.toString()}</FormError>}
    </>
  )
}

export default FormSelect
