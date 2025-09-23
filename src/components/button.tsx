import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}: ButtonProps): React.ReactElement {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-200 focus:outline-none  focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2 group';
  
  const variantClasses = {
    primary: 'bg-fuchsia-800 hover:bg-fuchsia-900 text-white focus-visible:ring-fuchsia-400',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus-visible:ring-gray-400',
    outline: 'border-2 border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-700 hover:text-white focus-visible:ring-fuchsia-400'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`.trim();
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      style={{fontFamily:'Nippo'}}
    >
      <span className="transition-all duration-150 inline-block  group-active:translate-y-0.5">
        {children}
      </span>
    </button>
  );
}
