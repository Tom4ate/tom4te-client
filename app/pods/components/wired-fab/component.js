import Component from '@ember/component';

export default Component.extend({
  tagName:"wired-fab",
  classNameBindings:['red'],
  didRender(){
    this._super();
    // console.log("this",this);
    // console.log('layout',this.layout);
    console.log('element',this.element);


  }
});
