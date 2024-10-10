<template>
    <div>

        <Introduce :clients-config="clientsConfig" />

        <Tutor />

        <News />
    </div>
</template>

<script setup>
import News from '@/components/News.vue'
import Tutor from '@/components/Tutor.vue'
import Introduce from "@/components/Intorduce.vue"
import {useWhoIntroduce} from "@/config/index.js"

const clientsConfig = useWhoIntroduce()

defineOptions({ name: 'what-we-do' })
</script>

<style scoped>

</style>
