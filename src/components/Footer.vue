<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="bg-gray-800 text-gray-400 py-6">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p class="text-sm">&copy; 2024 MyMovieSite. All rights reserved.</p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="#" class="hover:text-yellow-400">Privacy Policy</a>
        <a href="#" class="hover:text-yellow-400">Terms of Service</a>
        <a href="#" class="hover:text-yellow-400">Contact Us</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
