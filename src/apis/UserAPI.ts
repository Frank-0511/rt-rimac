import apiClient from './APIClient'
import { toast } from 'react-toastify'

export async function getUser() {
  let response = {}
  try {
    response = await apiClient('/user.json')
  } catch (error) {
    toast.error('Error al obtener los datos del usuario', {
      position: 'bottom-right'
    })
  } finally {
    return response
  }
}
