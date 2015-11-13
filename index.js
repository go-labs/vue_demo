'use strict';

new Vue({
  el: '#vue-demo',
  data: {
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
    moveToRight: function (action) {
      this.left.$remove(action);
      this.right.push(action);
    },
    moveToLeft: function (action) {
      this.right.$remove(action);
      this.left.push(action);
    },
    moveAllToRight: function () {
      this.right = this.right.concat(this.left);
      this.left = [];
    },
    moveAllToLeft: function () {
      this.left = this.left.concat(this.right);
      this.right = [];
    }
  }
});
