<template>
    <div class="w-full">
        <video
            autoplay
            muted
            loop
            class="w-full"
            src="/assets/cover_video.mp4"
        />

        <image-box
            source="/assets/home_cover.jpg"
            container-class="h-screen"
        >
            <div class="absolute bottom-0 px-32 pb-28 text-white text-[50px] whitespace-pre-wrap">
                {{
                    `US and Europe Private Company\nTrends: Resilience Sustained`
                }}
            </div>
        </image-box>

        <Grid :grid />

        <News />
    </div>
</template>

<script setup>
import Grid from '@/components/Grid.vue'
import News from '@/components/News.vue'
import { useHomeGird } from '@/config/index.js'
import ImageBox from '@/components/ImageBox.vue'

const grid = useHomeGird()

defineOptions({ name: 'home' })
</script>

<style scoped>

</style>
