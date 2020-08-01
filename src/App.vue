<template>
  <div id="app">
    <!-- <loading v-if="isShow" /> -->
      <keep-alive>
      <router-view/>
      </keep-alive>
  </div>
</template>


<style lang="scss" >
  *{margin: 0;padding: 0;}
</style>
