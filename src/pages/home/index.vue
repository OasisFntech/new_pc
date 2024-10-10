<template>
    <div class="w-full">
        <image-box>
            <template #image>
                <video
                    autoplay
                    muted
                    loop
                    class="w-full"
                    src="/assets/cover_video.mp4"
                />
            </template>

            <div class="cover-title">
                {{ $t('home.dynamicTitle') }}
            </div>
        </image-box>

        <Introduce :clients-config="clientsConfig" />

        <image-box
            source="/assets/home_cover.jpg"
            container-class="h-screen"
        >
            <div class="cover-title">
              {{ $t('home.imgTitle') }}
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
import Introduce from "@/components/Intorduce.vue"

const clientsConfig = useHomeGird(1)
const grid = useHomeGird()

defineOptions({ name: 'home' })
</script>

<style scoped>
</style>
