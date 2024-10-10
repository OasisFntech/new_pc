<template>
    <Cover :title="$t('who.dynamicTitle')" source="/assets/cover_14.jpg"/>

    <Introduce :clients-config="clientsConfig"/>

    <Grid :grid/>

</template>

<script setup>
import { usePeopleGird } from '@/config/index.js'
import Introduce from '@/components/Intorduce.vue'
import Grid from '@/components/Grid.vue'
import Cover from '@/components/Cover.vue'

const clientsConfig = usePeopleGird(1)
const grid = usePeopleGird()

defineOptions({ name: 'people' })
</script>

<style scoped>

</style>
