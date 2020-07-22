import axios from 'axios'

export const axiosWithAuth = () =>{
    const token = JSON.parse(window.localStorage.getItem('token'))

    return axios.create({
        headers: {
            Authorization: token
        }
    });
}