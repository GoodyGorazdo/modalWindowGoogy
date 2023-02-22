# Modal window plugin.


### Start
Add data-modal-path attribute to some button element:
```html

<button class="open" data-modal-path="anyName">Open Modal</button>
```

### Add data-target attribute to modal__container element:

```html
<pre>
    <div class="modal__container" data-modal-target="anyName">
</pre>
```

### Full example:

```html
<button class="open"
        data-modal-path="example"
        data-modal-animation="fadeInUp"
        data-modal-speed-in="300"
        data-modal-speed-out="300">
 Fade Up
</button>
```

### Modal window.

```html
<div class="modal">
  <div class="modal__container" data-modal-target="example">
    <button class="modal__close">Close</button>
    <div class="modal__content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, asperiores?
    </div>
  </div>
</div>

```

### Animation
Add data attribute to element
```html
data-modal-path="anyName" data-modal-animation="fadeInUp"
```

### Fade In Effects
  * fadeInUp,
  * fadeInDown,
  * fadeInLeft,
  * fadeInRight,


### Animation Speed In and Out
### Add data attribute to element
```html
data-modal-path="anyName"
data-modal-animation="fadeInUp"
data-modal-speed-in="300"
data-modal-speed-out="300"
```


## Initialization

```js
document.addEventListener('DOMContentLoaded', () => {
  const modal = new ModalWindow({
    isOpen: (modal) => {
      console.log('opened');
    },
    isClose: (modal) => {
      console.log('closed');
    },
  });
});
```js
