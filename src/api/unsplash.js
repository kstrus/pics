import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3468aad2ec8d82741d951dc87ab2bbfac4cc69c191c511d98de403daa0fd4ec1'
    }
});
