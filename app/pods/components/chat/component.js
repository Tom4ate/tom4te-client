import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({

  chatAtivo:true,

  mensagemText: "",

  // minhas mensagens
  minhas_mensagens: [],

  // outras mensagens
  outras_mensagens: [],

  mensagens: computed("minhas_mensagens.[]","outras_mensagens.[]",function(){
    // busca as ultimas desta hora

    var agora = new Date();

    var agora_timestamp = agora.getTime();

    const uma_hora_timestamp = 3600 ;

    let minhas_mensagens = this.get('minhas_mensagens').filter((a) => {
      if(!a.recebida){
        return false;
      }

      let unix_mensagem_recebida = a.recebida;

      console.log('uma_hora_timestamp',uma_hora_timestamp)
      console.log('agora_timestamp',agora_timestamp)
      console.log('unix_mensagem_recebida',unix_mensagem_recebida)
      console.log('(agora_timestamp - unix_mensagem_recebida)',(agora_timestamp - unix_mensagem_recebida))

      return ((agora_timestamp - unix_mensagem_recebida) <= uma_hora_timestamp);
    });

    let outras_mensagens = this.get('minhas_mensagens').filter( (a) => {
      if(!a.recebida){
        return false;
      }

      let unix_mensagem_recebida = moment(a.recebida).unix();

      return ((agora_timestamp - unix_mensagem_recebida) <= uma_hora_timestamp);

    });

    // ordena por data

    console.log(minhas_mensagens);

    let todas_mensagens = minhas_mensagens.concat(outras_mensagens);

    console.log(todas_mensagens);
    let retorno = todas_mensagens.sort((a,b)=>{
      if(moment(a.recebida).getTime() < moment(b.recebida).getTime() ){
            return -1;
      }
      if (moment(a.recebida).getTime() > moment(b.recebida).getTime()) {
        return 1;
      }
      // a deve ser igual a b
      return 0;

    })

    return retorno;
  }),


  enviarMensagem(){
    var agora = new Date();

    var agora_timestamp = agora.getTime();

    let mensagem = {
      recebida: agora_timestamp,
      texto: this.get('mensagemText'),
      nome_enviado: "eu"
    }

    this.set("mensagemText",'');

    this.get('minhas_mensagens').pushObject(mensagem);

  },


  actions: {

    fecharChat(){
      this.set('chatAtivo',false);
    },

    inputKeypress(event){
      if(event.keyCode == 13){
        this.enviarMensagem();
      }
    }
  }

});
