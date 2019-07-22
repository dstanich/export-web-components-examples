<template>
  <div class="add-grocery">
    <input
      type="text"
      placeholder="Grocery"
      aria-label="Add a grocery item"
      v-model="item"
      @keydown.enter="addItem"
    />
  </div>
</template>

<script>
export default {
  name: 'Add-Grocery',
  data: () => {
    return {
      item: ''
    };
  },
  methods: {
    addItem: function() {
      this.$emit('groceryAdded', this.item);
      this.item = '';
    }
  }
};
</script>

<style scoped lang="scss">
.add-grocery {
  display: flex;
  justify-content: center;
}

input {
  display: flex;
  flex: 0 0 75%;
  font-size: 1.5rem;
  padding: 10px 15px;
  border: 1px solid #420846;
  color: #07531b;

  &::placeholder {
    color: #07531b;
  }
}
</style>
