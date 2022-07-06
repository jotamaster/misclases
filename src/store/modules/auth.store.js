import { authService } from '@/services/auth.service'


export const authStore = {
   state: {
      users: []
   },
   getters: {
      users({ users }) { return users },
   },
   mutations: {
      setLoggedinUser(state, { user }) {
         state.loggedinUser = user;
         console.log(user)
      },
   },
   actions: {
      async login({commit}, { username, password }) {
         try {
            const user = await authService.login({username,password});
            commit({type:'setLoggedinUser',user})
            
         } catch (err) {
            console.log('authStore: Error in loadAndWatchUser', err)
            throw err
         }
      },
   }
}