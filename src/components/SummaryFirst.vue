<template>
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
</template>

<script setup>

import { ref, defineProps } from 'vue'

const props = defineProps({
  numConfig: {
    type: Object,
    required: true,
  }
})

defineOptions({ name: 'SummaryFirst' })
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
