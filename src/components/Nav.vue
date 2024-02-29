<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/generate">Generate</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { RouterLink } from 'vue-router';
  
  const props = defineProps({
    // Props definition goes here (if any)
  });
  </script>
  
  <style>
  /* Optional styling for the navbar */
  nav {
    background-color: #333;
    padding: 10px 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: inline;
    margin-right: 10px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  