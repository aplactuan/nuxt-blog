<template>
  <div class="post-page">
    <section class="update-form">
      <AdminPostForm :post="postToEdit" />
    </section>
  </div>
</template>

<script>
  import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    data() {
      return {
        postToEdit: {
          author: 'Adrian Lactuan',
          title: 'Title Post',
          thumbnailLink: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg',
          content: 'This is a very beautiful post'
        }
      }
    }
  }
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>
