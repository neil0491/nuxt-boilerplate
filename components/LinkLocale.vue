<template>
  <NuxtLink :to="localePath(to)"><slot></slot></NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ to: string }>();

const localePath = useLocalePath();
</script>
