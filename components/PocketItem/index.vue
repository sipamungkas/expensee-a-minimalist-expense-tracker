<script setup lang="ts">
interface Props {
    title: string,
    balance: string,
    class?: string
}
const props = defineProps<Partial<Props>>()

const classValue = computed(() => (props.class ? props.class : 'bg-purple-400'))

</script>


<template>
    <div class="cursor-pointer flex flex-row px-4 py-2 items-center gap-3 rounded-xl w-[100%] md:w-[20%] hover:opacity-90"
        :class="classValue">
        <slot />
        <div>
            <h4 class="text-white/80 font-bold">{{ title }}</h4>
            <span class="text-white font-semibold">IDR {{ balance }}K</span>
        </div>
    </div>
</template>