'use strict';

new Vue({
  el: '#vue-demo',
  data: {
    newItem: '',
    left: [
      { text: 'First Item' },
      { text: 'Second Item' },
      { text: 'Third Item' }
    ],
    right: [
      { text: 'Fourth Item' }
    ]
  },
  methods: {
    move: function (item, from, to) {
      this[to].push(this[from].$remove(item)[0])
    },
    moveAll: function (from, to) {
      this[to] = this[to].concat(this[from])
      this[from] = []
    },
    addItem: function (to) {
      this[to].push({ text: this.newItem });
      this.newItem = '';
      this.$els.item_input.focus();
    },
    removeItem: function (item, from) {
      this[from].$remove(item);
    }
  },
  computed: {
    percentage: function () {
      var leftItems  = this.left.length;
      var rightItems = this.right.length;
      var totalItems = leftItems + rightItems;
      if(totalItems === 0) return 0;
      return ((100 * rightItems) / totalItems).toFixed(2);
    }
  }
});
