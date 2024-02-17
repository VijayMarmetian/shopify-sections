class ImageBanner extends HTMLElement{
    constructor(){
      super();
      this.sectionId = this.dataset.sectionId
      this.querySelector("#loadContentButton").addEventListener("click", this.renderSection.bind(this))
    }
    renderSection(){
      fetch(`window.location.pathname?section_id=${this.sectionId}`)
      .then(res=>res.text())
      .then(html=>{
        const htmlResponse = new DOMParser().parseFromString(html, 'text/html')
        this.insertAdjacentHTML('beforeend', htmlResponse.querySelector("image-banner").innerHTML);
      })
    }
  }
  customElements.define("image-banner", ImageBanner)