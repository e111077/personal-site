import {LitElement, customElement, html, css, property, TemplateResult} from 'lit-element';
import {installRouter} from 'pwa-helpers';

import {VIEWS} from './constants.js'

import './elliott-header-bar.js';
import "./elliott-nav-section";

@customElement('elliott-main-page')
class ElliottMainPage extends LitElement {
  @property({type: String})
  backHref: string = '';

  @property({type: Number})
  view: number = VIEWS.HOME;

  constructor() {
    super();
    installRouter(this.onNavigation)
  }

  onNavigation = (location: Location) => {

  }

  static get styles() {
    return css`
      :host {
        --main-font: ElliScript, Apple Symbols, BlinkMacSystemFont,
            "Google Sans", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }
    `;
  }

  renderHomeView(): TemplateResult {
    return html`
    `;
  }

  renderView(): TemplateResult {
    switch (this.view) {
      case VIEWS.HOME:
        return this.renderHomeView();
      default:
        return this.renderHomeView();
    }
  }

  render() {
    return html`
      <elliott-header-bar
          name="Elliott Marquez"
          backHref=${this.backHref}>
      </elliott-header-bar>
      <elliott-nav-section></elliott-nav-section>
      ${this.renderView()}
    `;
  }
}