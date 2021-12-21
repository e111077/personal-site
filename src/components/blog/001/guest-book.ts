import { html, LitElement, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';

export const tagName = 'guest-book';

const genGuestbookKey = (index: number) => {
  return `001-guestbook-entry-${index}`;
}
const getGuestbookItems = () => {
  let index = 0;
  let item = localStorage.getItem(genGuestbookKey(index));
  const items: string[] = [];

  items.push('Elliott Marquez');
  items.push('FIRST!!');
  items.push('FRIST');

  while (item !== null) {
    items.push(item);
    index++;
    item = localStorage.getItem(genGuestbookKey(index));
  }

  return {items, index};
}

@customElement(tagName)
export class MyElement extends LitElement {
  static styles = css`
    h2 {
      font-family: var(--header-font);
    }
  `;

  @state() entries:string[] = [];
  private nextIndex = 0;

  @query('input')
  private inputEl!: HTMLInputElement;

  render() {
    return html`
      <h2>
        Guestbook
      </h2>
      <ul>
        ${this.entries.map(entry => html`<li>${entry}</li>`)}
      </ul>
      <form onsubmit>
        <input aria-label="Sign your name here!">
        <button type="button" @click=${this.onClick}>sign</button>
      </form>
    `;
  }

  firstUpdated() {
    const {items, index} = getGuestbookItems();

    this.entries = items;
    this.nextIndex = index;
  }

  private onClick() {
    const value = this.inputEl.value;
    this.inputEl.value = '';
    if (value) {
      localStorage.setItem(genGuestbookKey(this.nextIndex), value);
      this.nextIndex++;
      this.entries.push(value);
      this.requestUpdate('entries');
    }
  }
}