import { getUser } from '@/apis/UserAPI'

const UserService = {
  async getUserData() {
    const data = await getUser()

    return data
  }
}

export default UserService
