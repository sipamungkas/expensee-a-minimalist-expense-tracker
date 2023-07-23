<script setup>
import { BanknotesIcon, CreditCardIcon } from '@heroicons/vue/24/solid'
</script>

<template>
    <div class="flex flex-1 flex-wrap gap-2">
        <AccountItem title="Cash" balance="2000" class="bg-orange-400">
            <BanknotesIcon class='h-8 w-8 text-white' />
        </AccountItem>
        <AccountItem title="Cash" balance="2000">
            <BanknotesIcon class='h-8 w-8 text-white' />
        </AccountItem>

    </div>
</template>