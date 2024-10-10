<template>

  <Introduce :clients-config="clientsConfig" />

</template>

<script setup>
import Introduce from "@/components/Intorduce.vue"
import {useSustainIntroduce} from "@/config/index.js"

const clientsConfig = useSustainIntroduce()

defineOptions({ name: 'sustainability' })
</script>

<style scoped>

</style>
