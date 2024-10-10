<template>

    <Introduce :clients-config="clientsConfig" />

</template>

<script setup>
import Introduce from "@/components/Intorduce.vue"
import {useWhatIntroduce} from "@/config/index.js"

const clientsConfig = useWhatIntroduce()

defineOptions({ name: 'who-we-do' })
</script>

<style scoped>

</style>
