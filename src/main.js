import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:5000');

const app = createApp(App)
app.provide("socket", socket);
app.mount('#app')
