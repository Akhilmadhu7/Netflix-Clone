import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '.././constants/constant'
import './Rowpost.css'
import axios  from '.././axios'
import YouTube from 'react-youtube'

function Rowpost(props) {
    const [movies,setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
      axios.get(props.url).then(response =>{
       /* console.log(response.data);*/
        setMovies(response.data.results)
        // console.log(movies)
        
      }).catch(err=>{
        // alert('Network Error')
      },[])
    })

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    const handleMovie = (id)=>{
        console.log('kklk',id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          // movie/2g811Eo7K8U/videos?api_key=36cdbc5b9b111c9b136609c3ba5871b5&language=en-US
            console.log(response.data);
            if (response.data.results.length!==0) {
                    setUrlId(response.data.results[0])
                    console.log(response.data.results[0]);
            }else{
              console.log('jdfljdash');
            }
        })
    }
    
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=>
              
                // <img className={props.isSmall ? 'smallposter' : 'poster'} alt='Movie Poster' src={`${imageUrl+obj.backdrop_path}`} />
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} alt='Movie Poster' src={`${imageUrl+obj.backdrop_path}`}/>
                    
                )}
        </div>
        { urlId && <YouTube opts={opts} videoId={urlId.key}/>}

    </div>
  )
}

export default Rowpost