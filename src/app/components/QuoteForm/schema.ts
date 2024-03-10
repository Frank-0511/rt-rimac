import { z as zod } from 'zod'

export const FormDataSchema = zod.object({
  cellphone: zod.string().refine(
    (value) => value.startsWith('9') && value.length === 9,
    (value) => {
      if (value.length === 0)
        return {
          message: 'Debes ingresar tu número de celular'
        }
      return {
        message: 'El número de celular debe comenzar con 9 y tener 9 dígitos'
      }
    }
  ),
  document: zod
    .object({
      typeDocument: zod.enum(['dni', 'ruc']),
      numberDocument: zod.string({
        required_error: 'Debes ingresar el número de documento'
      })
    })
    .refine(
      (data) => {
        if (data.typeDocument === 'dni') {
          return /^[0-9]{8}$/.test(data.numberDocument)
        } else if (data.typeDocument === 'ruc') {
          return /^(10|20)[0-9]{10}$/.test(data.numberDocument)
        }
        return false
      },
      (value) => {
        if (value.typeDocument === 'dni') {
          return {
            message: 'El numero de documento debe ser de 8 dígitos',
            path: ['numberDocument']
          }
        } else if (!/^20|^10/.test(value.numberDocument)) {
          return {
            message: 'El número de documento debe iniciar con 10 o 20',
            path: ['numberDocument']
          }
        }
        return {
          message: 'El número de documento debe ser de 11 dígitos',
          path: ['numberDocument']
        }
      }
    ),
  privacyPolicies: zod
    .boolean()
    .refine((value) => value === true, { message: 'Debes aceptar las políticas de privacidad' }),
  commercialCommunicationsPolicy: zod
    .boolean()
    .refine((value) => value === true, { message: 'Debes aceptar las comunicaciones comerciales' })
})

export type FormData = zod.infer<typeof FormDataSchema>
