<template>
  <div class="p-8 bg-[#f2f2f2] min-h-screen font-font">
    <!-- Título -->
    <h1 class="text-[22px] font-bold text-[#003838] mb-6">Instituição</h1>

    <!-- Bloco Principal -->
    <div
      class="bg-[#003838] text-white rounded-lg p-6 flex justify-between items-start"
    >
      <!-- Texto à Esquerda -->
      <div>
        <p class="text-[20px] font-medium text-[#E5E7EB]">Olá, Julie!</p>
        <p class="text-[36px] font-bold mt-2">Minador do Negrão</p>
        <p class="text-[36px] font-bold mt-1">10 simulados aplicados</p>
        <button
          class="mt-4 px-4 py-2 border border-white text-white rounded-full self-start text-[12px] font-medium"
        >
          Editar Perfil
        </button>
      </div>

      <!-- Cards de Resultados -->
      <div class="flex space-x-6">
        <!-- Card Laranja -->
        <div
          class="bg-[#FC6E4D] text-white rounded-lg p-4 w-[223px] h-[294px] flex flex-col justify-between"
        >
          <div>
            <p class="text-[14px] font-bold text-[#003838]">01</p>
            <div
              class="flex items-center justify-center bg-[#003838] w-10 h-10 rounded-md mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FC6E4D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-math"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19 5h-7l-4 14l-3 -6h-2" />
                <path d="M14 13l6 6" />
                <path d="M14 19l6 -6" />
              </svg>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-[22px] font-bold text-[#003838]">Média Matemática</p>
            <p class="text-[12px] text-[#003838]">10 simulados | 8,3</p>
            <div class="bg-white h-1 w-full mt-2 rounded-full">
              <div
                class="bg-[#003838] h-1 rounded-full"
                style="width: 83%"
              ></div>
            </div>
          </div>
        </div>

        <!-- Card Amarelo -->
        <div
          class="bg-[#FCF04D] text-white rounded-lg p-4 w-[223px] h-[294px] flex flex-col justify-between"
        >
          <div>
            <p class="text-[14px] font-bold text-[#003838]">02</p>
            <div
              class="flex items-center justify-center bg-[#003838] w-10 h-10 rounded-md mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FCF04D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-a-b-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16 21h3c.81 0 1.48 -.67 1.48 -1.48l.02 -.02c0 -.82 -.69 -1.5 -1.5 -1.5h-3v3z"
                />
                <path
                  d="M16 15h2.5c.84 -.01 1.5 .66 1.5 1.5s-.66 1.5 -1.5 1.5h-2.5v-3z"
                />
                <path d="M4 9v-4c0 -1.036 .895 -2 2 -2s2 .964 2 2v4" />
                <path d="M2.99 11.98a9 9 0 0 0 9 9m9 -9a9 9 0 0 0 -9 -9" />
                <path d="M8 7h-4" />
              </svg>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-[22px] font-bold text-[#003838]">Média Português</p>
            <p class="text-[12px] text-[#003838]">10 simulados | 5,0</p>
            <div class="bg-white h-1 w-full mt-2 rounded-full">
              <div
                class="bg-[#003838] h-1 rounded-full"
                style="width: 50%"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Estatísticas e Calendário -->
    <div class="grid grid-cols-5 gap-4 mt-6">
      <div class="col-span-4">
        <h2 class="text-xl font-semibold text-[#003838] mb-4">Estatísticas</h2>
        <div class="grid grid-cols-4 gap-4">
          <div
            v-for="stat in statistics"
            :key="stat.label"
            class="bg-white text-left p-4 rounded-lg w-[150px] h-[142px]"
          >
            <p class="text-[41px] font-bold text-[#003838]">{{ stat.value }}</p>
            <p class="text-sm text-[#6A7777]">{{ stat.label }}</p>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-xl font-semibold text-[#003838] mb-4">Calendário</h2>
        <div class="bg-white p-4 rounded-lg shadow-md h-[200px]">
          <p class="text-center text-sm text-[#6A7777]">[Calendário aqui]</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6 mt-8">
      <!-- Melhores Resultados -->
      <div class="col-span-2">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-[#003838]">Melhores Resultados</h2>
          <button class="text-[14px] font-bold text-[#5A6565] hover:underline">
            Ver todos
          </button>
        </div>
        <ul>
          <li
            v-for="result in bestResults"
            :key="result.name"
            class="flex items-center justify-between p-4 rounded-lg mb-4"
          >
            <div class="flex items-center">
              <img
                :src="result.image"
                alt="User avatar"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p class="text-[16px] font-bold text-[#003838]">
                  {{ result.name }}
                </p>
                <p class="text-[14px] text-[#5A6565]">{{ result.subject }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <p class="text-[16px] text-[#003838] font-medium">
                {{ result.date }}
              </p>
              <button class="text-[#003838]">
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
                  class="icon icon-tabler icons-tabler-outline icon-tabler-dots"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>

      <!-- Chegando -->
      <div class="col-span-1">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-[#003838]">Chegando</h2>
          <button class="text-[14px] font-bold text-[#5A6565] hover:underline">
            Ver todos
          </button>
        </div>
        <ul>
          <li
            v-for="event in upcomingEvents"
            :key="event.id"
            class="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 border border-[#E5E5E5]"
          >
            <div class="flex items-center space-x-4">
              <div class="bg-[#003838] p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FC6E4D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-math"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 5h-7l-4 14l-3 -6h-2" />
                  <path d="M14 13l6 6" />
                  <path d="M14 19l6 -6" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-[#6A7777]">
                  {{ event.date }} - {{ event.time }}
                </p>
                <p class="text-[14px] font-medium text-[#003838]">
                  {{ event.name }}
                </p>
              </div>
            </div>
            <button class="text-sm font-medium text-[#003838] hover:underline">
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right-dashed"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12h.5m3 0h1.5m3 0h6" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statistics: [
        { label: "Escolas", value: 15 },
        { label: "Turmas", value: 248 },
        { label: "Professores", value: 2196 },
        { label: "Estudantes", value: 24905 },
      ],
      bestResults: [
        {
          name: "Maria Silva",
          subject: "Português",
          date: "21 Mar, 2025",
          image: "@/assets/user-avatar.png",
        },
        {
          name: "Maria Silva",
          subject: "Português",
          date: "21 Mar, 2025",
          image: "@/assets/user-avatar.png",
        },
        {
          name: "Maria Silva",
          subject: "Português",
          date: "21 Mar, 2025",
          image: "@/assets/user-avatar.png",
        },
      ],
      upcomingEvents: [
        {
          id: 1,
          name: "Simulado de Matemática 5º Ano - Anos Iniciais",
          date: "24 Mar",
          time: "09:00",
        },
        {
          id: 2,
          name: "Simulado de Português 5º Ano - Anos Iniciais",
          date: "24 Mar",
          time: "09:00",
        },
      ],
    };
  },
};
</script>
