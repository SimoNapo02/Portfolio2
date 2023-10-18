import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-follower',
  templateUrl: './mouse-follower.component.html',
  styleUrls: ['./mouse-follower.component.css']
})
export class MouseFollowerComponent {
  isHovering = false;
  cursorSize = 24; // Initial cursor size
  expandedCursorSize = 40; // Cursor size when hovering over elements with the .mouse-hover class
  x = 0;
  y = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
    this.updateCursorPosition();
  }

  private updateCursorPosition() {
    const cursor = this.elementRef.nativeElement.querySelector('.cursor');
    this.renderer.setStyle(cursor, 'left', `${this.x}px`);
    this.renderer.setStyle(cursor, 'top', `${this.y}px`);
  }

  private updateCursorSize() {
    const cursor = this.elementRef.nativeElement.querySelector('.cursor');
    const size = this.isHovering ? this.expandedCursorSize : this.cursorSize;
    this.renderer.setStyle(cursor, 'width', `${size}px`);
    this.renderer.setStyle(cursor, 'height', `${size}px`);
  }

  onHover() {
    this.isHovering = true;
    this.updateCursorSize();
  }

  onUnhover() {
    this.isHovering = false;
    this.updateCursorSize();
  }
}
