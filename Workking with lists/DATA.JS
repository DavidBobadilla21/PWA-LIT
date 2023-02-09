import {LitElement, html} from 'lit';

class MyElement extends LitElement {
  static properties = {
    names: {state: true},
  };

  constructor() {
    super();
    this.names = ['Chandler', 'Phoebe', 'Joey', 'Monica', 'Rachel', 'Ross'];
  }

  render() {
    return html`
      <p>Nombre de la lista que tenga la letra "o"</p>
      <ul>
      ${this.names
        .filter((name) => name.match(/o/i))
        .map((name) => html`<li>${name}</li>`)}
      </ul>
    `;
  }
}
customElements.define('my-element', MyElement);