import {LitElement, html} from 'lit';
import {map} from 'lit/directives/map.js';

class MyElement extends LitElement {
  static properties = {
    items: {state: true},
  };

  constructor() {
    super();
    this.items = new Set(['Manzana', 'platano', 'higo', 'naranja', 'limón','sandia']);
  }

  render() {
    return html`
      <p>My unique fruits</p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}
customElements.define('my-element', MyElement);