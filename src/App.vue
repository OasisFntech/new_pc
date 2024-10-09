<template>
    <div class="min-w-[1200px]">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
