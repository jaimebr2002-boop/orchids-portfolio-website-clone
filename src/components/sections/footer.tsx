import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Jaime Bernaldez Reina. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      <a
        href="https://wa.me/34722785142"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-20 w-20 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 overflow-hidden"
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1764263457385.png"
          alt="WhatsApp"
          width={80}
          height={80}
          className="h-full w-full object-cover"
        />
      </a>
    </>
  );
};

export default Footer;