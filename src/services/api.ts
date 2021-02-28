import axios from 'axios'

 export const apiIP = axios.create({
    baseURL: 'http://localhost:4000'
})

const coinsGambiarra = 'https://cors-anywhere.herokuapp.com/'
export const apiCoins = axios.create({
    baseURL: `https://v2.api.forex/infos`
})