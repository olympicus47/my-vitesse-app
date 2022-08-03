<script setup lang="ts">
interface Props {
  title: () => String,
}

const props = withDefaults(defineProps<Props>(),{
  title: () => "StatusBar",
  bgSwatch: () => "bg-stone-200"
})

</script>

<template>
  <div m-o p-0 container sticky>
    <div :id="props.title() + '-Container' "
    order-first
    w-100%
    :class="props.bgSwatch()"
    >
      <h1>first component</h1>
    </div>
  </div>
</template>