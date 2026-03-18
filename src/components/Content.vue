<template>
  <main class="content">
    <div class="content-wrapper">
      <h2>Welcome</h2>
      <div class="welcome-message">
        <p>Select an option from the menu to get started.</p>
      </div>
      <div class="action-buttons">
        <a href="#/add" class="btn btn-primary">Add New Record</a>
        <a href="#/table" class="btn btn-secondary">View Records</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {}
  }
}
</script>

<style scoped>
.content {
  flex: 1;
  padding: 2rem;
  background-color: #ecf0f1;
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.content-wrapper h2 {
  color: #2c3e50;
  margin-top: 0;
}

.welcome-message {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.welcome-message p {
  margin: 0;
  color: #34495e;
  font-size: 1.1rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-secondary {
  background-color: #95a5a6;
  color: white;
}

.btn-secondary:hover {
  background-color: #7f8c8d;
}
</style>
