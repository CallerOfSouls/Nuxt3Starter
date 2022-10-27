<template>
    <div class="h-full w-full border-b" :v-editable="blok">
        {{blok.text}}
    </div>
</template>
<script setup lang="ts">
var props = defineProps<{blok:{
    text:string,
    type:string
}}>();
</script>