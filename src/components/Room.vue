<template>
    <div class='flex items-center justify-center h-full '>
        <div class='w-1/3 h-[320px] rounded-lg flex flex-col space-y-4 p-3 glass'>
            <h1 class=' text-red-700 text-center my-4 font-bold text-2xl'>WELCOME TO QUICKCHAT</h1>
            <input v-model="quickChat.userName" class=' h-12 rounded-xl p-3 outline-none backdrop-blur-xl bg-white/30'
                type="text" placeholder='Username' />
            <input v-model="quickChat.room" class='h-12 rounded-xl p-3 outline-none backdrop-blur-xl bg-white/30'
                type="text" placeholder='Room' />
            <div @click="sendRoom"
                class='tracking-wider cursor-pointer hover:opacity-70 text-white bg-red-500 hover:bg-red-700 h-12 pt-2 text-xl text-center rounded-xl'>
                Chat!</div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue'
const props = defineProps({ quickChat: Object })
const socket = inject("socket");

const sendRoom = () => {
    socket.emit('room', props.quickChat.room)
    props.quickChat.chatScreen = true
}
</script>
<style scoped>
.glass {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.14);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
}
</style>