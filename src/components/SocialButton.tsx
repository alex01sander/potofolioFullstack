import { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  children: ReactNode;
}

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-all"
    >
      {children}
    </a>
  );
}

export default SocialButton;
