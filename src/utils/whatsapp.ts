export const handleWhatsAppClick = () => {
    const phoneNumber = "34696941775";
    const message = encodeURIComponent("¡Hola! Quisiera más información.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
};