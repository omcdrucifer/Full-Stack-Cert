const toggleDetails = id => {
    const details = document.getElementById(id);
    (details.style.display === 'none' || details.style.display === '') ? details.style.display = 'block' : details.style.display = 'none';
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});

console.log((num % 2 === 0) ? 'even' : 'odd');
