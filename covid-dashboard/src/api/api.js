import * as axios from 'axios';

export const countriesAPI = {
    getWorldWide() {
        return axios.get(`https://api.covid19api.com/summary`)
            .then(response => response.data);
    },
    getCountriesInfo() {
        return axios.get(`https://disease.sh/v3/covid-19/countries`)
            .then(response => response.data);
    }
}