import axion from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: { maxResults: '20' },
    headers: {
        'X-RapidAPI-Key': '8cf0a4fca4mshfd7a99454350197p1c1670jsn2de6fc17cf75',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
}

export const fetchAPI = async (url) => {
    const { data } = await axion.get(`${BASE_URL}/${url}`, options)
    return data
}
