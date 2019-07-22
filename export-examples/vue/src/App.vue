<template>
  <div id="app">
    <Title text="Vue Groceries" />
    <div class="scrollable-area">
      <div class="add-grocery">
        <Add-Grocery @grocery-added="groceryAdded" />
      </div>
      <div class="grocery-list">
        <Grocery-List :items="groceryItems" @item-clicked="groceryItemClicked" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue';
import AddGrocery from './components/Add-Grocery.vue';
import GroceryList from './components/Grocery-List.vue';
import { DataService } from './data.service';

export default {
  name: 'app',
  components: {
    Title,
    AddGrocery,
    GroceryList
  },
  data: () => {
    return {
      dataService: new DataService()
    };
  },
  computed: {
    groceryItems: function() {
      return this.dataService.items;
    }
  },
  methods: {
    groceryAdded: function(item) {
      this.dataService.addItem(item);
    },
    groceryItemClicked: function(item) {
      this.dataService.toggleItemStatus(item);
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #b0dfbc;
  overflow: hidden;
}

.scrollable-area {
  display: block;
  flex: 1 1 auto;
  overflow: auto;

  .add-grocery {
    margin-top: 2rem;
  }

  .grocery-list {
    margin-top: 2rem;
  }
}
</style>
