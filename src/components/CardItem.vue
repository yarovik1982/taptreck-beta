<script setup>
import AppFavoriteIcon from "./AppFavoriteIcon.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div
    class="item border border-2 border-warning rounded rounded-2 mb-2 p-3"
    :item="item"
  >
    <div class="row">
      <div class="col-4 d-flex align-items-center justify-content-center">
        <div class="item-img">
          <img :src="item.image" :alt="item.title" />
        </div>
      </div>
      <div class="col-8 p-3">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="item-title">{{ item.title }}</h4>
          <AppFavoriteIcon></AppFavoriteIcon>
        </div>
        <div class="item-description">{{ item.description }}</div>
        {{ item.available }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.item-img {
  width: 200px;
  height: 200px;
}
.item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}
.item-description {
  padding: 8px;
  max-height: 200px;
  transition: box-shadow 0.3s linear;
  overflow-y: auto;
}
.item-description:hover {
  box-shadow: 0 0 8px 3px #ffc107;
  cursor: ns-resize;
}
</style>
