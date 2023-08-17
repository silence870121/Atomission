import { defineStore } from "pinia";
import axios from "axios";


export const useAPIStore = defineStore('api', () => {
    const API_URL = 'path'

    const backendAPI = axios.create({
        baseURL: API_URL,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    });
    const token = null;

    //? API Packages
    async function LOGIN(user, password) {
        const res = await backendAPI.post('/login', {
            user,
            password
        })
        token = res.data.token
        return Promise.reject(res.data)
    }

    async function GET(url, params) {
        try {
            const res = await backendAPI.get(url, {
                params
            });
            return res.data

        } catch (res) {
            return Promise.reject(res.data)
        }
    }

    async function POST(...item) {
        try {
            const res = await backendAPI.post(...item);
            return res.data;
        } catch (res) {
            return Promise.reject(res.data)
        }
    }
    async function PUT(...item) {
        try {
            const res = await backendAPI.put(...item);
            return res.data;
        } catch (res) {
            return Promise.reject(res.data)
        }
    }
    async function DELETE(url, params) {
        try {
            const res = await backendAPI.delete(url, {
                params
            })
            return res.data
        } catch (res) {
            return Promise.reject(res.data)
        }
    }


    return {
        LOGIN,
        GET,
        POST,
        PUT,
        DELETE
    }
})