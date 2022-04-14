import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ssr-test')
export class SSRTest extends LitElement {
  static styles = css`
    div {
      border: 1px solid black;
      padding: 8px;
    }
  `;

  render() {
    return html`
      <div>This is a div with a slot: <slot></slot></div>`
  }
}