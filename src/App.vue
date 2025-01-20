<template>
  <div class="flex h-screen bg-[#f2f2f2]">
    <!-- Sidebar -->
    <div class="h-full">
      <Sidebar class="h-full" />
    </div>

    <!-- Content Area -->
    <div class="flex-grow flex flex-col">
      <!-- Header -->
      <header class="flex justify-end items-center p-4 space-x-4bg-[#f2f2f2]">
        <!-- Foto do usuário e ícone de notificação -->
        <div class="flex items-center space-x-4">
          <!-- Ícone de notificação -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-bell"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
            />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
          </svg>

          <!-- Foto do usuário -->
          <img :src="userImage" alt="Usuário" class="w-10 h-10 rounded-full" />
        </div>
      </header>

      <!-- Main content rendered by router -->
      <div class="flex-grow p-4 overflow-y-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      userImage: "/path/to/user-image.jpg",
    };
  },
};
</script>
