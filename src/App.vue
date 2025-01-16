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
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6 text-gray-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405a7.963 7.963 0 001.25-4.595c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 3.603 2.278 6.672 5.556 7.595L9 17h6z"
            />
          </svg>

          <!-- Foto do usuário -->
          <img
            :src="userImage"
            alt="Usuário"
            class="w-10 h-10 rounded-full"
          />
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
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      userImage: '/path/to/user-image.jpg', 
    };
  },
};
</script>



