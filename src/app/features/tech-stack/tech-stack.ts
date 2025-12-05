import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TechStackItem, TECH_STACK_DATA, getGroupedStack } from '../../data/tech-stack.data';

@Component({
  selector: 'app-tech-stack',
  imports: [CommonModule],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css',
})
export class TechStack implements OnInit {
  groupedStack: Record<TechStackItem['category'], TechStackItem[]> = {} as Record<
    TechStackItem['category'],
    TechStackItem[]
  >;

  ngOnInit(): void {
    this.groupedStack = getGroupedStack(TECH_STACK_DATA);
    console.log('Grouped Stack Data:', this.groupedStack);
  }
  
  // Helper to get category names in the desired order for *ngFor iteration
    get categories(): (keyof typeof this.groupedStack)[] {
      // Define an ideal order, otherwise use Object.keys()
      const desiredOrder: TechStackItem['category'][] = [
        'Backend Language', 
        'Framework', 
        'Frontend Framework', 
        'Database', 
        'DevOps', 
        'Development Tools'
      ];
      
      // Filter to ensure only existing categories are used, maintaining order
      return desiredOrder.filter(category => this.groupedStack[category]);
    }
  
}
