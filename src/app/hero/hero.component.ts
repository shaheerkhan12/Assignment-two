import { NgClass } from '@angular/common';
import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      [ngClass]="isMobileView ? 'background-mb' : 'background'"
      class="lg:h-[1024px] xs:h-[703px] xs:!bg-cover lg:grid lg:justify-center  bg-no-repeat bg-center  text-white xs:py-50 lg:py-32"
    >
      <div class=" xs:flex lg:hidden  lg:h-[180px] xs:h-[80px]  justify-center">
        <div
          class="flex items-center space-x-4 lg:text-[50px] md:text-[30px] sm:text-lg xs:text-lg"
        >
          <a href="#" class="text-[#FFB400]  ">Home |</a>
          <a href="#" class="text-[#FFB400]  ">Sobre |</a>
          <a href="#" class="text-[#FFB400]  ">Cadastro |</a>
          <a href="#" class="text-[#FFB400]  ">Login</a>
        </div>
      </div>
      <div
        class="max-w-7xl mx-[3rem] px-4 lg:grid xs:block grid-cols-2 gap-2 text-center space-y-20"
      >
        <div class="lg:self-center xs:text-start xs:mt-[50px]">
          <h1
            class="lg:leading-[114.3px] xs:leading-[57.15px]  mb-6 lg:text-[100px] md:text-[80px] sm:text-[60px] xs:text-[50px]"
          >
            CIÊNCIAS <br />
            HUMANAS
          </h1>
          <button
            class="lg:w-[320px] xs:w-[160px] sm:w-[160px]  lg:h-[67.5px] xs:h-[33.75px] sm:h-[33.75px] bg-[#FFB400] lg:text-[40px] xs:text-lg sm:text-lg xs:leading-10 rounded-[50px] !font-Poppins px-8 lg:py-3 rounded-full  hover:bg-gray-100 transition-colors"
          >
            Começar
          </button>
        </div>
        <div
          class="cover-image lg:w-[640px] lg:h-[640px] xs:h-[240px] xs:w-[240px] xs:mt-[70px] xs:place-self-center"
        ></div>
      </div>
    </div>
  `,
})
export class HeroComponent {
    @Input() isMobileView = false;
}
