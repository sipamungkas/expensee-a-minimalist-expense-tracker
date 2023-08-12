<script setup lang="ts">


const classValue = computed(() => (props.class ? props.class : 'bg-purple-400'))

</script>


<template>
    <div
        class="cursor-pointer flex flex-row px-4 py-2 justify-center items-center gap-3 rounded-xl w-[100%] md:w-[20%] hover:opacity-90 border-dashed border-2 text-gray-600 hover:text-gray-950">
        <span class="">
            + {{ $t('dashboardContent.addPocket') }}
        </span>
    </div>
</template>