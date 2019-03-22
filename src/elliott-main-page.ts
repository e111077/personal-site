import {LitElement, customElement, html, css, property, TemplateResult} from 'lit-element';
import {installRouter} from 'pwa-helpers';

import {VIEWS} from './constants.js'
import { homeView } from './articles/elliott-home-view.js';

import './elliott-header-bar.js';
import "./elliott-nav-section";

@customElement('elliott-main-page')
class ElliottMainPage extends LitElement {
  @property({type: String})
  backHref: string = '';

  @property({type: Number})
  view: VIEWS = VIEWS.HOME;

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

      elliott-header-bar {
        display: block;
        margin-bottom: 14px;
      }

      #body-wrapper {
        width: 80%;
        margin: 0 auto;
        display: flex;
      }

      #body {
        flex-grow: 1;
      }

      @media (max-width: 600px) {
        #body-wrapper {
          display: flex;
          flex-direction: column;
          width: 95%;
        }
      }

      .elliscript {
        font-family: var(--main-font);
      }

      .article h1, .article h2, .article h3 {
        font-family: var(--main-font, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol");
        font-style: normal;
        font-variant: normal;
        font-weight: 500;
        line-height: 23px;
      }

      .article h1 {
        font-size: 3em;
      }

      .article h2 {
        font-size: 2.25em;
      }

      .article h3 {
        font-size: 1.725em;
      }

      .article code, .article pre {
        font-family: 'Courier New', 'Courier', 'monospace';
        font-size: 17px;
        font-style: normal;
        font-variant: normal;
        font-weight: 400;
        line-height: 18.5714px;
      }

      .article a {
        color: #C0362C;
        text-decoration: none;
      }

      .article a:hover {
        text-decoration: underline;
      }

      .article {
        width: 80%;
        margin: 0 auto;
        font-family: "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 18px;
        font-variant: normal;
        font-weight: 400;
      }
    `;
  }

  renderView(): TemplateResult {
    switch (this.view) {
      case VIEWS.HOME:
        return html`
          <div class="article">${homeView}</div>
        `;
      default:
        return html`
          <div class="article">${homeView}</div>
        `;
    }
  }

  render() {
    return html`
      <elliott-header-bar
          name="Elliott Marquez"
          backHref=${this.backHref}>
      </elliott-header-bar>
      <div id="body-wrapper">
        <elliott-nav-section .view=${this.view}></elliott-nav-section>
        <div id="body">
          ${this.renderView()}
        </div>
      </div>
    `;
  }
}