this.validateForm = function() {
  return $('#chart-form').validate({
    ignore: [],
    rules: {
      'name-input': {
        required: true
      },
      'age-input': {
        required: true
      },
      'tv-input': {
        required: true
      },
      'internet-input': {
        required: true
      },
      'phone-input': {
        required: true
      },
      'sport-input': {
        required: true
      }
    },
    messages: {
      'name-input': {
        required: 'Name field is required.'
      },
      'age-input': {
        required: 'Age field is required.'
      },
      'tv-input': {
        required: 'TV hours field is required.'
      },
      'internet-input': {
        required: 'Internet hours field is required.'
      },
      'phone-input': {
        required: 'Smartphone hours field is required.'
      },
      'sport-input': {
        required: 'Sports hours field is required.'
      }
    }
  });
};
