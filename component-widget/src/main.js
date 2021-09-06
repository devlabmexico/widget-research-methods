const heroTemplate = document.createElement('template');
heroTemplate.innerHTML = `
  <style>
    .container {
    	width: 60vw;
    	padding-left: 20vw;
	display: flex;
	justify-content: center;
	align-items: center;
        flex-direction: column;
    }
  </style>
  <div class="container">
  	<h3></h3>
  	<div class='video'></div>
  </div>
`;

class Hero extends HTMLElement {

  static get observedAttributes() {
    return ['video-id', 'title'];
  }

  constructor() {
    super();
    this.showInfo = false;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(heroTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name==='video-id'){
      this.shadowRoot.querySelector('.video').innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${newValue}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `
    } else if (name==='title') {
	this.shadowRoot.querySelector('h3').innerText = newValue;
    }
  }
}

window.customElements.define('hero-widget', Hero);
