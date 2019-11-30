Component({
  externalClasses: ['v-class-content', 'v-class-title', 'v-class'],

  relations: {
    '../v-collapse/index': {
      type: 'parent',
      linked: function(target) {
        const options = {
          accordion: target.data.accordion
        }
        if (target.data.name === this.data.name) {
          options.showContent = 'v-collapse-item_show-content';
        }
        this.setData(options);
      }
    }
  },

  properties: {
    title: String,
    name: String
  },

  data: {
    showContent: '',
    accordion: false
  },

  options: {
    multipleSlots: true
  },

  methods: {
    trigger(e) {
      const data = this.data;
      if (data.accordion) {
        this.triggerEvent('collapse', {
          name: data.name
        }, {
          composed: true,
          bubbles: true
        });
      } else {
        this.setData({
          showContent: data.showContent ? '' : 'v-collapse-item_show-content'
        });
      }
    },
  }
});