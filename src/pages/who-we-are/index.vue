<template>
    <div>
        <Cover :title="$t('who.dynamicTitle')" source="/assets/who_head.jpg"/>

        <Introduce :clients-config="clientsConfig"/>

        <!-- 数据统计 -->
        <div class="main-container">
            <div class="text-[42px] text-gradient_from mb-5">
                {{ $t('who.summary.title') }}
            </div>

            <div class="grid grid-cols-3 gap-12 pb-[150px]">
                <div
                    v-for="n in 3"
                    :key="n"
                    class="items"
                >
                    <div class="text-[40px] text-gradient_from font-bold">
                        {{ $t(`who.summary.stats[${n - 1}].value`) }}
                    </div>
                    <div class="my-2 text-base w-[200px] font-bold">
                        {{ $t(`who.summary.stats[${n - 1}].description`) }}
                    </div>
                    <div class="text-xs">
                        {{ $t(`who.summary.stats[${n - 1}].date`) }}
                    </div>
                </div>
            </div>
        </div>

        <Article cover="/assets/cover_12.jpg" class="bg-grey py-[150px] mb-[150px]">
            <div class="text-[28px]">{{ $t('who.articles.first') }}</div>
        </Article>

        <Article cover="/assets/cover_13.jpg" reverse>
            <div class="text-[28px]">{{ $t('who.articles.second') }}</div>
        </Article>

        <Grid :grid/>

        <image-box source="/assets/who_cover.jpg">
            <div class="cover-title">
              {{ $t('who.coverTitle') }}
            </div>
        </image-box>

        <Tutor/>

        <News/>
    </div>
</template>

<script setup>
import { useWhoGird } from '@/config/index.js'
import News from '@/components/News.vue'
import Tutor from '@/components/Tutor.vue'
import Introduce from '@/components/Intorduce.vue'
import Cover from '@/components/Cover.vue'
import Grid from '@/components/Grid.vue'
import Article from '@/components/Article.vue'
import ImageBox from '@/components/ImageBox.vue'

const clientsConfig = useWhoGird(1)
const grid = useWhoGird()

defineOptions({ name: 'what-we-do' })
</script>

<style scoped>
.items {
    @apply border border-primary flex flex-col items-center py-10 text-center;
}
</style>
