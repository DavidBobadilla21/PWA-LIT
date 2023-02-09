import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
  static properties = {
    message: {},
  };

  constructor() {
    super();
    this.message = 'hola.';
  }

  render() {
    return html`
      <p>${this.message}</p>
    `;
  }
}
customElements.define('my-element', MyElement);
