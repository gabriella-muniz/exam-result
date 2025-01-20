<template>
  <div class="w-64 bg-[#f2f2f2] h-screen flex flex-col border-right">
    <!-- Logo -->
    <div class="flex items-center justify-center h-16">
      <img
        src="@/assets/cog-azul-semfundo.png"
        alt="Logo Cogtech"
        class="w-[121px] h-[17px]"
      />
    </div>

    <!-- Menu -->
    <nav class="flex-1 flex flex-col items-center py-4 w-full">
      <router-link
        v-for="item in menuItems"
        :key="item.label"
        :to="item.href"
        class="flex items-center w-[90%] px-4 py-3 space-x-3 group"
        :class="
          item.active
            ? 'text-[#003838] font-bold border-l-4 border-[#003838]'
            : 'text-[#6A7777]'
        "
        @click="selectMenuItem(item)"
      >
        <!-- Ícone Tabler -->
        <component
          :is="item.icon"
          class="w-6 h-6"
          :class="item.active ? 'text-[#003838]' : 'text-[#6A7777]'"
        />
        <!-- Texto -->
        <span class="text-[16px] font-bold leading-6">{{ item.label }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import {
  IconBuildings,
  IconMessageQuestion,
  IconFileStack,
  IconFileAnalytics,
  IconCalendarTime,
  IconLayoutGridFilled,
  IconFileText,
} from "@tabler/icons-vue";

export default {
  name: "Sidebar",
  data() {
    return {
      menuItems: [
        {
          label: "Instituição",
          href: "/institutions",
          icon: IconLayoutGridFilled,
          active: true,
        },
        { label: "Escolas", href: "/schools", icon: IconBuildings },
        { label: "Questões", href: "/questoes", icon: IconMessageQuestion },
        { label: "Simulados", href: "/simulados", icon: IconFileText },
        {
          label: "Aplicações de Simulados",
          href: "/aplicacao",
          icon: IconCalendarTime,
        },
        { label: "Relatórios", href: "/relatorios", icon: IconFileAnalytics },
        {
          label: "Matrizes de Referência",
          href: "/matrizes",
          icon: IconFileStack,
        },
      ],
    };
  },
  methods: {
    selectMenuItem(selectedItem) {
      this.menuItems.forEach((item) => {
        item.active = item === selectedItem;
      });
    },
  },
};
</script>

<style scoped>
.border-right {
  border-right: 1px solid #d9d9d9;
}
.group:hover {
  background-color: transparent;
}
</style>
