<template>

  <Introduce :clients-config="clientsConfig" />

  <Grid :grid />

</template>

<script setup>
import Introduce from "@/components/Intorduce.vue"
import {useSustainGird} from "@/config/index.js"
import Grid from "@/components/Grid.vue"

const clientsConfig = useSustainGird(1)

const grid = useSustainGird()

defineOptions({ name: 'sustainability' })
</script>

<style scoped>

</style>
