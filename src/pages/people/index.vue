<template>

  <Introduce :clients-config="clientsConfig" />

  <Grid :grid />

</template>

<script setup>
import Introduce from "@/components/Intorduce.vue"
import {usePeopleGird, usePeopleIntroduce} from "@/config/index.js"
import Grid from "@/components/Grid.vue"

const clientsConfig = usePeopleIntroduce()
const grid = usePeopleGird()

defineOptions({ name: 'people' })
</script>

<style scoped>

</style>
