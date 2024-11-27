import { ElementType } from 'react';

interface LinkProps {
  href: string;
  children: string;
  icon: ElementType;
}

export function Link({ href, children, icon: Icon }: LinkProps) {
  return (
    <a
      href={href}
      className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white group"
    >
      <Icon className="mr-3 h-6 w-6" />
      {children}
    </a>
  );
}