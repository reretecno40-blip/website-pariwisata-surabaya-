<script>
    const items = document.querySelectorAll('.gallery .item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('expanded')); // reset semua
            item.classList.add('expanded'); // perbesar yang diklik
        });
    });
</script>
// JavaScript Document