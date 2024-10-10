<template>

  <Introduce :clients-config="clientsConfig" />

  <Grid :grid />

</template>

<script setup>
import Introduce from "@/components/Intorduce.vue"
import {usePeopleGird} from "@/config/index.js"
import Grid from "@/components/Grid.vue"

const clientsConfig = usePeopleGird(1)
const grid = usePeopleGird()

defineOptions({ name: 'people' })
</script>

<style scoped>

</style>
