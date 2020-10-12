<template>
  <div>
    <div>
      <img :src="image.cropped_picture"/>
    </div>
    <div>
      <button @click="$emit( 'selectImage', image.id)">View More</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>
