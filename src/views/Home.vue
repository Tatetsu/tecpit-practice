<template>
  <div class="home">
    <div class="list">
            <!-- <li v-for="whisper in whispers" :key="whisper.id" class="item">
        <div class="user-box">
          <div 
            class="avatar"
            :style="'background-image: url('+url+')'"
          >
          </div>
          <p class="user-name">{{whisper.uid}}</p>
        </div>
        <div class="content" v-html="whisper.content">
        </div>
      </li> -->
<Item 
  v-for="whisper in whispers"
  :key="whisper.id"
  :id="whisper.id"
  :uid="whisper.uid"
/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from '@/components/Item.vue'

import { db } from "../main";
import Vue2Filters from "vue2-filters";

export default {
  name: "home",
  data() {
    return {
      whispers: [],
    };
  },
  firestore() {
    return {
      whispers: db.collection("whisperer"),
    };
  },
  components: {
    Item
  },
  mixins: [Vue2Filters.mixin],
};
</script>

<style lang="stylus" scoped>

</style>