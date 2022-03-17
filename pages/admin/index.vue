<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
  import PostList from "@/components/Posts/PostList.vue";
  import AppButton from "@/components/UI/AppButton.vue";
  export default {
    layout: 'admin',
    components: {
      PostList,
      AppButton
    },
    data() {
      return {
        loadedPosts: [
          {
            id: '1',
            title: 'This is my first post',
            previewText: 'This is the preview text',
            thumbnail: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg'
          },
          {
            id: '2',
            title: 'This is my second post',
            previewText: 'This is the second preview text',
            thumbnail: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .admin-page {
    padding: 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts h1 {
    text-align: center;
  }
</style>
