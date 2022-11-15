import axion from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: { maxResults: '' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
}

export const fetchAPI = async (url) => {
    const { data } = await axion.get(`${BASE_URL}/${url}`, options)

    return data
}
