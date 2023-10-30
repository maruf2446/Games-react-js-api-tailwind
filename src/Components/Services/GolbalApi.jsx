import axios from "axios";

const key="43d01b8652254f37b576d6ccf1004aab";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenresId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default{
    getGenreList,
    getAllGames,
    getGameListByGenresId
}