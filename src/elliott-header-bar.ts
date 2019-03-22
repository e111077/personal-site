import { LitElement, customElement, html, property, css } from "lit-element";

@customElement('elliott-header-bar')
class ElliottHeaderBar extends LitElement {
  @property({type: String})
  name: string = '';

  @property({type: String})
  backHref: string = '';

  static get styles() {
    return css`
      #header {
        font-family: var(--main-font);
        font-size: 48px;
        position: relative;
        background-color: black;
        padding: 14px 0 14px 0;
        text-align: center;
      }

      a {
        color: white;
        text-decoration: none;
      }

      #name:hover {
        text-decoration: underline;
      }

      #backButton {
        position: absolute;
        left: 0;
        margin-left: 24px;
      }
    `;
  }

  renderBackButton() {
    return html`
      <a id="backButton" href=${this.backHref}><</a>
    `;
  }

  render() {
    return html`
      <div id="header">
        ${this.backHref ? this.renderBackButton() : ''}
        <a id="name" class="elliscript" href="/">${this.name}</a>
      </div>
    `;
  }
}