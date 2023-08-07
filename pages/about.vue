<script setup lang="ts">
interface IResponse<T> {
  count: number;
  next: string;
  previous: string | null;
  results: T[];
}

interface IImage {
  large: string;
  thumbnail: string;
  medium: string;
  original: string;
}

interface IMountain {
  id: number;
  title: string;
  brief: string;
  url: string;
  image: IImage;
}

const { data, pending, error, refresh, status } = await useFetch<IResponse<IMountain>, any>(
  "https://api.zamon.uz/api/v3/uz/news/list",
  {
    onRequest({ request, options }) {
      // Set the request headers
      options.headers = options.headers || {};
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
    },
    onResponse({ request, response, options }) {
      // Process the response data
      // localStorage.setItem("token", response._data.token);
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
      console.log(response.status);
    }
  }
);
// console.log(data);
// console.log(pending);
// console.log(error);
</script>
<template>
  <div>
    <div v-if="pending">Loading</div>
    <div v-else-if="error">{{ error.statusCode }} {{ status }}</div>
    <div v-else>
      <div v-for="item in data?.results" :key="item.id">
        <h1>{{ item.title }}</h1>
        <img width="400" :src="item?.image?.medium" :alt="item?.title" loading="lazy" />
      </div>
    </div>
    <button @click="() => refresh()">refresh</button>
  </div>
</template>

<style lang="scss" scoped></style>
