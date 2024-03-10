export interface UserState {
  cellphone: string
  document: {
    typeDocument: 'dni' | 'ruc'
    numberDocument: string
  }
  privacyPolicies: boolean
  commercialCommunicationsPolicy: boolean
}

export const initialState: UserState = {
  cellphone: '',
  document: {
    typeDocument: 'dni',
    numberDocument: ''
  },
  privacyPolicies: false,
  commercialCommunicationsPolicy: false
}

export const userSlice = (set: any) => ({
  user: { ...initialState },
  setUser: (user: Partial<UserState>) => set((state: any) => ({ user: { ...state.user, ...user } }))
})
