import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

export const tagName = 'my-element';

@customElement(tagName)
export class MyElement extends LitElement {
  @property({type: Array})
  name = [1,2,3];

  @property({type: Boolean})
  bool = false;

  render() {
    return html`<p>Hello ${this.bool ? this.name.length:''}!</p>`;
  }
}