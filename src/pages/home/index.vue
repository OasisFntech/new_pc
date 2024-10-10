<template>
    <div class="w-full">
        <video
            autoplay
            muted
            loop
            class="w-full"
            src="/assets/cover_video.mp4"
        />

        <Grid :grid="home_grid" />

        <Tutor />

        <News />
    </div>
</template>

<script setup>
import Grid from '@/components/Grid.vue'
import Tutor from '@/components/Tutor.vue'
import News from '@/components/News.vue'
import { home_grid } from '@/config/index.js'

defineOptions({ name: 'home' })
</script>

<style scoped>

</style>
