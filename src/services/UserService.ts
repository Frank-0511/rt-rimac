import { getUser } from '@/utils/UserAPI'

const UserService = {
  async getUserData() {
    const data = await getUser()

    return data
  }
}

export default UserService
