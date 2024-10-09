<template>
    <div class="footer text-white">
        <div class="main-container pt-[90px] pb-[105px]">
            <div class="relative">
                <div class="grid grid-cols-4">
                    <div
                        v-for="({ title, children }, i) in guide"
                        :key="i"
                    >
                        <div class="text-4xl py-6 border-t border-b border-white">
                            {{ title }}
                        </div>

                        <div class="mt-8">
                            <div
                                v-for="(c, ci) in children"
                                :key="ci"
                                class="leading-9 text-lg hover:text-primary"
                            >
                                {{ c.title }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="absolute right-0 bottom-5 border-t border-white flex justify-between text-lg translate-y-full pt-5">
                    <div>
                        <div class="text-3xl leading-8">
                            LSE:ICG
                        </div>
                        <div class="mt-1.5 mb-2.5 leading-[18px]">
                            ICG plc
                        </div>
                        <div class="text-white/[.6] leading-[18px]">
                            18 September 2024, 10:55 BST
                        </div>
                    </div>

                    <div class="ml-[90px] w-[300px]">
                        <div class="leading-[18px]">
                            -0.60%
                        </div>
                        <div class="text-[40px] mt-1.5 leading-10">
                            2,324.00p
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-[70px] text-sm">
                © 2024 ICG plc
            </div>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n()

const guide = computed(() => [
    {
        title: 'Policies',
        children: [
            { title: 'Policies & disclosures' },
            { title: 'Cookies' },
            { title: 'Health and safety' },
            { title: 'Privacy' },
            { title: 'Responsible Investing Policy' },
            { title: 'US Consumer Privacy Notice' },
            { title: 'Website accessibility' },
            { title: 'Website terms of use' },
        ]
    },
    {
        title: 'Resources',
        children: [
            { title: 'Complaints Policy' },
            { title: 'Gender Pay Gap' },
            { title: 'Modern slavery statements' },
            { title: 'News & insights' },
            { title: 'Regulatory disclosures' },
            { title: 'ISO-27001 Certified' },
        ]
    },
    {
        title: 'Related',
        children: [
            { title: 'ICG Enterprise Trust' },
            { title: 'ICG Longbow SSUP' },
        ]
    },
    {
        title: 'Connect',
        children: [
            { title: 'Contact us' },
            { title: 'Email subscriptions' },
            { title: 'LinkedIn' },
            { title: 'X' },
            { title: 'Instagram' },
            { title: 'Vimeo' },
            { title: 'Job opportunities' },
        ]
    }
])

defineOptions({ name: 'Footer' })
</script>

<style scoped>
.footer {
    @apply w-full;
    background: var(--gradient-from);
}
</style>
