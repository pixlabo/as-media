import { site } from "@/lib/site";

const whatsappNumber = site.phoneHref.replace(/\D/g, "");
const whatsappMessage =
  "Hi AS Media Services, I want to discuss a printing or branding project.";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp at ${site.phone}`}
      className="whatsapp-float fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-[#1faa59] text-white shadow-[0_14px_28px_rgba(18,18,18,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#169c4d] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 sm:h-7 sm:w-7"
        aria-hidden="true"
      >
        <path d="M19.05 4.94A9.86 9.86 0 0 0 12.02 2C6.55 2 2.1 6.45 2.1 11.92c0 1.75.46 3.46 1.32 4.98L2 22l5.25-1.38a9.86 9.86 0 0 0 4.77 1.22h.01c5.47 0 9.92-4.45 9.92-9.92a9.82 9.82 0 0 0-2.9-6.98Zm-7.03 15.22h-.01a8.16 8.16 0 0 1-4.15-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.14 8.14 0 0 1-1.25-4.4c0-4.49 3.66-8.15 8.16-8.15 2.18 0 4.22.85 5.76 2.39a8.08 8.08 0 0 1 2.38 5.76c0 4.49-3.66 8.14-8.1 8.14Zm4.47-6.09c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.22-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3s-.84.82-.84 2c0 1.18.86 2.32.98 2.48.12.16 1.69 2.59 4.1 3.63.57.25 1.02.4 1.37.51.58.18 1.1.15 1.52.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
}
