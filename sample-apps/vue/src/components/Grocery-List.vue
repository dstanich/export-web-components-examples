<template>
  <div class="grocery-list">
    <div v-if="items.length > 0" class="main-container">
      <h1>Groceries</h1>
      <button
        v-for="(item, index) in items"
        :key="item.name"
        :class="['grocery-item', item.removed ? 'grocery-item--removed' : '']"
        @click="$emit('itemClicked', item.name)"
      >
        <span class="grocery-item-count">{{ index + 1 }}.</span>
        <span>{{ item.name }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grocery-List',
  props: {
    items: Array
  }
};
</script>

<style scoped lang="scss">
.grocery-list {
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}

h1 {
  color: #07531b;
}

.main-container {
  display: flex;
  flex: 0 0 75%;
  flex-direction: column;
  align-items: center;
  background: #e3ffef;
  box-shadow: 1px 1px 5px 1px #000000;
  padding: 10px 15px;

  .grocery-item {
    display: flex;
    width: 85%;
    font-size: 1.25rem;
    padding: 10px;
    margin: 5px;
    border: none;
    background: transparent;
    cursor: pointer;

    &--removed {
      opacity: 0.5;
      text-decoration: line-through;
    }

    &-count {
      width: 50px;
    }
  }
}
</style>
