const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

// checkboxes();

function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            // const newEl = document.createElement('div');
            // newEl.classList.add('box');
            
            // newEl.innerHTML = '<img src="https://source.unsplash.com/random/?silly,cat" alt="Hi!">';
            // document.body.append(newEl.cloneNode(true));
            // let boxes = document.querySelectorAll('.box');
            box.classList.add('show');
            
        } else {
            box.classList.remove('show');
        }
    })

}

//The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
//The returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width. The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels. Properties other than width and height are relative to the top-left of the viewport.