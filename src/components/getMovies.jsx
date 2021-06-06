import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import '../style/main.css'

var api = 'https://www.omdbapi.com/?apikey=20b49b64&t='


const Movies = () =>{
    const [title, setTitle] = useState('')
    const [data, setData] = useState()
    function getMovies(){
        axios.get('https://www.omdbapi.com/?apikey=20b49b64&t='+ title)
        .then(response => {
            setData(response.data)
        })
    }
    console.log(data);
    return (
        <div className=' align-center justify-center'>
            <div className=' container container-fluid py-48 h-screen text-center main-div text-center h-screen align-center justify-center'>
                <h1 className='text-white text-5xl mt-0 mb-10'>Search your movie</h1>
                <input onChange={event => setTitle(event.target.value)}  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-grey-darker"></input>
                <button className='btn button w-20 ml-2 py-1.5 rounded text-white border-rounded shadow-2xl hover:shadow-0 bg-white text-gray-700 text-lg' onClick={getMovies}>Search</button>
            </div>
            { data && 
                <div className="flex flex-wrap m-10">
                    <div className="text-center h-1/6 rounded flex-none shadow-2xl p-2">
                        <img className='' src={data.Poster} />
                    </div>
                    <div className="flex-1 m-10 ">
                        <h1><span className='font-bold'>Title - </span>{data.Title} ({data.Year})</h1>
                        <br/>
                        <p><span className='font-bold '>What it's about? - </span> {data.Plot}</p>
                        <br/>
                        <p><span className='font-bold'>Actors - </span> {data.Actors}</p>
                        <p><span className='font-bold'>Director - </span> {data.Director}</p>
                        <br/>
                        <p><span className='font-bold'>Genre - </span> {data.Genre}</p>
                        <p><span className='font-bold'>Type -</span> {data.Type}</p>
                        <br/>
                        <p><span className='font-bold'>IMDB Rating - </span> {data.imdbRating}</p>
                        {data.Ratings.length > 1 ? <p><span className='font-bold'>{data.Ratings[1].Source} </span> : {data.Ratings[1].Value}</p> : ''}
                        
                        <br/>                        
                        <div className='flex'>
                            <button class="px-6 mr-4 py-2.5 mb-4  text-base   font-semibold rounded-lg block  border-b border-green-300  bg-green-200 hover:bg-green-300 text-green-900">Yes, this seems my kind of movie.</button>
                            <button class="px-8 py-3.5 mb-4  text-base   font-semibold rounded-lg block  border-b border-red-300    bg-red-200 hover:bg-red-300 text-red-900">Nope, I dont like this movie</button>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default Movies