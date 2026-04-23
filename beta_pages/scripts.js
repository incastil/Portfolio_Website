// Open Modal
function openModal() {
    document.querySelector('.modal').style.display = 'block';
}

// Close Modal
function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
    if (event.target == document.querySelector('.modal-content')) {
        event.target.parentElement.style.display = 'none';
    }
}
