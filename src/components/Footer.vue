<template>
    <footer class="mt-20 w-full bottom-0 bg-red-800 pb-6">
      <div class="container mx-auto px-4">
        <hr class="mb-6 border-b-1 border-red-500" />
        <div class="flex flex-wrap justify-center">
          <a class="text-white text-sm font-bold block py-1 px-3">Copyright © {{date}} | Chukwu Divine</a>
        </div>
      </div>
    </footer>
  </template>
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        date: new Date().getFullYear()
      }
    }
  }
  </script>