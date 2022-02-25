<template>
  <div>
    <TheHeader @sidenavToggle="toggleSideNav" />
    <TheSidenav
      :show="displaySideNav"
      @close="displaySideNav = false"
    />
    <Nuxt />
  </div>
</template>

<script>
  import TheHeader from '@/components/Navigation/TheHeader.vue';
  import TheSidenav from "@/components/Navigation/TheSidenav.vue";

  export default {
    components: {
      TheHeader,
      TheSidenav
    },
    data() {
      return {
        displaySideNav: false
      }
    },
    methods: {
      toggleSideNav() {
        this.displaySideNav = !this.displaySideNav;
      }
    }
  }
</script>

<style>
  html {
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
  }
</style>
