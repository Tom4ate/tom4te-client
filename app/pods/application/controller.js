import Controller from '@ember/controller';
import WiredElements from "wired-elements";

export default Controller.extend({
  init(){
    this._super();
    console.log("WiredElements",WiredElements);
  }
});
