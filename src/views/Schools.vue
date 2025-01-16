<template>
    <div class="p-6">
      <!-- Header com o campo de busca e o botão de adicionar -->
      <h1 class="text-[22px] font-bold text-[#003838] mb-6">Escolas</h1>
      <div class="flex justify-between items-center mb-4">
        <!-- Campo de busca -->
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Buscar escolas..."
          class="border border-gray-300 rounded-md px-4 py-2 w-1/2"
        />
        <!-- Botão de adicionar escola -->
        <button
          @click="openAddSchoolModal"
          class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Adicionar Escola
        </button>
      </div>
  
      <!-- Lista de escolas -->
      <div>
        <p v-if="filteredSchools.length === 0" class="text-gray-500">
          Nenhuma escola encontrada.
        </p>
        <ul>
          <li
            v-for="school in filteredSchools"
            :key="school.name"
            class="border-b py-2 flex justify-between"
          >
            <span class="font-bold uppercase">{{ school.name }}</span>
            <span class="text-gray-600">{{ school.region }}</span>
          </li>
        </ul>
      </div>
  
      <!-- Modal para adicionar escola -->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white p-6 rounded-md shadow-md w-96">
          <h2 class="text-lg font-bold mb-4">Adicionar Escola</h2>
          <!-- Campo para o nome da escola -->
          <input
            type="text"
            v-model="newSchool.name"
            placeholder="Nome da escola"
            class="border border-gray-300 rounded-md px-4 py-2 w-full mb-3"
          />
          <!-- Campo para a região -->
          <input
            type="text"
            v-model="newSchool.region"
            placeholder="Região"
            class="border border-gray-300 rounded-md px-4 py-2 w-full mb-3"
          />
          <!-- Botões -->
          <div class="flex justify-end space-x-2">
            <button
              @click="closeModal"
              class="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              @click="addSchool"
              class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: "", 
        schools: [], 
        showModal: false, 
        newSchool: {
          name: "",
          region: "",
        },
      };
    },
    computed: {
      filteredSchools() {
        // Filtro para a lista de escolas
        return this.schools.filter((school) =>
          school.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      },
    },
    methods: {
      openAddSchoolModal() {
        // Abre o modal para adicionar escola
        this.showModal = true;
      },
      closeModal() {
        // Fecha o modal e reseta os campos
        this.showModal = false;
        this.newSchool = { name: "", region: "" };
      },
      addSchool() {
        // Adiciona uma nova escola à lista
        if (this.newSchool.name && this.newSchool.region) {
          this.schools.push({
            name: this.newSchool.name.toUpperCase(),
            region: this.newSchool.region,
          });
          this.closeModal(); // Fecha o modal após adicionar
        } else {
          alert("Por favor, preencha todos os campos.");
        }
      },
    },
  };
  </script>
  
  
  