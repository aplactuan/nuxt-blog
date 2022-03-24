<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by: {{ loadedPost.author }}</div>
        <p class="post-content">
          {{ loadedPost.content }}
        </p>
      </div>
    </section>
    <section class="post-feedback">
      <p>Let me know you comment about this post by sending email to<a href="mailto:aplactuan@gmail.com">aplactuan@gmail.com</a></p>
    </section>
  </div>
</template>

<script>
  export default {
    asyncData(context, callback) {
      setTimeout(() => {
        callback(null, {
          loadedPost: {
            id: '1',
            title: `This is my first ${context.params.id} post`,
            previewText: 'This is the preview text',
            author: 'Brad Pitt',
            updatedDate: new Date(),
            content: 'Some dummy text which is not the preview text',
            thumbnail: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg'
          }
        })
      }, 1000)
    }
  }
</script>

<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
