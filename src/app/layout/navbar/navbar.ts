import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  navLinks = [
    { title: 'Home', path: '/', isExternal: false },
    { title: 'Polyglot Stack', path: '/stack', isExternal: false },
    { title: 'Mastery Tracks', path: '/tracks', isExternal: false },
    { title: 'Projects', path: '/projects', isExternal: false },
    { title: 'About', path: '/about', isExternal: false },
    { title: 'Docs', path: 'https://docs.techthordev.com.br', isExternal: true }
  ];

  isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
