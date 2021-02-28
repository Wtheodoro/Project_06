import { apiCoins } from './api'

const coinsService = {
    getCoins: () => apiCoins.get('/currencies.json'),
    getSpecificCurrenc: (din: any) => apiCoins.get(`/currency/${din}.json?lang=pt`)
}

export default coinsService