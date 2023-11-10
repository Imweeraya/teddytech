import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserRepository } from '../../models/userModel/user.repository';
import Swal from 'sweetalert2';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class Signin {
  slider: boolean = true;
  pack: boolean = false;
  package = 3;
  username = localStorage.getItem('username') || '';
  password = localStorage.getItem('password') || '';
  email = '';
  checkPassword = '';
  kid_name = '';
  kid_age: number = 3;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private userRepository: UserRepository,
    private router: Router
  ) {}

  toggleChangeClass() {
    const mainContainer =
      this.elementRef.nativeElement.querySelector('.container');
    if (mainContainer) {
      if (mainContainer.classList.contains('change')) {
        this.renderer.removeClass(mainContainer, 'change');
      } else {
        this.renderer.addClass(mainContainer, 'change');
      }
    }
  }

  changeBackgroundColor(section: string) {
    const element = document.querySelector(`.${section}`);
    if (element) {
      element.classList.toggle('choose');
    }
  }

  packChange() {
    this.pack = !this.pack;
    console.log(this.pack);
  }

  setPackage(value: number) {
    this.package = value;
    console.log('Selected Package:', this.package);
  }
  register() {
    if (this.package === 3) {
      if (this.kid_age > 6) {
        this.package = 0;
      } else {
        this.package = 1;
      }
      console.log(this.package);
    }

    const isRegister = this.userRepository.registerUser(
      this.package,
      this.username,
      this.email,
      this.password,
      this.checkPassword,
      this.kid_name,
      this.kid_age
    );

    if (isRegister) {
      console.log('Pass: registration is done');
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);

      setTimeout(() => {
        location.reload();
      }, 1500); 
    } else {
      console.log('ERROR: registration is failed');
      Swal.fire({
        imageUrl:
          'https://storage.googleapis.com/sticker-prod/k5Munc6RC0etp2SV8Qtp/28-1.thumb128.webp',
        imageWidth: 150,
        title: 'ERROR: Failed!! Sign-Up Unsuccessful...',
        text: 'Please Sign-Up again',
        confirmButtonText: 'Try again!',
        reverseButtons: true,
        confirmButtonColor: '#FC6F6F',
      });
    }
  }

  login() {
    const isAuthenticated = this.userRepository.loginUser(
      this.username,
      this.password
    );

    if (isAuthenticated) {
      this.calcuLogin();
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    } else {
      console.log('ERROR: Login failed');
      Swal.fire({
        imageUrl:
          'https://storage.googleapis.com/sticker-prod/k5Munc6RC0etp2SV8Qtp/28-1.thumb128.webp',
        imageWidth: 150,
        title: 'ERROR: Failed!! Sign-In Unsuccessful...',
        text: 'Please login again',
        confirmButtonText: 'Try again!',
        reverseButtons: true,
        confirmButtonColor: '#FC6F6F',
      });
    }
  }

  calcuLogin() {
    const num1: number = Math.floor(Math.random() * 13) + 3;
    const num2: number = Math.floor(Math.random() * 6) + 4;
    const result: number = num1 * num2;

    Swal.fire({
      title: 'Go to the board',
      text: `Calculate: ${result} divided by ${num1}`,
      input: 'number',
      inputValidator: (value) => {
        const enteredValue = parseInt(value);
        if (enteredValue >= 3 && enteredValue <= 15) {
          if (enteredValue === num2) {
            this.router.navigate(['/board']);
          } else {
            return 'Not Correct';
          }
        } else {
          return 'Please enter a valid answer between 3 and 15.';
        }
        return;
      },
      confirmButtonText: 'Yes!',
      confirmButtonColor: '#A1C554',
    });
  }
}
