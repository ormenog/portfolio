import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  attivo = false; // Stato iniziale come booleano

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.attivo = true;
  }

  closeDialog() {
    this.attivo = false;
    }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event): void {
    const clickedInside = (event.target as HTMLElement).closest('.menu, .dropdown-menu');
    if (!clickedInside) {
      this.attivo = false;
    }
  }
}
