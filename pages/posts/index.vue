<template>
  <PostList :posts="posts" />
</template>

<script>
  import PostList from "@/components/Posts/PostList.vue";

  export default {
    components: {
      PostList
    },
    asyncData(context, callback) {
      setTimeout(() => {
        callback(null, {
          posts: [
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
        })
      }, 2000)
    },
    created() {
      this.$store.dispatch('setPosts', this.posts);
    }
  }
</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
