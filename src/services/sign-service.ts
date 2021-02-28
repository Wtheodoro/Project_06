import { apiIP } from './api'

const signService = {
    postSignUp: (signUp: any) => apiIP.post(`/register`, {
        email: signUp.email,
        password: signUp.password
    }),

    postSignIn: (signIn: any) => apiIP.post(`/login`, {
        email: signIn.email,
        password: signIn.password
    })
}

export default signService