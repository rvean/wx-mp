Page({
  data: {

  },
  onInput(e) {
    console.log('input: ', e.detail.value);
  },
  onConfirm(e) {
    console.log('confirm: ', e);
  },
  onSearch(e) {
    console.log('onSearch: ', e);
  },
  submitForm(e) {
    console.log('submit', e);
  }
})