<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <h2>Menu</h2>
      <ul class="sidebar-menu">
        <li><a href="#/add">Add New Entry</a></li>
        <li><a href="#/table">View All Entries</a></li>
      </ul>

    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      menu: [
        { title: 'Dashboard', link: '/' },
        { title: 'Add New Entry', link: '/add' },
        { title: 'View All Entries', link: '/table' }
      ]
    }
  }
}
</script>

<style scoped>
.sidebar {
  background-color: #34495e;
  color: white;
  min-height: calc(100vh - 200px);
  width: 250px;
  padding: 1rem;
  box-shadow: 2px 0 4px rgba(0,0,0,0.1);
}

.sidebar-content h2 {
  margin-top: 0;
  color: #3498db;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.sidebar-menu li {
  margin: 0.5rem 0;
}

.sidebar-menu a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.sidebar-menu a:hover {
  background-color: #2c3e50;
}

</style>
