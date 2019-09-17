<template>
  <div class="video-responsive">
    <youtube video-id="T6GqX-_QLFk" ref="youtube" class="youtube-style"></youtube>
  </div>
</template>

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
