<template>
    <div class="main-container text-lg leading-7 my-[150px]">
        <div class="flex items-center justify-between mb-10">
            <div class="text-[42px]">
              {{ t('common.relateTint') }}
            </div>

            <div class="text-primary text-3xl">
                <Icon class="cursor-pointer newPrev">
                    <ArrowCircleLeft16Filled />
                </Icon>

                <Icon class="ml-2.5 cursor-pointer newsNext">
                    <ArrowCircleRight16Filled />
                </Icon>
            </div>
        </div>

        <swiper-container
            slides-per-view="3"
            space-between="48"
            css-mode="true"
            :navigation="{ enable: true, prevEl: '.newPrev', nextEl: '.newsNext' }"
        >
            <swiper-slide
                v-for="{ id, img, title, releaseDate } in news"
                :key="id"
            >
                <img
                    :src="img"
                    :alt="`news_cover_${id}`"
                    style="aspect-ratio: 191 / 105;"
                >

                <div class="mt-5 text-primary">
                    News
                </div>

                <div class="text-2xl font-medium">
                    {{ title }}
                </div>

                <div class="mt-4">
                    {{ releaseDate }}
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle'
register()

import { ArrowCircleLeft16Filled, ArrowCircleRight16Filled } from '@vicons/fluent'
import { Icon } from '@vicons/utils'
import { useNewsStore } from '@/pinia/index.js'
import { t } from '@/lang'

const { news } = storeToRefs(useNewsStore())

defineOptions({ name: 'Related' })
</script>

<style scoped>
.swiper-button-disabled {
    @apply opacity-30;
}
</style>
