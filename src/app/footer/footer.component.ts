import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports:[NgClass],
  template: `
    <footer   [ngClass]="isMobileView ? 'footersmall-bg' : 'footer-bg'" class=" lg:h-[238.78px] xs:h-[103px]  md:h-full text-white content-end	 mt-auto">
      <div class="max-w-7xl mx-auto px-4 ">
      <div class="  grid grid-cols-1 self ">
          <div class="lg:content-evenly	 lg:text-[50px] xs:text-lg xs:ml-[25px] lg:w-full lg:h-[100px] xs:w-[125px] !font-Poppins">
            <h1>© Vinícius Neves Costa</h1>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
    @Input() isMobileView = false;

}
