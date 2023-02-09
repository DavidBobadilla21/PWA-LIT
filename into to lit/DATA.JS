import {LitElement, html} from 'lit';

export class NameTag extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = '';
  }

  render() {
    return html`
      <p>hola, ${this.name}</p>
      <input @input=${this.changeName} placeholder="nombre">
    `;
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value;
  }
}
customElements.define('name-tag', NameTag);