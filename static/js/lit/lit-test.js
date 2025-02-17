import {
  LitElement,
  html,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class LitTest extends LitElement {
  static properties = {
    message: { type: String },
  };

  constructor() {
    super();
    this.message = "Hello from Lit!";
  }

  render() {
    return html`
      <div>
        <h1>${this.message}</h1>
      </div>
    `;
  }
}

customElements.define("lit-test", LitTest);
