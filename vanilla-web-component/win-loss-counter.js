const templateContents = `
    <style>
      #container {
        padding: 5px 10px;
        border: 1px solid black;
        width: 200px;
      }
      #teamName {
        font-size: 2em;
        margin-right: 5px;
      }
      .record {
        text-align: center;
        font-size: 1.5em;
      }
      .buttons {
        display: flex;
        justify-content: space-between;
      }
    </style>
    <div id="container">
      <div>
        <span id="teamName"></span>
        <slot name="logo"></slot>
      </div>
      <div class="record">
        <span id="wins"></span> - <span id="losses"></span>
      </div>
      <div class="buttons">
        <button id="win">Win</button>
        <button id="loss">Loss</button>
      </div>
    </div>
`;

class WinLossCounter extends HTMLElement {
  constructor() {
    super();
  }

  // When element inserted into DOM
  connectedCallback() {
    console.log("Custom element created");

    // Get template
    const template = document.createElement("div");
    template.innerHTML = templateContents;

    // Shadow root
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.cloneNode(true));

    // Init the content
    this.root.getElementById("teamName").innerText = this.getAttribute("team");
    this.root.getElementById("wins").innerText = 0;
    this.root.getElementById("losses").innerText = 0;
    const background = this.getAttribute("color")
      ? this.getAttribute("color")
      : "lightgray";
    this.root
      .getElementById("container")
      .setAttribute("style", `background: ${background}`);

    this.root
      .getElementById("win")
      .addEventListener("click", this.incrementCount.bind(this, "wins"));
    this.root
      .getElementById("loss")
      .addEventListener("click", this.incrementCount.bind(this, "losses"));
  }

  // When element removed from DOM
  disconnectedCallback() {
    console.log("Custom element destroyed");
  }

  // When element moved
  adoptedCallback() {
    console.log("Custom element moved");
  }

  // Called when attributes in `observedAttributes` are changed
  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom element attributes have changed");
    console.log(`Attribute: ${name}  Old: ${oldValue}  New: ${newValue}`);

    if (this.root) {
      this.updateRootText(newValue);
    }
  }

  incrementCount(id) {
    const element = this.root.getElementById(id);
    const newValue = parseInt(element.innerText, 10) + 1;
    element.innerText = newValue;

    this.dispatchEvent(
      new CustomEvent("recordChange", {
        detail: {
          team: this.getAttribute("team"),
          value: newValue,
          type: id
        }
      })
    );
  }
}

customElements.define("win-loss-counter", WinLossCounter);
