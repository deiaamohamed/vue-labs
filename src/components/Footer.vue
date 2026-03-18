<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2026 Vue.js Demo Application. All rights reserved.</p>
      <div class="footer-links">
        <a href="#/">Home</a>
        <a href="#/">Privacy</a>
        <a href="#/">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
      links: [
        { text: 'Home', url: '/' },
        { text: 'Privacy', url: '/privacy' },
        { text: 'Contact', url: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content p {
  margin: 0 0 1rem 0;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.footer-links a {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: white;
}
</style>
