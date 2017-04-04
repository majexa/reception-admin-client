Ngn.Reception.App = new Class({

  initialize: function() {
    var container = document.getElement('body');
    new Element('div#table').inject(container);
    new Ngn.Reception.Users();
  }

});