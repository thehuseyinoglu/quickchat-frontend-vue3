<template>
    <div class=' flex items-center justify-center h-full'>
        <div class='w-1/3 h-[600px] relative glass'>
            <div class='w-full h-16 bg-red-500 flex justify-center items-center p-3'>
                <span class=" text-4xl font-bold  text-red-700 ">QuickChat</span>
            </div>
            <div class='w-full h-[400px] overflow-y-auto '>
                <div v-if="messageList">
                    <div v-for="(msg, i) in messageList" :key="i">
                        <div class='  '
                            :class="['flex', quickChat.userName === msg.userName ? 'justify-end ' : 'justify-start ']">
                            <div
                                :class="['w-2/3 h-12 p-2 text-white m-2 rounded-xl rounded-br-none', quickChat.userName === msg.userName ? 'bg-green-600 ' : 'bg-blue-600 ']">
                                <div>{{ msg.message }}</div>
                                <div className='w-full flex justify-end text-xs'>{{ msg.userName }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='absolute bottom-0 left-0 w-full '>
                <input v-model="message" class='w-3/4 h-12 border p-3 outline-none' type="text"
                    placeholder='message send' />
                <button @click="sendMessage" class='w-1/4 bg-indigo-600 text-white h-12 hover:opacity-70'>Send</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, inject, watch } from 'vue'
const socket = inject("socket");
const props = defineProps({ quickChat: Object })
const message = ref('')
const messageList = ref([])

const sendMessage = async () => {
    const messageContent = {
        userName: props.quickChat.userName,
        message: message.value,
        room: props.quickChat.room,
        date: (new Date(Date.now)).getHours() + ':' + (new Date(Date.now)).getMinutes()
    }
    await socket.emit('message', messageContent)
    messageList.value.push(messageContent)
    message.value = ''
}
onMounted(() => {
    socket.on('messageReturn', (data) => {
        messageList.value.push(data)
    })
});
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