import Component from '@ember/component';

import { Terminal } from "xterm";

export default Component.extend({
  terminal: null,
  didRender(){
    this._super();

    let term = new Terminal();
    this.set("Terminal",term);

    term.open(document.getElementById('terminal'));

    term.write("👀👀");

    console.log("console rendenizado");
    console.log("Xtem",term);

  }
});
