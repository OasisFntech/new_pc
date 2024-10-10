<template>

    <Introduce :clients-config="clientsConfig" />

    <Grid :grid />

</template>

<script setup>
import Introduce from "@/components/Intorduce.vue"
import {useWhatGird, useWhatIntroduce} from "@/config/index.js"
import Grid from "@/components/Grid.vue";

const clientsConfig = useWhatIntroduce()
const grid = useWhatGird()

defineOptions({ name: 'who-we-do' })
</script>

<style scoped>

</style>
