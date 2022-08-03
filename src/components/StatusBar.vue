<script setup lang="ts">
  interface Props {
    title: (Title:string) => string,
    bgSwatch: () => string
  }

const enTitle = function (title="StatusBar"): string {
    return title + "-Container"
  }

const props = withDefaults(defineProps<Props>(),{
  title: (title="StatusBar") => title + "-Container",
  bgSwatch: () => "bg-stone-200"
})

</script>

<template>
  <div m-o p-0 container sticky>
    <div :id="props.title()"
    order-first
    w-100%
    :class="props.bgSwatch()"
    >
      <h1>first component</h1>
    </div>
  </div>
</template>