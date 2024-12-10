import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class=" shadow-lg bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE]">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex  lg:h-[180px] xs:h-[80px]  justify-center">
          <div class="flex items-center space-x-4 lg:text-[50px] md:text-[30px] sm:text-lg xs:text-lg">
            <a href="#" class="text-[#FFB400]  ">Home |</a>
            <a href="#" class="text-[#FFB400]  ">Sobre |</a>
            <a href="#" class="text-[#FFB400]  ">Cadastro |</a>
            <a href="#" class="text-[#FFB400]  ">Login</a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}