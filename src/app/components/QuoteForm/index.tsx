'use client'

import { Controller, useForm } from 'react-hook-form'
import { FormData, FormDataSchema } from './schema'

import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import DropdownWithInput from '@/components/DropdownWithInput'
import Input from '@/components/Input'
import Link from 'next/link'
import useGetAndSaveUser from '@/hooks/useGetAndSaveUser'
import { zodResolver } from '@hookform/resolvers/zod'

const QuoteForm = () => {
  const { handleSubmitUser } = useGetAndSaveUser()

  const { handleSubmit, control, setValue, trigger } = useForm<FormData>({
    resolver: zodResolver(FormDataSchema),
    mode: 'onChange',
    defaultValues: {
      document: {
        typeDocument: 'dni',
        numberDocument: ''
      },
      privacyPolicies: false,
      commercialCommunicationsPolicy: false,
      cellphone: ''
    }
  })

  const onChangeDropdown = (value: string) => {
    setValue('document.typeDocument', value as 'dni' | 'ruc')
    trigger('document.numberDocument')
  }

  const onSubmit = (data: FormData) => {
    handleSubmitUser(data)
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4">
        <Controller
          name="document.numberDocument"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <DropdownWithInput
              options={[
                { value: 'dni', label: 'DNI' },
                { value: 'ruc', label: 'RUC' }
              ]}
              label="Nro. de documento"
              onChangeDropdown={onChangeDropdown}
              inputValue={field.value}
              nameInput={field.name}
              refInput={field.ref}
              errorInput={error?.message}
              onChangeInput={field.onChange}
            />
          )}
        />
        <Controller
          name="cellphone"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Celular"
              type="tel"
              placeholder="999-999-999"
              inputValue={field.value}
              nameInput={field.name}
              refInput={field.ref}
              errorInput={error?.message}
              onChangeInput={field.onChange}
            />
          )}
        />
      </div>
      <div className="grid gap-3">
        <Controller
          name="privacyPolicies"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Checkbox
              label="Acepto lo Política de Privacidad"
              onChange={field.onChange}
              checked={field.value}
              error={error?.message}
            />
          )}
        />
        <Controller
          name="commercialCommunicationsPolicy"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Checkbox
              label="Acepto la Política Comunicaciones Comerciales"
              onChange={field.onChange}
              checked={field.value}
              error={error?.message}
            />
          )}
        />
        <Link href="/">
          <span className="text-xs font-semibold underline">Aplican Términos y Condiciones</span>
        </Link>
      </div>
      <Button text="Cotiza aquí" type="submit" />
    </form>
  )
}

export default QuoteForm
