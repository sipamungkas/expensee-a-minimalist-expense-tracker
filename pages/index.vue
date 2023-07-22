<script setup>
const counter = useCounter()

const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

</script>

<template>
    <div style="gap: 2px;">
        <p>
            Counter: {{ counter.n }}. Double: {{ counter.double }}
        </p>
        <button class="button" @click="counter.increment(1)">+1</button>
        <button class="button" @click="counter.decrementToZero">Reset to zero</button>
        <br>
        <NuxtLink :to="switchLocalePath(locale === 'en' ? 'id' : 'en')">
            {{ locale === 'en' ? 'change to Indonesia' : 'ubah ke English' }}
        </NuxtLink>
        <br>

        <!-- <NuxtWelcome /> -->
        {{ $t('welcome') }}
        <NuxtLink :to="localePath('/home')">go to home with locale</NuxtLink>
        <NuxtLink :to="localePath('/')">go to index with locale</NuxtLink>
    </div>
</template>

<style scoped>
.button {
    padding: 05.rem 1rem;
}
</style>
