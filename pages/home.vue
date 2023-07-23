<script setup>
const { locale } = useI18n()
</script>

<template>
    <h1 class="text-lg">{{ locale }} {{ $t('welcome') }}</h1>
</template>