import { ref } from "vue";

export const usePreview = () => {
   const imageUrl = ref(null)

   const previewImage = (event) => {
      const file = event.target.files[0]
      if(file){
         const reader = new FileReader()
         reader.onload =() => {
            imageUrl.value = reader.result
         }
         reader.readAsDataURL(file)
      }
   }

   return {
      imageUrl,
      previewImage
   }
}