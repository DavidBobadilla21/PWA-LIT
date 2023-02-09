import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
  render() {
    return html`
      <p>hola mundo! de itsmotul.</p>
    `;
  }
}
customElements.define('my-element', MyElement);
