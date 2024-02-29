
class ImageBanner extends HTMLElement{
  constructor(){
    super();
    this.sectionId = this.dataset.sectionId
    document.querySelector("#loadContentButton").addEventListener("click", this.renderSection.bind(this))
    document.querySelector("#scrollLeft").addEventListener("click", this.moveToLeft.bind(this))
  }
  renderSection(){
    fetch(`window.location.pathname?section_id=${this.sectionId}`)
    .then(res=>res.text())
    .then(html=>{
      const htmlResponse = new DOMParser().parseFromString(html, 'text/html')
      this.insertAdjacentHTML('beforeend', htmlResponse.querySelector("image-banner").innerHTML);
      this.moveToEnd()
    })
  }
  moveToLeft() {
    this.scrollLeft -= 300 
  }
  moveToEnd() {
    this.scrollLeft = this.scrollWidth;
  }
}
customElements.define("image-banner", ImageBanner)