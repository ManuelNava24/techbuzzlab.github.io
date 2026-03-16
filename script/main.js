// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica del Toggle Menu (Móvil)
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('#nav-menu');

    if (menu) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer click en un link
    document.querySelectorAll('.tbl-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        });
    });

    // 2. ACTUALIZAR AÑO AUTOMÁTICAMENTE
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. LÓGICA DEL BOTÓN WHATSAPP (Aparece/Desaparece)
    const whatsappBtn = document.querySelector('.tbl-float-whatsapp');
    let isScrolling;

    if (whatsappBtn) {
        window.addEventListener('scroll', () => {
            // Al mover la pantalla, mostrar botón
            whatsappBtn.style.opacity = '1';
            whatsappBtn.style.visibility = 'visible';
            whatsappBtn.style.transform = 'translateY(0) scale(1)';

            // Limpiar temporizador
            window.clearTimeout(isScrolling);

            // Ocultar tras 3 segundos de inactividad
            isScrolling = setTimeout(() => {
                whatsappBtn.style.opacity = '0';
                whatsappBtn.style.visibility = 'hidden';
                whatsappBtn.style.transform = 'translateY(20px) scale(0.9)';
            }, 3000);
        }, false);
    }

    // 4. Inicializar iconos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});