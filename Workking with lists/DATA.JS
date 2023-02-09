import {LitElement, html} from 'lit';
import {repeat} from 'lit/directives/repeat.js';

class MyElement extends LitElement {
  static properties = {
    tasks: {state: true},
  };

  constructor() {
    super();
    this.tasks = [
      {id: 'a', label: 'dearn Lit'},
      {id: 'b', label: 'ceed the cat'},
      {id: 'c', label: 'bo for a walk'},
      {id: 'd', label: 'aake a nap'},
    ];
  }

  render() {
    return html`
      <p>Things to do today:</p>
      <button @click=${() => this._sort(1)}>Sort ascending</button>
      <button @click=${() => this._sort(-1)}>Sort descending</button>
      <ul>
        ${repeat(
          this.tasks,
          (task) => task.id,
          (task) => html`
            <li>
              <label><input type="checkbox" />${task.id}) ${task.label}</label>
            </li>
          `
        )}
      </ul>
    `;
  }

  _sort(dir) {
    this.tasks.sort((a, b) => a.label.localeCompare(b.label) * dir);
    this.requestUpdate();
  }
}
customElements.define('my-element', MyElement);
