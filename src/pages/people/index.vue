<template>

  <Introduce :clients-config="clientsConfig" />

</template>

<script setup>
import Introduce from "@/components/Intorduce.vue"
import {usePeopleIntroduce} from "@/config/index.js"

const clientsConfig = usePeopleIntroduce()

defineOptions({ name: 'people' })
</script>

<style scoped>

</style>
