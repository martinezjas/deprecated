<template>
  <main class="index flex flex-col items-center justify-center h-screen">
    <div class="flex items-center">
      <div class="rounded-full overflow-hidden h-80 w-80">
        <img src="@/assets/static/me.jpg" alt="Profile picture">
      </div>
      <div class="ml-4">
        <h1 class="text-5xl font-bold leading-tight text-white">Hi, I'm Jason Martinez!</h1>
        <p class="text-3xl text-center mt-5 text-gray-300">Welcome to my website!</p>
        <div class="flex items-center justify-center mt-5">
          <a href="https://github.com/martinezjas" class="mr-5">
            <BIconGithub class="text-4xl text-center text-gray-300" />
          </a>
          <a href="https://linkedin.com/in/martinezjas">
            <BIconLinkedin class="text-4xl text-center text-gray-300" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "HomeIndex",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

.index {
  background-image: url("https://media4.giphy.com/media/l4KihuqeuJEi9qLSM/giphy.gif?cid=ecf05e47h84n4tlvjgfblhxmvngyosd6w2uka0iex51g9fs3&ep=v1_gifs_search&rid=giphy.gif&ct=g");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
}
</style>