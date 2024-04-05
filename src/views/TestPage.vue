<script setup>
import AppButton from "../components/UI/AppButton.vue";
</script>
<template>
  <div class="container-fluid">
    <div class="flex">
      <div class="flex-item flex-item-extend">
        <div class="flex-body">
          
        </div>
      </div>
      <div class="flex-item flex-item-fixed--width">
        <div class="flex-body">
          <div class="flex-dir-col">
            <div class="flex-avatar-settings">
              <div class="flex-avatar-icon" >
                <i class="bi bi-pencil fs-2 text-warning" style="cursor: pointer;"></i>
              </div>
              <div class="flex-avatar-icon" >
                <i class="bi bi-trash fs-2 text-warning" style="cursor: pointer;"></i>
              </div>
            </div>
            <div class="flex-avatar">
              <img src="" alt="AVATAR" />
              <div class="flex-avatar-upload bg-opacity-50 bg-warning d-flex justify-content-center position-absolute bottom-0 w-100">
                <div class="flex-avatar-icon">
                  <i class="bi bi-camera fs-2 text-white" style="cursor: pointer;"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
