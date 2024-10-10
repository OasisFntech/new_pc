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

            <div class="title">
                {{ $t('home.dynamicTitle') }}
            </div>
        </image-box>

        <div class="bg-white">
            <div class="main-container mt-[200px] mb-[150px] flex items-center justify-between">
                <div class="w-[600px]">
                    <div class="text-gradient_from text-[70px] mb-5">
                        {{ $t('home.clientsTitle') }}
                    </div>

                    <div class="text-2xl normal-case leading-9">
                      {{ $t('home.clientsDescription') }}
                    </div>

                    <div class="text-2xl normal-case leading-9 mt-5 ml-3">
                      {{ $t('home.explorePlatform') }}
                    </div>

                    <div class="text-2xl normal-case leading-9 ml-3">
                      {{ $t('home.contactClientRelations') }}
                    </div>
                </div>

                <div class="w-[350px] text-[40px]">
                    <div class="text-[75%] leading-[48px]">
                      {{ $t('home.quote') }}
                    </div>
                    <div class="text-xl mt-16">
                      {{ $t('home.author') }}
                    </div>
                </div>
            </div>
        </div>

        <image-box
            source="/assets/home_cover.jpg"
            container-class="h-screen"
        >
            <div class="title">
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

const grid = useHomeGird()

defineOptions({ name: 'home' })
</script>

<style scoped>
.title {
   @apply absolute bottom-0 px-32 pb-28 text-white text-[50px] whitespace-pre-wrap leading-[58px];
}
</style>
