import React, { useEffect, useState } from 'react';
import GolbalApi from './Services/GolbalApi';

const GenreList = ({genereId,selectedGenresName}) => {

    const [genreList, setGenreList] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        getGenreList();
    }, [])
    const getGenreList = () => {
        GolbalApi.getGenreList.then((resp) => {
            console.log(resp.data.results)
            setGenreList(resp.data.results)
        })
    }

    return (
        <div>
            <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
            {genreList.map((item, index) => (
                <div
                    onClick={() => { setActiveIndex(index); genereId(item.id) 
                    selectedGenresName(item.name)}}
                    className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 rounded-lg hover:dark:bg-gray-600 p-2 group ${activeIndex == index ? 'bg-gray-300 dark:bg-gray-600' : null}`}>

                    <img src={item.image_background}
                        className={`w-[40px] h-[40px] object-cover rounded-lg gropu-hover:scale-105 transition-all ease-out duration-300 ${activeIndex == index ? "scale-105" : null}`} alt="" />
                    <h3 className={`dark:text-white text-[18px] grop-hover:font-bold transition-all ease-out duration-300 ${activeIndex == index ? "font-bold" : null}`}>{item.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default GenreList;