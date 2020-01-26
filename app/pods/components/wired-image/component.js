import Component from '@ember/component';

export default Component.extend({
  tagName:"wired-image",

  srcDefault: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",

  didRender(){
    this._super();
    let srcElemento = this.element.src;
    let srcComponente = this.src;

    if(srcComponente){
      this.element.src = srcComponente;
    }

    this.element.addEventListener('ValueChange',(evento) => {
      // this.set('src');
    })

  }
});
