Modal window plugin.


Start
Add data attribute to some element:

<button class="open" data-goody-target="anyName">Open Modal</button>

Add data attribute to modal__container element:


*<div class="modal__container" data-goody-target="anyName">

Full example:

<button class="open"
        data-goody-path="example"
        data-goody-animation="fadeInUp"
        data-goody-speed-in="300"
        data-goody-speed-out="300">
 Fade Up
</button>

Modal window.
<div class="modal">
  <div class="modal__container" data-goody-target="example">
    <button class="modal__close">Close</button>
    <div class="modal__content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, asperiores?
    </div>
  </div>
</div>


Animation
Add data attribute to element (data-goody-path="anyName", data-goody-animation="fadeInUp");

Fade In Effects
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,

Animation Speed In and Out
Add data attribute to element
(data-goody-path="anyName", data-goody-animation="fadeInUp", data-goody-speed-in="300" data-goody-speed-out="300");
