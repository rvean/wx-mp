let ITEM_HEIGHT = 44;

Component({
  externalClasses: ['main-item-class', 'content-item-class', 'main-active-class', 'content-active-class', 'main-disabled-class', 'content-disabled-class'],

  properties: {
    items: {
      type: Array,
      observer: 'itemsInit'
    },
    activeIndex: {
      type: Number,
      value: 0,
      observer: 'updateSubItems'
    },
    activeId: {
      type: [Number, String]
    },
    maxHeight: {
      type: Number,
      value: 300,
      observer: 'maxHeightInit'
    }
  },

  data: {
    subItems: [],
    mainHeight: 0,
    itemHeight: 0
  },

  methods: {
    itemsInit() {
      this.updateSubItems();
      this.updateMainHeight();
    },
    maxHeightInit() {
      this.updateItemHeight();
      this.updateMainHeight();
    },
    // 当一个子项被选择时
    onSelectItem(event) {
      let item = event.currentTarget.dataset.item;

      if (!item.disabled) {
        this.triggerEvent('click-item', item);
      }
    },
    // 当一个导航被点击时
    onClickNav(event) {
      let index = event.currentTarget.dataset.index;
      let item = this.data.items[index];

      if (!item.disabled) {
        this.triggerEvent('click-nav', {
          index: index
        });
      }
    },
    // 更新子项列表
    updateSubItems() {
      let selectedItem = this.data.items[this.data.activeIndex] || {};
      this.setData({
        subItems: selectedItem.children || []
      });
      this.updateItemHeight();
    },
    // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
    updateMainHeight() {
      let maxHeight = Math.max(this.data.items.length * ITEM_HEIGHT, this.data.subItems.length * ITEM_HEIGHT);
      this.setData({
        mainHeight: Math.min(maxHeight, this.data.maxHeight)
      });
    },
    // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
    updateItemHeight() {
      this.setData({
        itemHeight: Math.min(this.data.subItems.length * ITEM_HEIGHT, this.data.maxHeight)
      });
    }
  }
})