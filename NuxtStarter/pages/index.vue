<template>
    <div @click="clickChange()" class="h-48 w-48 bg-green-100" v-auto-animate="{ duration: 300 }">

  
    <ul v-if="clicks" class="bg-red-100">
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <div class="h-96 w-96">
        <img src="https://picsum.photos/200/300" alt="" class="h-48 w-48  ">
    </div>
    <div class="">
        <img src="https://picsum.photos/200/300" alt="" class="h-48 w-48 object-cover">
    </div>
</div>
</template>

<script setup lang="ts">
var clicks = ref(false);
let clickChange = ()=>{
    clicks.value = !clicks.value
};
</script>

<style scoped lang="scss">

</style>