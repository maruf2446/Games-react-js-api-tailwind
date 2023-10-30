import React, { useEffect, useState } from 'react';
import GenreList from '../Components/GenreList';
import GolbalApi from '../Components/Services/GolbalApi';
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesByGenresld from '../Components/GamesByGenresld';


const Home = () => {
    const [allGamesList, setAllGameList] = useState();
    const [gameListByGenres,setGameListByGenres]=useState([]);
    const [selectedGenresName,setSelctedGenresName]=useState('Action')
    useEffect(() => {
        getAllGamesList();
        getGameListByGenresId(4);
    }, [])

    const getAllGamesList = () => {
        GolbalApi.getAllGames.then((resp) => {
            // console.log(resp.data)
            setAllGameList(resp.data.results)
            
        })
    }

    const getGameListByGenresId=(id)=>{
        // console.log("GERENID", id)
        GolbalApi.getGameListByGenresId(id).then((resp)=>{
            console.log("Game List By GenresId:", resp.data.results)
            setGameListByGenres(resp.data.results)
        })
    }

    return (
        <div className='grid grid-cols-4 px-8'>
            <div className='hidden md:block'>
                <GenreList genereId={(genereId)=>getGameListByGenresId(genereId)} 
                selectedGenresName={(name)=>setSelctedGenresName(name)}
                />
            </div>
            <div className='col-span-4 md:col-span-3'>
                {allGamesList?.length>0&&gameListByGenres.length>0?
                    <div>
                        <Banner gameBanner={allGamesList[0]} />
                        <TrendingGames gameList={allGamesList}/>
                        <GamesByGenresld gameList={gameListByGenres}
                        selectedGenresName={selectedGenresName}
                        />
                    </div>
                    : null}
            </div>
        </div>
    );
};

export default Home;