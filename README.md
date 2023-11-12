# Modal window plugin.

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
```

## USING WITH HTML DATA ATTRIBUTES
Add data-modal-path attribute to some button element:

```html
<button class="open" data-modal-path="anyName">Open Modal</button>
```

Add data-modal-target attribute to modal__container element:
```html
<div class="modal-window__container" data-modal-target="anyName">
```

### Full example:

Open button:
```html
<button class="open"
        data-modal-path="example"
        data-modal-animation="fadeInUp"
        data-modal-speed-in="300"
        data-modal-speed-out="300">
 Fade Up
</button>
```

HTML structure for modal window:
```html
<div class="modal-window">
  <div class="modal-window__container" data-modal-target="example">
    <button class="modal-window__close">Close</button>
    <div class="modal-window__content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, asperiores?
    </div>
  </div>
</div>
```

if you need one button to work both for opening and closing the window, add the attribute
```html
data-modal-one-button="true"
```

### Animation
Add data attribute to element
```html
data-modal-path="anyName" data-modal-animation="fadeInUp"
```

Animation Speed In and Out
Add data attribute to element
```html
data-modal-path="anyName"
data-modal-animation="fadeInUp"
data-modal-speed-in="300"
data-modal-speed-out="300"
```

## USING FROM JS

### Create HTML element for modal window:
```html
<div class="modal-window"><div>
```

### The modal window is invoked using methods:
```js
modal.showMessage(options = {});
options = {
   text: 'example'
   title: 'example',
   animation: 'anyType',
   speed: 0.3s,
   speedOut: 0.3.s,
   classes: {
     container: 'example',
     close: 'example',
     title: 'example',
     text: 'example',
   }
 }
```


## EVENTS 
When using HTML attributes, to utilize events, you should add the event name as an attribute to the button that opens the modal window. 
For example: 
```html
data-modal-event="eventName"
```
 When using JS, you should add to the options
 ```js
options = {
...
event: 'eventName'
...
}
```

## When generating events 
'Open' will be appended to the event name for opening events and 'Close' for closing events. For instance, if you name the event 'eventName', the generated events will be 'eventNameOpen' when opening the modal window and 'eventNameClose' when closing it.

## Fade In Effects
  * fadeInUp,
  * fadeInDown,
  * fadeInLeft,
  * fadeInRight,
