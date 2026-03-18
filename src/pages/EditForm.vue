<template>
  <div class="edit-page">
    <div class="page-container">
      <Sidebar />
      <div class="form-container">
        <h2>Edit Record</h2>
        <div v-if="notFound" class="error-message">
          <p>Record not found</p>
          <a href="#/table" class="btn btn-secondary">Back to Table</a>
        </div>
        <form v-else @submit.prevent="updateRecord" class="form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input 
              id="name"
              v-model="formData.name" 
              type="text" 
              placeholder="Enter name"
              required
            />
          </div>
          <div class="form-group">
            <label for="city">City:</label>
            <input 
              id="city"
              v-model="formData.city" 
              type="text" 
              placeholder="Enter city"
              required
            />
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Update Record</button>
            <a href="#/table" class="btn btn-secondary">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'EditForm',
  components: {
    Sidebar
  },
  data() {
    return {
      recordId: null,
      formData: {
        name: '',
        city: ''
      },
      notFound: false
    }
  },
  mounted() {
    this.recordId = this.$route.params.id
    this.loadRecord()
  },
  methods: {
    loadRecord() {
      const records = JSON.parse(localStorage.getItem('records')) || []
      const record = records.find(r => r.id === parseInt(this.recordId))
      
      if (record) {
        this.formData.name = record.name
        this.formData.city = record.city
      } else {
        this.notFound = true
      }
    },
    updateRecord() {
      if (this.formData.name.trim() && this.formData.city.trim()) {
        const records = JSON.parse(localStorage.getItem('records')) || []
        const index = records.findIndex(r => r.id === parseInt(this.recordId))
        
        if (index !== -1) {
          records[index].name = this.formData.name
          records[index].city = this.formData.city
          localStorage.setItem('records', JSON.stringify(records))
          this.$router.push('/table')
        }
      }
    }
  }
}
</script>

<style scoped>
.edit-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ecf0f1;
}

.page-container {
  display: flex;
  flex: 1;
}

.form-container {
  flex: 1;
  padding: 2rem;
  background-color: #ecf0f1;
}

.form-container h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;
  text-align: center;
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

.error-message {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 500px;
  margin: 0 auto;
}

.error-message p {
  color: #e74c3c;
  margin-bottom: 1rem;
  font-weight: bold;
}
</style>
