<template>
  <div class="p-6 min-h-screen font-font">
    <!-- Header com título e botão -->
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-[22px] font-bold text-[#003838]">Escolas</h1>
      <div class="flex items-center gap-4">
        <button
          @click="openAddSchoolModal"
          class="bg-[#ffff] text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-plus text-[#003838]"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          <span class="text-[#003838]">Adicionar</span>
        </button>
        <div class="relative">
          <button
            class="text-[#003838] px-4 py-2 rounded-md flex items-center gap-2 border border-white border-[1px]"
            @click="toggleOptionsMenu"
          >
            ...
          </button>
          <div
            v-if="showOptionsMenu"
            class="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-[227px] h-[123px]"
          >
            <ul>
              <li
                class="px-4 py-2 text-[#003838] hover:bg-gray-100 cursor-pointer text-[16px] text-medium"
                @click="exportData"
              >
                Exportar
              </li>
              <li
                class="px-4 py-2 text-[#003838] hover:bg-gray-100 cursor-pointer text-[16px] text-medium"
                @click="importData"
              >
                Importar
              </li>
              <li
                class="px-4 py-2 text-[#003838] hover:bg-gray-100 cursor-pointer text-[16px] text-medium"
                @click="openDeleteSchoolsModal"
              >
                Deletar Selecionados
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Campo de busca -->
    <div class="relative mb-6">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Buscar escola"
        class="border-0 border-b border-[#D9D9D9] focus:border-gray-600 outline-none bg-transparent pl-10 py-2 w-full"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
    </div>

    <!-- Tabela de escolas -->
    <div class="rounded-lg overflow-hidden">
      <table class="table-auto w-full text-left">
        <thead class="text-[#6A7777]">
          <tr>
            <th class="px-6 py-4 text-sm font-medium w-10">
              <input
                type="checkbox"
                @change="toggleSelectAll($event)"
                class="form-checkbox text-[#003838] h-4 w-4 border-gray-400"
              />
            </th>
            <th class="px-6 py-4 text-sm font-medium">Nome</th>
            <th class="px-6 py-4 text-sm font-medium">Região</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(school, index) in filteredSchools"
            :key="school.name"
            :class="{
              'bg-white': selectedSchools[index],
              'hover:bg-[#F2F2F2]': !selectedSchools[index],
            }"
            class="border-t border-[#D9D9D9]"
          >
            <td class="px-6 py-4">
              <input
                type="checkbox"
                v-model="selectedSchools[index]"
                class="form-checkbox text-[#003838] h-4 w-4 border-gray-400"
              />
            </td>
            <td
              class="px-6 py-4 font-medium text-[#003838] text-[14px] uppercase"
            >
              {{ school.name }}
            </td>
            <td class="px-6 py-4 font-medium text-[#003838] text-[14px]">
              {{ school.region }}
            </td>
            <td class="px-6 py-4">
              <button
                class="text-[#003838] hover:text-[#005151]"
                @click="editSchool(school)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#003838"
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
            </td>
          </tr>
          <tr v-if="filteredSchools.length === 0">
            <td colspan="4" class="px-6 py-4 text-center text-gray-500">
              Nenhuma escola encontrada.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal para adicionar escola -->
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-start justify-end bg-gray-900 bg-opacity-50"
    >
      <div
        class="bg-white p-6 shadow-md w-full max-w-sm h-full overflow-hidden flex flex-col"
      >
        <!-- Header do modal -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-[22px] font-bold">Adicionar Escola</h2>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
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
              class="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Conteúdo do modal -->
        <div class="flex-1 overflow-auto">
          <!-- Campo Nome -->
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Nome</label>
            <p class="text-[#6A7777] text-[12px] mt-1 font-medium mb-4">
              Adicone um nova escola. Ajuda
            </p>
            <input
              type="text"
              v-model="newSchool.name"
              placeholder="Nome da escola"
              class="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <p class="text-[#6A7777] text-[12px] mt-1 font-medium">
              Informe o nome da escola.
            </p>
            <p class="text-[#6A7777] text-[12px] mt-1 font-medium">
              50-60 caracteres são recomendados para uma boa leitura.
            </p>
          </div>

          <!-- Campo Região -->
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Região</label>
            <input
              type="text"
              v-model="newSchool.region"
              placeholder="Região"
              class="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
        </div>

        <!-- Footer fixo com os botões -->
        <div
          class="flex justify-end gap-4 bg-gray-100 py-4 px-6 border-t border-gray-300"
        >
          <button
            @click="closeModal"
            class="bg-white px-4 py-2 rounded-md text-gray-700 border border-gray-300 hover:bg-gray-200"
          >
            Cancelar
          </button>
          <button
            @click="addSchool"
            class="bg-[#003838] px-6 py-2 rounded-md text-white w-[324px] h-[40px]"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>

    <!-- Modal para deletar escolas selecionadas -->
    <div
      v-if="showDeleteModal"
      class="fixed inset-0 flex items-start justify-end bg-gray-900 bg-opacity-50"
    >
      <div
        class="bg-white p-6 shadow-md w-full max-w-sm h-full overflow-hidden flex flex-col"
      >
        <!-- Header do modal -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-[22px] font-bold">Deletar Escolas</h2>
          <button
            @click="closeDeleteModal"
            class="text-gray-500 hover:text-gray-700"
          >
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
              class="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Conteúdo do modal -->
        <div class="flex-1 overflow-auto">
          <p class="text-[#6A7777] text-[12px] mt-1 font-medium mb-4">
            Tem certeza que deseja deletar permanentemente os seguintes
            registros?
          </p>
          <ul
            class="list-disc pl-6 text-[#003838] text-[14px] font-bold uppercase"
          >
            <li v-for="(school, index) in selectedSchoolsList" :key="index">
              {{ school.name }}
            </li>
          </ul>
        </div>

        <!-- Footer fixo com os botões -->
        <div
          class="flex justify-end gap-4 bg-gray-100 py-4 px-6 border-t border-gray-300"
        >
          <button
            @click="closeDeleteModal"
            class="bg-white px-4 py-2 rounded-md text-gray-700 border border-gray-300 hover:bg-gray-200"
          >
            Cancelar
          </button>
          <button
            @click="deleteSelectedSchools"
            class="bg-[#FC6E4D] px-6 py-2 rounded-md text-white  w-[324px] h-[40px]"
          >
            Deletar
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
      schools: [
        { name: "Escola Estadual Maria Clara", region: "Urbano" },
        { name: "Escola Municipal João da Silva", region: "Rural" },
        { name: "Colégio Central Dom Bosco", region: "Urbano" },
        { name: "Escola Técnica Luiz Gonzaga", region: "Urbano" },
        { name: "Escola Rural Verde Esperança", region: "Rural" },
      ],
      selectedSchools: [],
      showModal: false,
      showDeleteModal: false,
      showOptionsMenu: false,
      newSchool: {
        name: "",
        region: "",
      },
    };
  },
  computed: {
    filteredSchools() {
      return this.schools.filter((school) =>
        school.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    selectedSchoolsList() {
      return this.schools.filter((_, index) => this.selectedSchools[index]);
    },
  },
  methods: {
    toggleOptionsMenu() {
      this.showOptionsMenu = !this.showOptionsMenu;
    },
    toggleSelectAll(event) {
      const isChecked = event.target.checked;
      this.selectedSchools = this.filteredSchools.map(() => isChecked);
    },
    openAddSchoolModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.newSchool = { name: "", region: "" };
    },
    openDeleteSchoolsModal() {
      if (this.selectedSchoolsList.length > 0) {
        this.showDeleteModal = true;
      } else {
        alert("Nenhuma escola selecionada.");
      }
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
    addSchool() {
      if (this.newSchool.name && this.newSchool.region) {
        this.schools.push({
          name: this.newSchool.name.toUpperCase(),
          region: this.newSchool.region,
        });
        this.closeModal();
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    },
    deleteSelectedSchools() {
      this.schools = this.schools.filter(
        (_, index) => !this.selectedSchools[index]
      );
      this.selectedSchools = [];
      this.closeDeleteModal();
    },
    exportData() {
      alert("Exportar dados em breve!");
    },
    importData() {
      alert("Importar dados em breve!");
    },
    editSchool(school) {
      alert(`Editar: ${school.name}`);
    },
  },
};
</script>

<style>
input.form-checkbox {
  appearance: none; /* Remove o estilo padrão do navegador */
  -webkit-appearance: none; /* Para navegadores WebKit */
  -moz-appearance: none; /* Para navegadores Firefox */
  background-color: #fff; 
  border: 2px solid #D9D9D9; 
  border-radius: 4px; 
  width: 16px; 
  height: 16px; 
  cursor: pointer; 
  display: inline-block; 
  position: relative; 
}


input.form-checkbox:checked {
  background-color: #003838; 
  border-color: #003838; 
}
</style>
