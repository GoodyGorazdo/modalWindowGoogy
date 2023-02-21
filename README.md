# Modal window plugin.
      Cancel changes


### Start
Add data attribute to some element:
```html

<button class="open" data-goody-target="anyName">Open Modal</button>
```

### Add data-target attribute to modal__container element:

```html
<pre>
    <div class="modal__container" data-goody-target="anyName">
</pre>
```

```html

### Full example:

<button class="open"
        data-goody-path="example"
        data-goody-animation="fadeInUp"
        data-goody-speed-in="300"
        data-goody-speed-out="300">
 Fade Up
</button>
```

### Modal window.

```html
<div class="modal">
  <div class="modal__container" data-goody-target="example">
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
data-goody-path="anyName" data-goody-animation="fadeInUp"
```

### Fade In Effects
  * fadeInUp,
  * fadeInDown,
  * fadeInLeft,
  * fadeInRight,


### Animation Speed In and Out
### Add data attribute to element
```html
data-goody-path="anyName" 
data-goody-animation="fadeInUp" 
data-goody-speed-in="300" 
data-goody-speed-out="300"
```
