import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=180&page=1&sparkline=false&locale=en";

const getCoin = async () => {
    const response = await axios.get ( BASE_URL );
    return response.data;
}
export {getCoin}