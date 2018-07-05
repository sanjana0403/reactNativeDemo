const BASE_URL = 'https://api.coinmarketcap.com/v2';

export async function getFeed() {
  try {
    let response = await fetch(`${BASE_URL}/listings/`);
    let responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(error);
  }
}
