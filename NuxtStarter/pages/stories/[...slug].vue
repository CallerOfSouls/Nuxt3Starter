<script setup lang="ts">
const { slug } = useRoute().params;
const story = await useStoryblok(slug[0], { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>