import { yupResolver } from '@hookform/resolvers/yup'
import AccountForm from 'features/user/ui/account-form'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { userSchema } from 'schemas/user'

function Account() {
  const [isSaving, setIsSaving] = useState(false)

  const loadAccount = async () => {
    // fetch account data
  }

  const form = useForm({
    resolver: yupResolver(userSchema),
  })

  const handleSubmit = (form) => {
    // save account data
    // edit logic
  }

  useEffect(() => {
    loadAccount()
  }, [])

  return <AccountForm form={form} onSubmit={handleSubmit} isSubmitting={isSaving} />
}

export default Account
