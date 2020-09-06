import apiUrl from '../../config.js'
import changeImg from './slideShow.js'

fetch(apiUrl + '/banner').then((response) => {
    return response.json()
}).then(data => changeImg(data))
