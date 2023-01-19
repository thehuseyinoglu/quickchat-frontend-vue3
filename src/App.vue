<script setup>
import { ref, reactive } from "vue"
import Room from './components/Room.vue'
import Chat from './components/Chat.vue'

const state = reactive({
  quickChat: {
    userName: '',
    room: '',
    chatScreen: false
  },
})

</script>

<template>
  <div class="app">
    <Room v-if="!state.quickChat.chatScreen" :quickChat="state.quickChat" />
    <Chat v-else :quickChat="state.quickChat" />
  </div>

</template>
<style scoped>
.app {
  background-image: url(./assets/images/quickChat.png);
  height: 100vh;
}
</style>