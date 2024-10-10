<template>
    <div class="w-full">
        <video
            autoplay
            muted
            loop
            class="w-full"
            src="/assets/cover_video.mp4"
        />

        <Tutor />

        <News />
    </div>
</template>

<script setup>
import Tutor from '@/components/Tutor.vue'
import News from '@/components/News.vue'

defineOptions({ name: 'home' })
</script>

<style scoped>

</style>
