<template>
  <div class="p-8 bg-[#f2f2f2] min-h-screen font-font">
    <!-- Título -->
    <h1 class="text-[22px] font-bold text-[#003838] mb-6">Instituição</h1>

    <!-- Bloco Principal -->
    <div class="bg-[#003838] text-white rounded-lg p-6 flex justify-between items-start">
      <!-- Texto à Esquerda -->
      <div>
        <p class="text-[20px] font-medium text-[#E5E7EB]">Olá, Julie!</p>
        <p class="text-[36px] font-bold mt-2">Minador do Negrão</p>
        <p class="text-[36px] font-bold mt-1">10 simulados aplicados</p>
        <button
          class="mt-4 px-4 py-2 border border-white text-white rounded-full self-start text-sm font-medium"
        >
          Editar Perfil
        </button>
      </div>

      <!-- Cards de Resultados -->
      <div class="flex space-x-6">
        <!-- Card Laranja -->
        <div class="bg-[#FC6E4D] text-white rounded-lg p-4 w-[223px] h-[294px] flex flex-col justify-between">
          <div>
            <p class="text-[14px] font-bold text-[#003838]">01</p>
            <div class="flex items-center justify-center bg-[#003838] w-10 h-10 rounded-md mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-[22px] font-bold text-[#003838]">Média Matemática</p>
            <p class="text-[12px] text-[#003838]">10 simulados | 8,3</p>
            <div class="bg-white h-1 w-full mt-2 rounded-full">
              <div class="bg-[#003838] h-1 rounded-full" style="width: 83%;"></div>
            </div>
          </div>
        </div>

        <!-- Card Amarelo -->
        <div class="bg-[#FCF04D] text-white rounded-lg p-4 w-[223px] h-[294px] flex flex-col justify-between">
          <div>
            <p class="text-[14px] font-bold text-[#003838]">02</p>
            <div class="flex items-center justify-center bg-[#003838] w-10 h-10 rounded-md mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-[22px] font-bold text-[#003838]">Média Português</p>
            <p class="text-[12px] text-[#003838]">10 simulados | 5,0</p>
            <div class="bg-white h-1 w-full mt-2 rounded-full">
              <div class="bg-[#003838] h-1 rounded-full" style="width: 50%;"></div>
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

    <!-- Seções de Resultados -->
    <div class="grid grid-cols-2 gap-6 mt-8">
      <!-- Melhores Resultados -->
      <div>
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-[#003838]">Melhores Resultados</h2>
          <button class="text-sm font-medium text-[#003838] hover:underline">Ver todos</button>
        </div>
        <ul>
          <li
            v-for="result in bestResults"
            :key="result.name"
            class="flex items-center justify-between mb-4  p-4 rounded-lg "
          >
            <div class="flex items-center">
              <img
                :src="result.image"
                alt="User avatar"
                class="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p class="text-[16px] font-bold text-[#003838]">{{ result.name }}</p>
                <p class="text-[14px] text-[#5A6565] ">{{ result.subject }}</p>
              </div>
            </div>
            <p class="text-[16px] text-[#5A6565] font-medium">{{ result.date }}</p>
          </li>
        </ul>
      </div>

      <!-- Chegando -->
      <div>
        <h2 class="text-[22px] font-bold text-[#003838] mb-4">Chegando</h2>
        <ul>
          <li
            v-for="event in upcomingEvents"
            :key="event.id"
            class="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <div class="flex items-center space-x-4">
              <div class="bg-[#003838] p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
              <div>
                <p class="text-[14px] text-[#6A7777]">{{ event.date }} - {{ event.time }}</p>
                <p class="text-[16px] font-medium text-[#003838]">{{ event.name }}</p>
              </div>
            </div>
            <button class="text-sm font-medium text-[#003838] hover:underline">
              →
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
