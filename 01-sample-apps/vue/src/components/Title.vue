<template>
  <div class="title">
    <span class="text">{{ text }}</span>
    <a
      class="github"
      aria-label="GitHub"
      href="https://github.com/dstanich/export-web-components-examples"
      target="_blank"
    >
      <img src="@/assets/GitHub-Mark-Light-32px.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: String
  }
};
</script>

<style scoped lang="scss">
.title {
  display: flex;
  align-content: space-between;
  align-items: center;
  background: #07531b;
  padding: 5px 15px;
  box-shadow: 0 2px 5px 0px #000000;
  color: #b0dfbc;
  margin-bottom: 5px;
}

.text {
  display: flex;
  flex: 1 1 auto;
  color: #b0dfbc;
  font-size: 1.25rem;
}

.github {
  display: flex;
  flex: 0 0 auto;
}
</style>
