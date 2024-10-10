<template>
    <div>
        <SummaryHead :title="$t('who.dynamicTitle')" image="../assets/who_head.jpg" />

        <Introduce :clients-config="clientsConfig" />

        <!-- 数据统计 -->
        <div class="at-a-glance">
          <h2>{{ $t('who.summary.title') }}</h2>
          <div class="stats-container">
            <div class="stat-box">
              <h3>{{ $t('who.summary.stats[0].value') }}</h3>
              <p><strong>{{ $t('who.summary.stats[0].description') }}</strong></p>
              <p>{{ $t('who.summary.stats[0].date') }}</p>
            </div>
            <div class="stat-box">
              <h3>{{ $t('who.summary.stats[1].value') }}</h3>
              <p><strong>{{ $t('who.summary.stats[1].description') }}</strong></p>
              <p>{{ $t('who.summary.stats[1].date') }}</p>
            </div>
            <div class="stat-box">
              <h3>{{ $t('who.summary.stats[2].value') }}</h3>
              <p><strong>{{ $t('who.summary.stats[2].description') }}</strong></p>
              <p>{{ $t('who.summary.stats[2].date') }}</p>
            </div>
          </div>
        </div>

        <Grid :grid />

        <Tutor />

        <News />
    </div>
</template>

<script setup>
import News from '@/components/News.vue'
import Tutor from '@/components/Tutor.vue'
import Introduce from "@/components/Intorduce.vue"
import {useWhoGird} from "@/config/index.js"
import SummaryHead from "@/components/SummaryHead.vue"
import Grid from "@/components/Grid.vue";

const clientsConfig = useWhoGird(1)
const grid = useWhoGird()

defineOptions({ name: 'what-we-do' })
</script>

<style scoped>

</style>
