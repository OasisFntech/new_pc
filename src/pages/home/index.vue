<template>
    <div class="w-full">
        <video
            autoplay
            muted
            loop
            class="w-full"
            src="/assets/cover_video.mp4"
        />

        <Related />
    </div>
</template>

<script setup>
import Related from '@/components/Related.vue'

defineOptions({ name: 'home' })
</script>

<style scoped>

</style>
