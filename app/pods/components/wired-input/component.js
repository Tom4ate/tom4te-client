import Component from '@ember/component';

export default Component.extend({
  tagName:"wired-input",

  didRender(){
    this._super();
    let valueElemento = this.element.value;
    let valueComponente = this.value;

    if(valueComponente){
      this.element.value = valueComponente;
    }

    this.element.addEventListener('input',(evento) => {
      this.set("value",evento.target.value)
    })

    console.log("valueElemento",valueElemento);
    console.log("valueComponente",valueComponente);
  }
});
