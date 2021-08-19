import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {converter} from '../lit-astro-helpers/converter';

export const tagName = 'my-element';

@customElement(tagName)
export class MyElement extends LitElement {
  @property({type: Array})
  name = [1,2,3];

  @property({type: Boolean, converter, reflect: true})
  bool = false;

  render() {
    return html`<p>Hello ${this.bool ? this.name.length:''}!</p>`;
  }
}