import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID fuwkvyDEE9Um3Wz7OBO998ADrBlV9kydhiEdx1bUJ-w'
    }
})