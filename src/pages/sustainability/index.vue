<template>

  <Introduce :clients-config="clientsConfig" />

  <Grid :grid />

</template>

<script setup>
import Introduce from "@/components/Intorduce.vue"
import {useSustainGird, useSustainIntroduce} from "@/config/index.js"
import Grid from "@/components/Grid.vue"

const clientsConfig = useSustainIntroduce()

const grid = useSustainGird()

defineOptions({ name: 'sustainability' })
</script>

<style scoped>

</style>
