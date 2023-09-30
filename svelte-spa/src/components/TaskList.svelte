<!-- src/components/TaskList.svelte -->

<script>
    let tasks = [];
  
    async function fetchTasks() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/tasks'); // Replace with your API URL
        const data = await response.json();
        tasks = data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }
  
    import { onMount } from 'svelte';
  
    onMount(fetchTasks);
  </script>
  
  <h1>Task List</h1>
  
  <ul>
    {#each tasks as task (task.id)}
      <li>{task.title}</li>
    {/each}
  </ul>
  