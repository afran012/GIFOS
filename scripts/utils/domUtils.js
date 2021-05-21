function $(selector) {
    const self = {
      htmlElement: document.querySelector(selector),
      html: () => self.htmlElement,
      on: (event, callback) => {
        self.htmlElement.addEventListener(event, callback);
      },
      hide: () => {
        self.htmlElement.style.display = "none";
      },
      attr: (name, value) => {
        if (value == null) return self.htmlElement.getAttribute(name);
        else self.htmlElement.setAttribute(name, value);
      },
      removeOn: (event, callback) => {
        self.htmlElement.removeEventListener(event, callback);
      },
    };
  
    return self;
  }
  
  export { $ };