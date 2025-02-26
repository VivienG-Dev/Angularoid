import { Component, Input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() ariaLabel?: string;

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-[0_-3px_0_0_rgba(0,0,0,0.1)_inset] transition-all duration-300 ease-in-out';

    // Size classes
    const sizeClasses = {
      small: 'text-xs py-1 px-3',
      medium: 'text-sm py-2 px-4',
      large: 'text-base py-3 px-6'
    };

    // Variant classes
    const variantClasses = {
      primary: `bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white hover:bg-[var(--primary-color)] focus:ring-[var(--primary-color)]`,
      secondary: `bg-[var(--secondary-color)] hover:[var(--tertiary-color)] text-white hover:bg-[var(--secondary-color)] focus:ring-[var(--secondary-color)]`,
      outline: `bg-transparent border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white focus:ring-[var(--primary-color)]`,
      text: `bg-transparent text-[var(--primary-color)] focus:ring-[var(--primary-color)] shadow-none hover:underline hover:underline-offset-4 hover:decoration-2`
    };

    // Disabled classes
    const disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    // Full width class
    const widthClass = this.fullWidth ? 'w-full' : '';

    return `${baseClasses} ${sizeClasses[this.size]} ${variantClasses[this.variant]} ${disabledClasses} ${widthClass}`;
  }
}
