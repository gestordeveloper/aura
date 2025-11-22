// ========================================
// AURA DESIGN SYSTEM - DOCUMENTATION SCRIPTS
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initCopyButtons();
    initMobileMenu();
    initScrollSpy();
    highlightActivePage();
    initTooltips();
    initSteppers();
});

// Copy code to clipboard
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-button');

    copyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const codeBlock = this.closest('.docs-example-code').querySelector('code');
            const code = codeBlock.textContent;

            navigator.clipboard.writeText(code).then(() => {
                // Visual feedback
                this.classList.add('copied');
                this.textContent = 'Copiado!';

                setTimeout(() => {
                    this.classList.remove('copied');
                    this.textContent = 'Copiar';
                }, 2000);
            }).catch(err => {
                console.error('Erro ao copiar:', err);
            });
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.docs-sidebar');

    if (!menuToggle || !sidebar) return;

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 992) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Close sidebar on link click (mobile)
    const navLinks = sidebar.querySelectorAll('.docs-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('active');
            }
        });
    });
}

// Scroll spy - highlight current section in nav
function initScrollSpy() {
    const sections = document.querySelectorAll('.docs-section[id]');
    const navLinks = document.querySelectorAll('.docs-nav-link');

    if (sections.length === 0) return;

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Highlight active page in navigation
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.docs-nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// Simple syntax highlighting
function highlightCode() {
    const codeBlocks = document.querySelectorAll('.docs-example-code code');

    codeBlocks.forEach(block => {
        let html = block.innerHTML;

        // Highlight HTML tags
        html = html.replace(/&lt;(\/?[\w-]+)([^&gt;]*)&gt;/g, function (match, tag, attrs) {
            let highlighted = '&lt;<span class="tag">' + tag + '</span>';

            // Highlight attributes
            if (attrs) {
                attrs = attrs.replace(/([\w-]+)=/g, '<span class="attr">$1</span>=');
                attrs = attrs.replace(/=&quot;([^&quot;]*)&quot;/g, '=<span class="string">&quot;$1&quot;</span>');
                highlighted += attrs;
            }

            highlighted += '&gt;';
            return highlighted;
        });

        block.innerHTML = html;
    });
}

// Run syntax highlighting after page load
window.addEventListener('load', highlightCode);

// ========================================
// TOOLTIP FUNCTIONALITY
// ========================================

function initTooltips() {
    const elementsWithTooltip = document.querySelectorAll('[data-tooltip]');

    elementsWithTooltip.forEach(element => {
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip tooltip-top';
        tooltip.innerHTML = `
            <div class="tooltip-arrow"></div>
            ${element.getAttribute('data-tooltip')}
        `;

        // Position tooltip
        const position = element.getAttribute('data-tooltip-position') || 'top';
        tooltip.className = `tooltip tooltip-${position}`;

        // Append to element
        element.style.position = 'relative';
        element.appendChild(tooltip);

        // Show on hover
        element.addEventListener('mouseenter', function () {
            positionTooltip(tooltip, element, position);
            tooltip.classList.add('show');
        });

        // Hide on leave
        element.addEventListener('mouseleave', function () {
            tooltip.classList.remove('show');
        });

        // Show on focus (accessibility)
        element.addEventListener('focus', function () {
            positionTooltip(tooltip, element, position);
            tooltip.classList.add('show');
        });

        // Hide on blur
        element.addEventListener('blur', function () {
            tooltip.classList.remove('show');
        });
    });
}

function positionTooltip(tooltip, element, position) {
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    switch (position) {
        case 'top':
            tooltip.style.bottom = '100%';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%) translateY(-8px)';
            tooltip.style.top = 'auto';
            tooltip.style.right = 'auto';
            break;
        case 'bottom':
            tooltip.style.top = '100%';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%) translateY(8px)';
            tooltip.style.bottom = 'auto';
            tooltip.style.right = 'auto';
            break;
        case 'left':
            tooltip.style.right = '100%';
            tooltip.style.top = '50%';
            tooltip.style.transform = 'translateY(-50%) translateX(-8px)';
            tooltip.style.left = 'auto';
            tooltip.style.bottom = 'auto';
            break;
        case 'right':
            tooltip.style.left = '100%';
            tooltip.style.top = '50%';
            tooltip.style.transform = 'translateY(-50%) translateX(8px)';
            tooltip.style.right = 'auto';
            tooltip.style.bottom = 'auto';
            break;
    }
}

