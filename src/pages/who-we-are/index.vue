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
import {useWhoGird, useWhoIntroduce} from "@/config/index.js"
import SummaryHead from "@/components/SummaryHead.vue"
import Grid from "@/components/Grid.vue";

const clientsConfig = useWhoIntroduce()
const grid = useWhoGird()

defineOptions({ name: 'what-we-do' })
</script>

<style scoped>

.at-a-glance {
  margin: 20px 0;
  text-align: center;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.stat-box {
  border: 2px solid blue;
  padding: 20px;
  width: 30%;
  border-radius: 8px;
}

.stat-box h3 {
  font-size: 2.5em;
  margin: 0;
}

.stat-box p {
  margin: 5px 0;
}

</style>
