import {html, LitElement} from 'lit';

class WordViewer extends LitElement {
  render() {
    return html`<pre>SOY DAVID BOBADILLA!</pre>`;
  }
}
customElements.define('word-viewer', WordViewer);

