import axios from 'axios';

const searchImages= async(term) =>{
 const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
           Authorization: 'Client-ID xhAPzt5LUoy13053x4oB1wIfPjr7Rrzle1zkV3eYoZU',
        },
        params: {
            query: term,

        }
    });

    return response.data.results;
};

export default searchImages;