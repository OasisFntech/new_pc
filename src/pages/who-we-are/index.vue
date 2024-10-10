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
                    <div class="text-[50px] text-gradient_from font-bold">
                        {{ $t(`who.summary.stats[${n - 1}].value`) }}
                    </div>
                    <div class="my-5 text-lg w-[200px]">
                        {{ $t(`who.summary.stats[${n - 1}].description`) }}
                    </div>
                    <div class="text-xs">
                        {{ $t(`who.summary.stats[${n - 1}].date`) }}
                    </div>
                </div>

                <!--<div class="stat-box">-->
                <!--    <h3>{{ $t('who.summary.stats[0].value') }}</h3>-->
                <!--    <p><strong>{{ $t('who.summary.stats[0].description') }}</strong></p>-->
                <!--    <p>{{ $t('who.summary.stats[0].date') }}</p>-->
                <!--</div>-->
                <!--<div class="stat-box">-->
                <!--    <h3>{{ $t('who.summary.stats[1].value') }}</h3>-->
                <!--    <p><strong>{{ $t('who.summary.stats[1].description') }}</strong></p>-->
                <!--    <p>{{ $t('who.summary.stats[1].date') }}</p>-->
                <!--</div>-->
                <!--<div class="stat-box">-->
                <!--    <h3>{{ $t('who.summary.stats[2].value') }}</h3>-->
                <!--    <p><strong>{{ $t('who.summary.stats[2].description') }}</strong></p>-->
                <!--    <p>{{ $t('who.summary.stats[2].date') }}</p>-->
                <!--</div>-->
            </div>
        </div>

        <Article cover="/assets/cover_12.jpg" class="bg-grey py-[150px] mb-[150px]">
            Over more than three decades, we have built an outstanding track record and created long‐term value for our stakeholders: helping companies thrive, institutional investors and shareholders achieve their goals, and creating an inclusive working environment where our colleagues are supported to succeed.
        </Article>

        <Article cover="/assets/cover_13.jpg" reverse>
            As we continue to grow, we maintain the same relentless focus on delivering sustainable value, knowing that our success will also be shaped by the environmental, social and governance actions we take.
        </Article>

        <Grid :grid/>

        <image-box source="/assets/who_cover.jpg">
            <div class="cover-title">
                Benoît Durteste, CEO & CIO, on how ICG creates value and drives growth
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
    @apply border border-primary flex flex-col items-center py-14 text-center;
}
</style>
