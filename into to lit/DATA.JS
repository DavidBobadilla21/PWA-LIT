import {LitElement, html} from 'lit';

export class MoreExpressions extends LitElement {
  static properties = {
    checked: {},
  };

  constructor() {
    super();
    this.checked = false;
  }

  render() {
    return html`
      <div>
        <input type="text" ?disabled=${!this.checked} value="Mi nombre.">
      </div>
      <label><input type="checkbox" @change=${
        this.setChecked
      }> no soy un robot</label>
    `;
  }

  setChecked(event) {
    this.checked = event.target.checked;
  }
}
customElements.define('more-expressions', MoreExpressions);