// ========================================
// STEPPER FUNCTIONALITY
// ========================================

function initSteppers() {
    const steppers = document.querySelectorAll('.stepper');

    steppers.forEach(stepper => {
        const items = stepper.querySelectorAll('.stepper-item');

        // Make steps clickable if they have a data-step attribute
        items.forEach((item, index) => {
            const step = item.querySelector('.stepper-step');

            // Add click handler if not disabled
            if (!item.classList.contains('disabled')) {
                step.style.cursor = 'pointer';

                step.addEventListener('click', function () {
                    goToStep(stepper, index);
                });
            }
        });

        // Add navigation buttons if data-navigation attribute exists
        if (stepper.hasAttribute('data-navigation')) {
            addStepperNavigation(stepper);
        }
    });
}

function goToStep(stepper, stepIndex) {
    const items = stepper.querySelectorAll('.stepper-item');

    items.forEach((item, index) => {
        item.classList.remove('active', 'completed');

        if (index < stepIndex) {
            item.classList.add('completed');
        } else if (index === stepIndex) {
            item.classList.add('active');
        }
    });

    // Trigger custom event
    const event = new CustomEvent('stepChanged', {
        detail: { step: stepIndex }
    });
    stepper.dispatchEvent(event);
}

function nextStep(stepper) {
    const items = stepper.querySelectorAll('.stepper-item');
    const currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

    if (currentIndex < items.length - 1) {
        goToStep(stepper, currentIndex + 1);
    }
}

function previousStep(stepper) {
    const items = stepper.querySelectorAll('.stepper-item');
    const currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

    if (currentIndex > 0) {
        goToStep(stepper, currentIndex - 1);
    }
}

function addStepperNavigation(stepper) {
    const navContainer = document.createElement('div');
    navContainer.className = 'stepper-navigation';
    navContainer.style.cssText = 'display: flex; gap: 1rem; margin-top: 2rem; justify-content: space-between;';

    const prevButton = document.createElement('button');
    prevButton.className = 'btn btn-outline-gray-500';
    prevButton.textContent = '← Anterior';
    prevButton.addEventListener('click', () => previousStep(stepper));

    const nextButton = document.createElement('button');
    nextButton.className = 'btn btn-aura-500';
    nextButton.textContent = 'Próximo →';
    nextButton.addEventListener('click', () => nextStep(stepper));

    navContainer.appendChild(prevButton);
    navContainer.appendChild(nextButton);

    // Insert after stepper
    stepper.parentNode.insertBefore(navContainer, stepper.nextSibling);

    // Update button states
    stepper.addEventListener('stepChanged', function (e) {
        const items = stepper.querySelectorAll('.stepper-item');
        const currentIndex = e.detail.step;

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === items.length - 1;

        if (currentIndex === items.length - 1) {
            nextButton.textContent = 'Concluir ✓';
        } else {
            nextButton.textContent = 'Próximo →';
        }
    });

    // Initial state
    const initialEvent = new CustomEvent('stepChanged', {
        detail: { step: 0 }
    });
    stepper.dispatchEvent(initialEvent);
}

// Export functions for use in examples
window.AuraComponents = {
    goToStep,
    nextStep,
    previousStep,
    updateProgress: function (selector, percentage) {
        const progressBar = document.querySelector(selector);
        if (progressBar) {
            progressBar.style.width = percentage + '%';
            progressBar.textContent = percentage + '%';
        }
    }
};

// ========================================
// NAVIGATION
// ========================================

