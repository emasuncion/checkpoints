<template>
  <div class="video-responsive">
    <!-- <youtube video-id="T6GqX-_QLFk" ref="youtube" class="youtube-style"></youtube> -->
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

  @media(max-width: 700px) {
    .youtube-style{
      width: 100%;
      height: 100%;
    }
  }
</style>
