document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.nav-item a');

    function setActiveItem() {
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.href.split('/').pop() === window.location.pathname.split('/').pop()) {
                item.classList.add('active');
            }
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    setActiveItem();
});