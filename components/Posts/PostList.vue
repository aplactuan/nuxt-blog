<template>
  <section class="featured-posts">
    <post-preview id="1"
                  title="Post Title 1"
                  previewText="Preview Content 1"
                  thumbnail="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg"
    />
    <post-preview id="2"
                  title="Post Title 2"
                  previewText="Preview Content 2"
                  thumbnail="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg"
    />
    <post-preview id="3"
                  title="Post Title 3"
                  previewText="Preview Content 3"
                  thumbnail="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg"
    />
  </section>
</template>

<script>
  import PostPreview from "@/components/Posts/PostPreview.vue";

  export default {
    components: {
      PostPreview
    }
  }
</script>

<style scoped>
  .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
