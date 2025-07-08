import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from '../../../shared/components/base-form.component';
import {FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {EscritorService} from '../../../profile/services/escritor.service';
import {IlustradorService} from '../../../profile/services/ilustrador.service';
import {SignUpRequest} from '../../model/sign-up.request';
import {Ilustrador} from '../../../profile/model/ilustrador.entity';
import {Escritor} from '../../../profile/model/escritor.entity';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterLink,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseFormComponent implements OnInit {
  form!: FormGroup;
  formEscritor!: FormGroup;
  formIlustrador!: FormGroup;
  userId: number = -1;
  showPassword = false;
  submitted = false;
  step: number = 1; // <-- Etapa del registro

  constructor(
    private builder: FormBuilder,
    private authenticationService: AuthenticationService,
    private escritorService: EscritorService,
    private ilustradorService: IlustradorService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.formEscritor = this.builder.group({
      biografia: ['', Validators.required],
      foto: ['', Validators.required],
      redes: ['', Validators.required],
      suscripcion: [null, Validators.required]
    });

    this.formIlustrador = this.builder.group({
      biografia: ['', Validators.required],
      foto: ['', Validators.required],
      redes: ['', Validators.required],
      suscripcion: [null, Validators.required]
    });
  }

  goToNextStep() {
    if (this.form.invalid) {
      alert("Completa todos los campos obligatorios.");
      return;
    }
    this.step = 2;
  }

  onSubmitFinal() {
    const role = this.form.value.role;
    const username = this.form.value.username;
    const password = this.form.value.password;

    const signUpRequest = new SignUpRequest(username, password, role);

    this.authenticationService.signUp(signUpRequest)
      .then(() => {
        this.authenticationService.currentUserId.subscribe(id => {
          this.userId = id;
          this.createProfile(role);
        });
      })
      .catch(error => {
        alert("Error al registrar: " + error.message);
      });
  }

  createProfile(role: string) {
    const firstName = this.form.value.firstName;
    const lastName = this.form.value.lastName;

    if (role === 'ESCRITOR') {
      const data = this.formEscritor.value;
      const escritor = new Escritor(firstName, lastName, data.biografia, data.foto, data.redes, data.suscripcion, this.userId);
      this.createEscritor(escritor);
    } else if (role === 'ILUSTRADOR') {
      const data = this.formIlustrador.value;
      const ilustrador = new Ilustrador(firstName, lastName, data.biografia, data.foto, data.redes, data.suscripcion, this.userId);
      this.createIlustrador(ilustrador);
    }
  }

  createIlustrador(ilustrador: Ilustrador) {
    this.ilustradorService.create(ilustrador).subscribe(
      () => this.router.navigate(['/login']),
      error => console.error('Error creating ilustrador:', error)
    );
  }

  createEscritor(escritor: Escritor) {
    this.escritorService.create(escritor).subscribe(
      () => this.router.navigate(['/login']),
      error => console.error('Error creating escritor:', error)
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
