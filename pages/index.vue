<script setup lang="ts">
const { locale, localeCodes } = useI18n();
</script>
<template>
    <div>
        <div>{{ $t("welcome") }}</div>
        <div>Current Locale: {{ locale }}</div>
        <div>Codes Locale: {{ localeCodes }}</div>
    </div>
</template>
