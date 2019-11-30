Component({
  externalClasses: ['v-class'],

  relations: {
    '../v-cell/index': {
      type: 'child',
      linked() {
        this._updateIsLastCell();
      },
      linkChanged() {
        this._updateIsLastCell();
      },
      unlinked() {
        this._updateIsLastCell();
      }
    }
  },

  methods: {
    _updateIsLastCell() {
      let cells = this.getRelationNodes('../v-cell/index');
      const len = cells.length;

      if (len > 0) {
        let lastIndex = len - 1;

        cells.forEach((cell, index) => {
          cell.updateIsLastCell(index === lastIndex);
        });
      }
    }
  }
});