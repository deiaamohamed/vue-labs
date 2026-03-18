<template>
  <header class="header">
    <div class="header-content">
      <h1>day2</h1>
      <nav class="header-nav">
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/add">Add Data</a></li>
          <li><a href="#/table">View Table</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'My Application'
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
  font-size: 1.8rem;
}

.header-nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.header-nav a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.header-nav a:hover {
  color: #3498db;
}
</style>
