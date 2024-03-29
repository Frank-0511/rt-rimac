export interface UserState {
  cellphone: string
  document: {
    typeDocument: 'dni' | 'ruc'
    numberDocument: string
  }
  privacyPolicies: boolean
  commercialCommunicationsPolicy: boolean
  name: string
  lastName: string
  birthDay: string
}

export const initialState: UserState = {
  cellphone: '',
  document: {
    typeDocument: 'dni',
    numberDocument: ''
  },
  privacyPolicies: false,
  commercialCommunicationsPolicy: false,
  name: '',
  lastName: '',
  birthDay: ''
}

export const userSlice = (set: any) => ({
  user: { ...initialState },
  setUser: (user: Partial<UserState>) => set((state: any) => ({ user: { ...state.user, ...user } }))
})
