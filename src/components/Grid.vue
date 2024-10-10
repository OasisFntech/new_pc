<template>
    <div class="main-container grid grid-cols-4 gap-x-12 gap-y-[150px] py-[150px]">
        <div
            v-for="(item, i) in grid"
            :key="i"
            :class="{ 'border-t border-border pt-8 grid grid-rows-1': item }"
        >
            <template v-if="item">
                <div class="">
                    <div class="text-gradient_from text-[34px]">
                        {{ item.title }}
                    </div>
                    <div>
                        {{ item.subhead }}
                    </div>
                </div>
                <img
                    :src="`/assets/grid_cover_${item.cover}.jpg`"
                    :alt="item.title"
                    class="mt-7"
                    style="aspect-ratio: 264 / 145;"
                >
            </template>
        </div>
    </div>
</template>

<script setup>
defineProps({
    grid: {
        type: Array,
        required: true
    }
})

defineOptions({ name: 'Grid' })
</script>

<style scoped>

</style>
