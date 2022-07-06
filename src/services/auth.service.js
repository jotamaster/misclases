import { httpService } from './http.service'

export const authService = {
    login
}

async function login(userCred) {
    try {
       const user = await httpService.post('auth/login', userCred)
       return user
    } catch (err) {
       console.log('userService: Error in login user', err)
       throw err
    }
 }
