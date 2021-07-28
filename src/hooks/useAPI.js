import axios from 'axios'

const baseURL = `localhost:3000/blockchain` // TODO

export const useApi = () => {

    const getBlock = index => {
        return axios.get(`${baseURL}/block/${index}`)
    }

    const postBlock = block => {
        return axios.post(`${baseURL}/block`, block)
    }

    const getBlockchain = () => {

    }

    const postBlockchain = (mine_index, blockchain) => {

    }

    const getTokens = () => {

    }

    const postTokens = (mine_index, blockchain) => {

    }

    const getCoinbase = () => {

    }

    const postCoinbase = (mine_index, blockchain) => {

    }

    return [getBlock, postBlock, getBlockchain, postBlockchain, getTokens, postTokens, getCoinbase, postCoinbase]
}