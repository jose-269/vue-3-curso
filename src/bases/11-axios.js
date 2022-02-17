
import axios from "axios";

const apiKey = '7TYjCe8CEEU5fg2uDbgDDyRKJheqdCYh';
// https://api.giphy.com/v1/gifs/random?api_key=7TYjCe8CEEU5fg2uDbgDDyRKJheqdCYh

const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params : { 
    api_key: apiKey
   }
})

// giphyApi.get('/random')
//   .then((resp) => {
    
//     // const {url} = data.data.images.original;
//     // console.log(url);

//     const {data} = resp.data;
//     const {url} = data.images.original;

//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img)
    
//     // console.log(resp.data.data.images.original.url)
//   })

export default giphyApi