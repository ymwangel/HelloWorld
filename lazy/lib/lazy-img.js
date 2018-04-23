import testMeet from './testMeet.js'
class LazyImg {
  constructor(options) {
    this.init.apply(this,arguments)
  }
  init (oJson) {
    let _option = {
      dataSrc: 'data-src',
      container: 'body',
      _that:this
    }
    for(let key in oJson) {
      _option[key] = oJson[key]
    }
    this.option = _option
    this.fn()
  }
    
  fn () {
    this.option.imgArray = document.querySelector(this.option.container).querySelectorAll('['+this.option.dataSrc+']')
    this.loadImg()
    this.scrollRender()
  }

  loadImg () {
    let _opt = this.option,
      _img = _opt['imgArray'],
      _that = this
    if(_img.length) {
      for(let i=0;i<_img.length;i++) {
        let _this = _img[i]
        if(testMeet(_this)){
          let src = _this.getAttribute(_opt.dataSrc);
          _this.setAttribute("src", src);
          _this.removeAttribute(_opt.dataSrc);
          _that.option.imgArray = document.querySelector(this.option.container).querySelectorAll('['+this.option.dataSrc+']')
        }
      }
    }else if(typeof _that._callLoadImg == 'function') {
      if(window.addEventListener){
        window.addEventListener('scroll',_that._callLoadImg)
      }else if(window.attachEvent){
        window.attachEvent('scroll',_that._callLoadImg)
      }
    }
  }

  isElementInViewport (el) {
    let rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  scrollRender (){
    let _that = this
    function callLoadImg() {
      _that.loadImg.call(_that)
    }
    _that._callLoadImg = callLoadImg
    if(window.addEventListener){
      window.addEventListener('scroll',_that._callLoadImg)
    }else if(window.attachEvent){
      window.attachEvent('scroll',_that._callLoadImg)
    }
  }

}

export default LazyImg