<script setup lang="ts">
import Speaker from './libs/speaker'

function handleSpeak() {
  const voice = Speaker.getTrack()

  Speaker.toSpeak(voice[0], 'I never mind your unkind reminding that my grindstone hinders your cylinder.')
}
</script>

<template>
  <div class="application">
     <n-button @click="handleSpeak">Touch</n-button>  
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
}

.application {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
</style>
