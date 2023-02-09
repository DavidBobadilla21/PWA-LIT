
import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'TUTORIAL';
  }

  render() {
    return html`
    <p>Comenzando el tutorial!</p>
    <p>EL ${this.version} esta empezando.</p>
    `;
  }
}
customElements.define('my-element', MyElement);
