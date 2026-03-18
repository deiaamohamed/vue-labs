<template>
  <div class="table-page">
    <div class="page-container">
      <Sidebar />
      <div class="table-container">
        <h2>Records Table</h2>
        <div class="table-actions">
          <a href="#/add" class="btn btn-primary">Add New Record</a>
          <button v-if="records.length > 0" @click="clearAllRecords" class="btn btn-danger">Clear All</button>
        </div>
        <div v-if="records.length === 0" class="no-data">
          <p>No records found. <a href="#/add">Add one now</a></p>
        </div>
        <table v-else class="records-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>City</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in records" :key="record.id">
              <td>{{ index + 1 }}</td>
              <td>{{ record.name }}</td>
              <td>{{ record.city }}</td>
              <td>{{ record.date }}</td>
              <td>
                <a :href="`#/edit/${record.id}`" class="btn btn-edit">Edit</a>
                <button @click="deleteRecord(record.id)" class="btn btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="records.length > 0" class="table-summary">
          <p>Total Records: <strong>{{ records.length }}</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'TableView',
  components: {
    Sidebar
  },
  data() {
    return {
      records: []
    }
  },
  mounted() {
    this.loadRecords()
    window.addEventListener('storage', this.loadRecords)
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.loadRecords)
  },
  methods: {
    loadRecords() {
      this.records = JSON.parse(localStorage.getItem('records')) || []
    },
    deleteRecord(id) {
      if (confirm('Are you sure you want to delete this record?')) {
        this.records = this.records.filter(record => record.id !== id)
        localStorage.setItem('records', JSON.stringify(this.records))
      }
    },
    clearAllRecords() {
      if (confirm('Are you sure you want to clear all records?')) {
        this.records = []
        localStorage.setItem('records', JSON.stringify(this.records))
      }
    }
  }
}
</script>

<style scoped>
.table-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ecf0f1;
}

.page-container {
  display: flex;
  flex: 1;
}

.table-container {
  flex: 1;
  padding: 2rem;
  background-color: #ecf0f1;
}

.table-container h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.table-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.8rem 1.5rem;
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

.btn-danger {
  background-color: #e74c3c;
  color: white;
}

.btn-danger:hover {
  background-color: #c0392b;
}

.btn-edit {
  background-color: #27ae60;
  color: white;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  margin-right: 0.3rem;
}

.btn-edit:hover {
  background-color: #229954;
}

.btn-delete {
  background-color: #e67e22;
  color: white;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
}

.btn-delete:hover {
  background-color: #d35400;
}

.no-data {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.no-data p {
  color: #7f8c8d;
  margin: 0;
}

.no-data a {
  color: #3498db;
  text-decoration: none;
}

.no-data a:hover {
  text-decoration: underline;
}

.records-table {
  width: 100%;
  background: white;
  border-collapse: collapse;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.records-table thead {
  background-color: #34495e;
  color: white;
}

.records-table th {
  padding: 1rem;
  text-align: left;
  font-weight: bold;
}

.records-table td {
  padding: 1rem;
  border-bottom: 1px solid #ecf0f1;
}

.records-table tbody tr {
  transition: background-color 0.3s;
}

.records-table tbody tr:hover {
  background-color: #f8f9fa;
}

.table-summary {
  margin-top: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.table-summary p {
  margin: 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.table-summary strong {
  color: #3498db;
}
</style>
