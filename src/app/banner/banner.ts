import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.html',
  styleUrls: ['./banner.css'],
})
export class Banner implements OnInit {
  @Input() size: 'full' | 'half' = 'full';

  wrapperClass = 'w-full overflow-hidden';
  imgClass = 'w-full h-full object-cover';

  ngOnInit(): void {
    if (this.size === 'full') {
      // responsive hero heights
      this.wrapperClass = 'w-full h-80 md:h-[420px] lg:h-[480px] overflow-hidden';
      this.imgClass = 'w-full h-full object-cover';
    } else {
      this.wrapperClass = 'w-full h-40 md:h-52 overflow-hidden';
      this.imgClass = 'w-full h-full object-cover';
    }
  }
}
