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
    moveToRight: function (item) {
      this.left.$remove(item);
      this.right.push(item);
    },
    moveToLeft: function (item) {
      this.right.$remove(item);
      this.left.push(item);
    },
    moveAllToRight: function () {
      this.right = this.right.concat(this.left);
      this.left = [];
    },
    moveAllToLeft: function () {
      this.left = this.left.concat(this.right);
      this.right = [];
    },
    addItem: function (list) {
      this[list].push( { text: this.newItem });
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
