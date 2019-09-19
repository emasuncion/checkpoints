<template>
  <div class="video-responsive">
    <video class="youtube-style" controls>
      <source :src="video" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  data () {
    return {
      video: '/video.mp4'
    }
  }
}
</script>

<style>
  .video-responsive{
    margin: auto;
  }

  .youtube-style {
    width: 500px;
  }

  @media(max-width: 1400px) {
    .youtube-style{
      width: 100%;
      height: 100%;
    }
  }
</style>
