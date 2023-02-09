import {LitElement, html} from 'lit';

export class ToDoList extends LitElement {
  static properties = {
    _listItems: {state: true},
  };

  constructor() {
    super();
    this._listItems = [
      {text: 'realizar mi tarea', completed: true},
      {text: 'terminar el reporte', completed: false},
    ];
  }

  render() {
    return html`
      <h2>lista de tareas por hacer</h2>
      <ul>
        ${this._listItems.map((item) => html`<li>${item.text}</li>`)}
      </ul>
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
    `;
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  addToDo() {
    this._listItems = [
      ...this._listItems,
      {text: this.input.value, completed: false},
    ];
    this.input.value = '';
  }
}
customElements.define('todo-list', ToDoList);
