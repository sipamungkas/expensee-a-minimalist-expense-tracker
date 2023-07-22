<script setup>
const { locale } = useI18n()
</script>

<template>
    <h1>{{ locale }} {{ $t('welcome') }}</h1>
</template>