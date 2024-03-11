import apiClient from './APIClient'
import { toast } from 'react-toastify'

export async function getPlans(): Promise<any> {
  let response = {}
  try {
    response = await apiClient('/plans.json')
  } catch (error) {
    toast.error('Error al obtener los planes', {
      position: 'bottom-right'
    })
  } finally {
    return response
  }
}
