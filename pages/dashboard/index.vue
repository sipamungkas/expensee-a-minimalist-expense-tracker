<script setup>
import { BanknotesIcon, CreditCardIcon } from '@heroicons/vue/24/solid'
</script>

<template>
    <div class="flex flex-1 flex-wrap gap-2">
        <PocketItem title="Cash" balance="2000" class="bg-orange-400">
            <BanknotesIcon class='h-8 w-8 text-white' />
        </PocketItem>
        <PocketItem title="Saving" balance="2000">
            <CreditCardIcon class='h-8 w-8 text-white' />
        </PocketItem>
        

    </div>
</template>