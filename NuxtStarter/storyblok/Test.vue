<script setup lang="ts">
defineProps<{blok:{
    bloks:any
}}>();
</script>
 
<template>
    <span :v-editable="blok" class="flex flex-row justify-evenly text-center">
        <StoryblokComponent v-if="blok.bloks" v-for="b in blok.bloks" :key="b._uid" :blok="b" />
    </span>

</template>