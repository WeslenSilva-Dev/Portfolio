document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            const email = emailLink.getAttribute('data-email') || emailLink.href.replace('mailto:', '');
            navigator.clipboard.writeText(email).then(() => {
                const msg = document.createElement('span');
                msg.textContent = 'Email copiado!';
                msg.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--terminal-green);color:var(--bg-primary);padding:0.5rem 1rem;border-radius:4px;font-size:0.9rem;z-index:99999';
                document.body.appendChild(msg);
                setTimeout(() => msg.remove(), 3000);
            }).catch(() => {});
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
});

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});