function initNavigation() {
    const navigationData = {
        sections: [
            {
                title: "Introdução",
                basePath: "./",
                items: [
                    { label: "Visão geral", href: "index.html" },
                    { label: "Componentes", href: "componentes.html" }
                ]
            },
            {
                title: "Componentes",
                basePath: "./components/",
                items: [
                    { label: "Buttons", href: "buttons.html" },
                    { label: "Avatars", href: "avatar.html" },
                    { label: "Cards", href: "cards.html" },
                    { label: "Forms", href: "forms.html" },
                    { label: "Lists", href: "lists.html" },
                    { label: "Tables", href: "tables.html" },
                    { label: "Steppers", href: "steppers.html" },
                    { label: "Sliders", href: "sliders.html" },
                    { label: "Carousels", href: "carousels.html" },
                    { label: "Tabs", href: "tabs.html" },
                    { label: "Navbar", href: "navbar.html" },
                    { label: "Sidebar", href: "sidebar.html" },
                    { label: "Paginator", href: "paginator.html" },
                    { label: "Breadcrumbs", href: "breadcrumbs.html" },
                    { label: "Accordion", href: "accordion.html" },
                    { label: "Calendar", href: "calendar.html" },
                    { label: "Funnels", href: "funnels.html" },
                    { label: "Modals", href: "modals.html" },
                ]
            },
            {
                title: "Feedbacks",
                basePath: "./feedbacks/",
                items: [
                    { label: "Alerts", href: "alerts.html" },
                    { label: "Messages", href: "messages.html" },
                    { label: "Tooltips", href: "tooltips.html" },
                    { label: "Badges", href: "badges.html" },
                    { label: "Skeletons", href: "skeletons.html" },
                    { label: "Progress", href: "progress.html" },
                    { label: "Toasts", href: "toasts.html" },
                ]
            },
            {
                title: "Utilidades",
                basePath: "./utils/",
                items: [
                    { label: "Grid", href: "grid.html" },
                    { label: "Tipografia", href: "typography.html" },
                    { label: "Utilidades", href: "utilities.html" },
                    { label: "Animações", href: "animations.html" },
                    { label: "Assessibilidade", href: "accessibility.html" },
                ]
            }
        ]
    };

    const nav = document.querySelector('.docs-sidebar');
    if (!nav) return;

    // Captura o caminho atual para corrigir URLs relativas
    const currentPath = window.location.pathname.split('/').slice(0, -1).join('/') + '/';

    // Converte caminhos relativos corretamente
    function resolvePath(base, file) {
        // Pega a pasta atual (ex.: "/docs/components/buttons.html" → "components")
        const currentFolder = currentPath.split("/").filter(Boolean).pop();

        // Remove "./" do início do base para comparar
        const baseFolder = base.replace("./", "").replace("/", ""); // "./components/" → "components"

        // Se o arquivo atual está dentro de uma pasta
        if (currentFolder) {

            // Caso 1: estou em uma pasta e o link é da raiz
            if (baseFolder === "") {
                return "../".repeat(1) + file;
            }

            // Caso 2: estou na mesma pasta do link
            if (currentFolder === baseFolder) {
                return "./" + file;
            }

            // Caso 3: estou em uma pasta, e o link é de outra pasta → sobe e desce
            return "../" + baseFolder + "/" + file;
        }

        // Se estou na raiz
        return base + file;
    }

    let html = '';

    navigationData.sections.forEach(section => {
        html += `<div class="navbar_li li_title">${section.title}</div>`;

        section.items.forEach(item => {
            const href = resolvePath(section.basePath, item.href);
            html += `<div class="navbar_li"><a href="${href}">${item.label}</a></div>`;
        });
    });

    nav.innerHTML = html;
}

// =======================================
// FUNCTIONS
// ========================================
$(document).ready(function () {
    $(".select-input").select2({
        placeholder: "Selecione uma opção...",
        language: {
            searching: function () {
                return "Digite para pesquisar..."
            }
        }
    });
});

const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const html = document.documentElement;
let isDarkMode = false;

// Verifica se o tema está armazenado em cookie
if (getCookie('auraTheme') === 'dark') {
    isDarkMode = true;
    html.dataset.auraTheme = 'dark';
}

// Atualiza o texto do botão
themeToggle.innerHTML = isDarkMode ? '<i class="icon icon-kit-24"></i>' : '<i class="icon icon-kit-38"></i>';

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    html.dataset.auraTheme = isDarkMode ? 'dark' : 'light';

    // Salva o tema no cookie
    setCookie('auraTheme', isDarkMode ? 'dark' : 'light', 365); // Expira em 1 ano

    // Atualiza o texto do botão
    themeToggle.innerHTML = isDarkMode ? '<i class="icon icon-kit-24"></i>' : '<i class="icon icon-kit-38"></i>';
});

// Funções para manipular cookies
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

//responsavel por abrir o menu responsivo
menuToggle.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("active");
});


document.querySelectorAll('.navbar_li > a').forEach(link => {
    link.addEventListener('click', e => {
        const parent = e.currentTarget.parentElement;

        if (parent.querySelector('.navbar_li_dropdown')) {
            e.preventDefault();
            parent.classList.toggle('show');
        }
    });
});

const fabContainer = document.querySelector('.fab-container');
const mainFab = document.querySelector('.main-fab');

mainFab.addEventListener('click', () => {
    fabContainer.classList.toggle('active');
});