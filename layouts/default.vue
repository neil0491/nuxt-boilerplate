<script setup lang="ts">
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

const { locale, locales } = useI18n();
const supportedLocales = locales.value as Array<LocaleObject>;

const router = useRouter();
const switchLocalePath = useSwitchLocalePath();

function onLocaleChanged(event: Event) {
  const target = event.target as HTMLInputElement;
  router.replace({ path: switchLocalePath(target.value) });
}

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true
});

const htmlAttrs = computed(() => head.value.htmlAttrs!);
</script>
<template>
  <Html :lang="htmlAttrs.lang">
    <Body>
      <header>
        <LinkLocale to="/">{{ $t("menu.home") }}</LinkLocale>
        <LinkLocale to="about">{{ $t("menu.about") }}</LinkLocale>
        <select :value="locale" @change="onLocaleChanged">
          <option v-for="loc in supportedLocales" :key="loc.code" :value="loc.code">
            {{ loc.code }}
          </option>
        </select>
      </header>
      <slot></slot>
    </Body>
  </Html>
</template>
