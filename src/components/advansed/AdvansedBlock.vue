<script setup>
const props = defineProps({
   title:String,
   customClas:String
})

</script>
<template>
    <div>
              <div class="" :class="customClas">
              <h3 class="text-center fs-5 text-capitalize">{{props.title}}</h3>
              <ul class="advansed-list m-0 p-0">
                <li class="advansed-item d-flex align-items-center justify-content-between bg-info py-2">
                  <div class="advansed-img ms-1 me-1" style="width: 50px;height: 50px;background-color: #fff;">
                    <img src="" alt="">
                  </div>
                  <h6 class="advansed-title text-capitalize">Lorem ipsum dolor sit amet.</h6>
                </li>
                <li class="advansed-item d-flex align-items-center justify-content-between bg-info py-2">
                  <div class="advansed-img ms-1 me-1" style="width: 50px;height: 50px;background-color: #fff;">
                    <img src="" alt="">
                  </div>
                  <h6 class="advansed-title text-capitalize">Lorem ipsum dolor sit amet.</h6>
                </li>
                <li class="advansed-item d-flex align-items-center justify-content-between bg-info py-2">
                  <div class="advansed-img ms-1 me-1" style="width: 50px;height: 50px;background-color: #fff;">
                    <img src="" alt="">
                  </div>
                  <h6 class="advansed-title text-capitalize">Lorem ipsum dolor sit amet.</h6>
                </li>
              </ul>
            </div>
            </div>
</template>
<style scoped >

</style>