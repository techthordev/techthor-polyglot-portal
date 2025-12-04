import { Routes } from '@angular/router';
import { Content } from './layout/content/content';
import { TechStack } from './features/tech-stack/tech-stack';
import { MasteryTracks } from './features/mastery-tracks/mastery-tracks';
import { Projects } from './features/projects/projects';
import { About } from './features/about/about';

export const routes: Routes = [

  { path: '', component: Content, title: 'TechThorDev - Home' },
  
  // Feature Routes: Mapped to the simplified component names
    { path: 'stack', component: TechStack, title: 'Tech Stack - Polyglot' },
    { path: 'tracks', component: MasteryTracks, title: 'Mastery Tracks - Curated Paths' },
    { path: 'projects', component: Projects, title: 'Projects' },
    { path: 'about', component: About, title: 'About Thorsten' },
    
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
