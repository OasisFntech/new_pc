<template>
    <div class="article">
        <div class="main-container flex gap-[75px]" :class="{ 'flex-row-reverse': reverse }">
            <div class="flex-1 w-1 text-3xl leading-[45px]">
                <slot />
            </div>

            <div class="w-[380px]">
                <img :src="cover" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    cover: {
        type: [ String, Object ],
        required: true
    },
    reverse: Boolean
})

defineOptions({ name: 'Article' })
</script>

<style scoped>

</style>
