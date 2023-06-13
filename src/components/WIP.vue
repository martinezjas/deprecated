<template>
    <div class="index min-h-screen flex flex-col justify-center items-center">
        <h1 class="text-4xl text-white font-bold mb-4">🚧 Please excuse our dust! 🚧</h1>
        <p class="text-xl text-gray-200">This page is currently under construction. Please check back later.</p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'WorkInProgress'
}
</script>

<style scoped>
.index {
    background-image: url("https://media4.giphy.com/media/l4KihuqeuJEi9qLSM/giphy.gif?cid=ecf05e47h84n4tlvjgfblhxmvngyosd6w2uka0iex51g9fs3&ep=v1_gifs_search&rid=giphy.gif&ct=g");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
}
</style>
