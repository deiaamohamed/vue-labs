# Vue.js Data Management Application

A Vue.js application with reusable components and data management features.

## Project Structure

```
src/
├── components/
│   ├── Header.vue      - Navigation header with links
│   ├── Sidebar.vue     - Side navigation menu
│   ├── Footer.vue      - Footer component
│   └── Content.vue     - Main dashboard content with static data
├── pages/
│   ├── Home.vue        - Dashboard page with sidebar and content
│   ├── AddForm.vue     - Form page to add name and city data
│   └── TableView.vue   - Table page to display all records
├── App.vue             - Main app component with routing
├── main.js             - Vue app entry point
└── router.js           - Vue Router configuration

index.html             - HTML entry point
package.json           - Project dependencies
vite.config.js         - Vite configuration
```

## Features

1. **Header Component** - Static navigation with links to all pages
2. **Sidebar Component** - Static navigation menu with styling
3. **Footer Component** - Static footer with links
4. **Content Component** - Dashboard with static data cards
5. **Add Form Page** - Form to add name and city data
6. **Table Page** - Displays all added records with delete functionality
7. **Data Persistence** - Uses localStorage to save/retrieve data
8. **Responsive Design** - Clean and modern UI

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## How to Use

1. **Home Page** - View the dashboard with static data
2. **Add Data** - Fill in the form with name and city, then submit
3. **View Table** - See all added records in a table format
4. **Delete Records** - Click delete button to remove individual records
5. **Clear All** - Remove all records at once

## Data Storage

Records are stored in the browser's localStorage, so they persist between page refreshes but are local to the browser.

Each record contains:
- ID (timestamp)
- Name
- City
- Date Added
