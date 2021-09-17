import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

export const tagName = 'my-element';

@customElement(tagName)
export class MyElement extends LitElement {
  @state() value = 'This is an SSRd lit element';

  render() {
    return html`
      <div>Hello World! ${this.value}</div>
    `;
  }

  firstUpdated() {
    this.value = 'This is a hydrated lit element!';
  }
}