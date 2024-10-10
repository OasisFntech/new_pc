<template>
    <Cover :title="$t('who.dynamicTitle')" source="/assets/cover_15.jpg" />

    <Introduce :clients-config="clientsConfig"/>

    <Grid :grid/>

</template>

<script setup>
import Introduce from '@/components/Intorduce.vue'
import Cover from '@/components/Cover.vue'
import Grid from '@/components/Grid.vue'
import { useSustainGird } from '@/config/index.js'

const clientsConfig = useSustainGird(1)

const grid = useSustainGird()

defineOptions({ name: 'sustainability' })
</script>

<style scoped>

</style>
