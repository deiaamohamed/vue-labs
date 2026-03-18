<template>
  <div class="home-page">
    <div class="page-container">
      <Sidebar />
      <div class="main-content">
        <Content />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Content from '../components/Content.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Content
  }
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-container {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  background-color: #ecf0f1;
}
</style>
