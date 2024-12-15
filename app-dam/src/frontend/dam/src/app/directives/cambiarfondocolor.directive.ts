import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCambiarFondoColor]',
  standalone: true
})
export class CambiarFondoColorDirective {
  @Input('appCambiarFondoColor') color: string = 'lightblue';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Esta función se ejecutará después de que el elemento haya sido completamente inicializado
  ngAfterViewInit() {
    // Verificamos que el `nativeElement` esté disponible
    if (this.el && this.el.nativeElement) {
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s ease');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('');
  }

  private changeBackgroundColor(color: string) {
    // Verificar si el `nativeElement` está disponible antes de manipular su estilo
    if (this.el && this.el.nativeElement) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    }
  }
}