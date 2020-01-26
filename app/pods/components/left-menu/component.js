import Component from '@ember/component';

export default Component.extend({
  autenticado: {
    usuario: {
      nome: "tom4te",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/wikiziner/128.jpg"
    },
    menu: {
      header: {
        acoes: [
          {
            icone:'🖤'
          }
        ]
      },
      itens: [
        {
          icone: "🐱‍👤",
          nome:"home"
        }
      ]
    }
  }
});
