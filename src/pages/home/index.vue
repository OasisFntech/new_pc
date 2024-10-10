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
                {{
                    `Significant and resilient value\ncreation for our clients`
                }}
            </div>
        </image-box>

        <div class="bg-white">
            <div class="main-container mt-[200px] mb-[150px] flex items-center justify-between">
                <div class="w-[600px]">
                    <div class="text-gradient_from text-[70px] mb-5">
                        Clients
                    </div>

                    <div class="text-2xl normal-case leading-9">
                        As a global alternative asset manager we invest capital on behalf of our clients by developing long-term and resilient relationships that deliver sustainable value.
                    </div>
                </div>

                <div class="w-[350px] text-[40px]">
                    <div class="text-[75%] leading-[48px]">
                        We focus on consistently delivering performance for our clients through economic cycles. We value long term relationships and shared success with our clients and portfolio companies.
                    </div>
                    <div class="text-xl mt-16">
                        Benoit Durteste, CIO & CEO
                    </div>
                </div>
            </div>
        </div>

        <image-box
            source="/assets/home_cover.jpg"
            container-class="h-screen"
        >
            <div class="title">
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
.title {
   @apply absolute bottom-0 px-32 pb-28 text-white text-[50px] whitespace-pre-wrap leading-[58px];
}
</style>
