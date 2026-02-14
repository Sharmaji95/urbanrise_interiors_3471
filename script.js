document.addEventListener('DOMContentLoaded', () => {

    // --- Card Hover Effects ---
    const cards = document.querySelectorAll('.link-card, .info-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08) 0%, rgba(30, 30, 40, 0.6) 100%)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.background = 'var(--card-bg)';
        });
    });

    // --- Social Media Dropdown Logic ---
    const socialToggleBtn = document.getElementById('socialToggleBtn');
    const socialContent = document.getElementById('socialContent');
    const toggleIcon = document.getElementById('toggleIcon');

    if (socialToggleBtn && socialContent) {
        socialToggleBtn.addEventListener('click', () => {
            socialContent.classList.toggle('open');
            socialToggleBtn.classList.toggle('active');
        });
    }

    // --- Save Contact Logic (vCard) ---
    const saveContactBtn = document.getElementById('saveContactBtn');
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', () => {
            // Define vCard content
            const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Urbanrise Interiors
ORG:Urbanrise Interiors
TEL;TYPE=WORK,VOICE:+919034795106
URL:https://urbanriseinteriors.com
EMAIL:contact@urbanriseinteriors.com
ADR;TYPE=WORK:;;Shop No 2, First Floor, Dharm Singh Market, Sanoli Rd, opp. Malik CNG Petrol Pump;Panipat;Haryana;132103;India
NOTE:Specialist in Interior & Exterior Work, Wall Paneling, Ceilings & Flooring.
END:VCARD`;

            // Create blob and download link
            const blob = new Blob([vCardData], { type: 'text/vcard' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'Urbanrise_Interiors.vcf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        });
    }

    console.log('Urbanrise Interiors features loaded.');
});
