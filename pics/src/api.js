import axios from 'axios';

const searchImages = async (term) =>  {
const response= await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID TQNMVVsFG_kIk5qP2P5HNHUOrKMktCFzafSuXnyX8B0'
    },
    params:{ 
        query: term,

    },
});

return response.data.results;
};

export default searchImages;
