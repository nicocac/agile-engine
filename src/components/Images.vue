<template>
  <div>
    <ul v-if="pictures">
      <li v-for="image in pictures" :key="image.id">
        <CustomImage :image="image"
                     :details="details"
                     @selectImage="selectImage"></CustomImage>
      </li>
    </ul>
    <div id="myModal" class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <div>
          Details
          <p>
            Author: {{ details.author }}
          </p>
          <p>
            Camera: {{ details.camera }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import CustomImage from "@/components/CustomImage";

export default {
  components: {CustomImage},
  computed: {
    ...mapGetters([
      'images',
      'currentImage'
    ]),
    pictures() {
      return this.images() ? this.images().pictures : []
    },
    details () {
      return this.currentImage() ? this.currentImage() : {}
    }
  },
  methods: {
    selectImage(id) {
      this.$store.dispatch('SET_CURRENT_IMAGE', {id})
      this.openModal()
    },
    closeModal() {
      this.showModal = false
    },
    openModal() {
      this.showModal = true
    }
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>
<style>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
