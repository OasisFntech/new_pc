<template>
    <div class="main-container text-lg leading-7 my-[150px]">
        <div class="flex items-center justify-between mb-10">
            <div class="text-[42px]">
                Related people
            </div>

            <div class="text-primary text-3xl">
                <Icon class="cursor-pointer tutorPrev">
                    <ArrowCircleLeft16Filled />
                </Icon>

                <Icon class="ml-2.5 cursor-pointer tutorNext">
                    <ArrowCircleRight16Filled />
                </Icon>
            </div>
        </div>

        <swiper-container
            slides-per-view="4"
            space-between="40"
            css-mode="true"
            :navigation="{ enable: true, prevEl: '.tutorPrev', nextEl: '.tutorNext' }"
            class="text-sm"
        >
            <swiper-slide
                v-for="{ id, portrait, name, categoryName, workCompany } in tutor"
                :key="id"
            >
                <div style="aspect-ratio: 274 / 151;">
                    <img
                        :src="portrait"
                        :alt="name"
                        class="w-full h-full"
                    >
                </div>

                <div class="mt-7 font-bold">
                    {{ name }}
                </div>

                <div class="italic">
                    {{ categoryName }}
                </div>

                <div class="mt-4">
                    {{ workCompany }}
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle'
register()

import { useTutorStore } from '@/pinia/index.js'
import { ArrowCircleLeft16Filled, ArrowCircleRight16Filled } from '@vicons/fluent'
import { Icon } from '@vicons/utils'

const { tutor } = storeToRefs(useTutorStore())

defineOptions({ name: 'Tutor' })
</script>

<style scoped>
.swiper-button-disabled {
    @apply opacity-30;
}
</style>
