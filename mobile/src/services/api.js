import axios from 'axios';
import React from 'react';

const api = axios.create({
    baseURL: 'http://192.168.15.5:3333'
});

export default api;