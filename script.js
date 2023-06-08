let draggedItem = null;
const container2 = document.getElementById('container2');
const message = document.getElementById('message');

function drag(event) {
    draggedItem = event.target;
    event.dataTransfer.setData('text', event.target.innerHTML);
    event.dataTransfer.effectAllowed = 'move';
    event.target.classList.add('highlight');
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    event.target.classList.remove('highlight');

    const data = event.dataTransfer.getData('text');

    if (event.target === container2) {
        event.target.insertAdjacentHTML('beforeend', '<div class="item">' + data + '</div>');
        draggedItem.remove();
    } else if (event.target === container1) {
        draggedItem.classList.remove('dragging');
    }

    if (event.target === container2) {
        message.style.display = 'block';
        message.innerHTML = 'Item dropped!';
    }
}

// Reset function
function reset() {
    container2.innerHTML = '';
    container1.innerHTML = `
    <div class="item" draggable="true" ondragstart="drag(event)">Item 1</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 2</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 3</div>
  `;
    message.style.display = 'none';
}
