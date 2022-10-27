<script setup lang="ts">
import { StoriesParams } from 'storyblok-js-client';

const { slug } = useRoute().params;

const story = await useStoryblok(slug[0].toString(),{version:"draft"} as StoriesParams,{});


</script>
 
<template>
  <div >
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>

</template>