import { useTranslation } from 'react-i18next'
import { Control, FieldPath, FieldPathValue, FieldValues, RegisterOptions, useController } from 'react-hook-form'
import { Switch } from 'antd'
import FormError from '../form-error'
import style from './styles.module.scss'
import classNames from 'classnames'

export type FormSwitchProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
  shouldUnregister?: boolean
  defaultValue?: FieldPathValue<TFieldValues, TName>
  control?: Control<TFieldValues>
  disabled?: boolean
  opposite?: boolean
}

function FormSwitch<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  name,
  control,
  disabled = false,
  opposite = false,
}: FormSwitchProps<TFieldValues, TName>) {
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
      <Switch
        className={classNames(style.switch, 'switch')}
        onChange={field.onChange}
        checked={field.value}
        disabled={disabled}
        checkedChildren={opposite ? t('general.no') : t('general.yes')}
        unCheckedChildren={opposite ? t('general.yes') : t('general.no')}
        id={name}
      />
      {errors[name]?.message && <FormError>{errors[name].message.toString()}</FormError>}
    </>
  )
}

export default FormSwitch
