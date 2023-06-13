<template>
    <div class="index flex flex-col items-center justify-center h-screen text-white">
        <h1 class="text-6xl font-bold mb-4">404 - Page Not Found</h1>
        <p class="text-2xl">The page you are looking for does not exist.</p>
        <button class="text-2xl mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" @click="goToHome">Go back to home</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'NotFound',
    methods: {
        goToHome() {
            this.$router.push('/');
        }
    }
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
