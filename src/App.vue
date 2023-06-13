<script setup lang="ts">
</script>

<template>
  <header>
    <nav class="navbar bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <!-- Brand image -->
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="@/assets/static/icon.png" alt="Folfmart logo">
          </div>
          <!-- Title -->
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:block sm:ml-6">
              <router-link to="/">
                <h1 class="text-white font-bold text-3xl">folfmart</h1>
              </router-link>
            </div>
          </div>
          <!-- Links -->
          <div class="flex">
            <router-link to="/himnario"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-medium">Himnario</router-link>
            <router-link to="/nextcloud"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-l font-medium">Nextcloud</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div>
    <router-view />
  </div>
  <footer>
    <footer class="navbar bg-gray-800 text-gray-500 text-center py-4">
      Made with ❤️ by Jason Martinez in Houston, TX, with the assistance of GitHub Copilot X
    </footer>
  </footer>
</template>
