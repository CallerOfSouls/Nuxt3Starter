<template>
    <div class="w-full h-full" @mouseover="hovering = !hovering" @mouseleave="hovering = !hovering" v-editable="blok"  v-auto-animate >
        <div   class="text-lg bg-pink-100">{{blok.text}}</div>
        <div class=" shadow-md" v-if="hovering"  >
            <div    v-for="b in blok.bloks" :key="b._uid"  >
          <StoryblokComponent v-if="blok.bloks" :blok="b"/>

          
        </div>
        </div>
  
    </div>
</template>
<script setup lang="ts">
var clicked = ref(false);
var hovering = ref(false);
var props = defineProps<{blok:{
    text:string,
    bloks:any
}}>();
</script>