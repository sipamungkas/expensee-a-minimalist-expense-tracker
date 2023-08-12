<script setup lang="ts">
import { BanknotesIcon, CreditCardIcon } from '@heroicons/vue/24/solid'
import { ApexOptions } from 'apexcharts'

const options = ref<ApexOptions>({
    legend: {
        position: 'bottom'
    },
    labels: ['mango', 'orange', 'banana', 'watermelon'],

})
const series = ref([
    44, 41, 25, 6
]);


</script>

<template>
    <div class="flex flex-1 flex-col">
        <div class="flex flex-1 flex-wrap gap-2">
            <PocketItem title="Cash" balance="2000" class="bg-orange-400">
                <BanknotesIcon class='h-8 w-8 text-white' />
            </PocketItem>
            <PocketItem title="Saving" balance="2000">
                <CreditCardIcon class='h-8 w-8 text-white' />
            </PocketItem>
            <AddPocketItem />
        </div>
        <div class="flex flex-1 flex-wrap gap-2 mt-1 md:mt-5">
            <div class="w-[calc(33%-1rem)] card">
                <h3 class="font-semibold text-lG">Overview</h3>
                <div class="border-b-[1px] border-gray-500/25 mt-2 lg:mt-3" />
                <div class="mt-5 lg:mt-10">
                    <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>