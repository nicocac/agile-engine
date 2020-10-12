export default {
  credentials: state => () => {
    return state.credentials
  },
  images: state => () => {
    return state.images
  },
  currentImage: state => () => {
    return state.current_image
  }
}
