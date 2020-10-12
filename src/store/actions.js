import axios from '../API/api'
import interceptorsSetup from '../utils/interceptor'

const getParam = (custom) => {
    return new URLSearchParams([custom]);
}

interceptorsSetup(axios)

export default {
    LOGIN (context) {
        return axios({
            method: 'post',
            url: '/auth',
            data: JSON.stringify({
                apiKey: '23567b218376f79d9415'
            })
        }).then(response => {
            context.commit('SET_CREDENTIALS', JSON.parse(response.data))
            return new Promise( (resolve) => {
                resolve (true)
            })
        }, error => {
            console.log(error)
        }).finally(() => //set loading
            console.log('logged'))
    },
    SET_IMAGES(context, data) {
        const params = getParam(['page', data.page]);
        axios.get('images', {params})
            .then(response => {
                context.commit('SET_IMAGES', JSON.parse(response.data))
            }, error => {
                console.log(error)
            }).finally(() => //set loading
            console.log())
    },
    SET_CURRENT_IMAGE(context, data) {
        axios.get(`images/${data.id}`)
            .then(response => {
                context.commit('SET_CURRENT_IMAGE', JSON.parse(response.data))
            }, error => {
                console.log(error)
            }).finally(() => //set loading
            console.log())
    }
}
