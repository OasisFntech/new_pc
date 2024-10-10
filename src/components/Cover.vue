<template>
    <div class="cover">
        <div class="h-full main-container flex items-center justify-center">
            <div class="text-white text-[42px] flex-1 w-1">
                {{ title }}
            </div>

            <div class="w-[640px]">
                <img
                    :src="source"
                    :alt="`cover-${id}`"
                    class="w-full"
                >
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    source: {
        type: [ String, Object ],
        required: true
    }
})

const id = useId()

defineOptions({ name: 'Cover' })
</script>

<style scoped>
.cover {
    @apply h-screen bg-gradient_from;
}
</style>
