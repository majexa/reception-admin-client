Ngn.Reception.UserDialog = new Class({
  Extends: Ngn.Dialog.RequestForm.Json,
  options: {
    title: 'Редактирование',
    // @requiresBefore src/formTmpl/user.js
    formTmpl: Ngn.formTmpl.user,
    id: 'user',
    dialogClass: 'dialog fieldFullWidth',
    width: 200
  }
});

Ngn.Reception.Users = new Class({

  initialize: function () {
    new Ngn.Grid({
      basePath: Ngn.serverConfig.url(),
      restBasePath: '/api/v1',
      basicBasePath: 'user',
      tools: {
        edit: 'Редактировать'
      },
      toolActions: {
        edit: function (row, opt) {
          new Ngn.Reception.UserDialog({
            url: Ngn.serverConfig.url() +
            '/api/v1' + '/user/' + row.id,
            onOkClose: function () {
              this.reload(row.id);
            }.bind(this)
          });
        }
      }
    }).reload();
  }

});