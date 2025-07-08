import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from '../../../shared/components/base-form.component';
import {FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {EscritorService} from '../../../profile/services/escritor.service';
import {IlustradorService} from '../../../profile/services/ilustrador.service';
import {SignUpRequest} from '../../model/sign-up.request';
import {Ilustrador} from '../../../profile/model/ilustrador.entity';
import {Escritor} from '../../../profile/model/escritor.entity';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseFormComponent implements OnInit {
  form!: FormGroup;
  formEscritor!: FormGroup;
  formIlustrador!: FormGroup;
  userId : number = -1;
  showPassword = false;

  submitted = false;
  roleSelected : string = '';
  constructor(private builder: FormBuilder, private authenticationService: AuthenticationService,
              private escritorService: EscritorService, private ilustradorService: IlustradorService,
              private router: Router) {
    super();

  }
  ngOnInit(): void {
    this.form = this.builder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required],
      role: ['', Validators.required]
    });
    this.formEscritor = this.builder.group({
      biografia : ['', Validators.required],
      foto : ['', Validators.required],
      redes : ['', Validators.required],
      suscripcion : [0, Validators.required],
    });
    this.formIlustrador = this.builder.group({
      biografia : ['', Validators.required],
      foto : ['', Validators.required],
      redes : ['', Validators.required],
      suscripcion : [0, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      alert("Completa todos los campos obligatorios.");
      return;
    }

    const role = this.form.value.role;
    const username = this.form.value.username;
    const password = this.form.value.password;

    const signUpRequest = new SignUpRequest(username, password, role);

    this.submitted = true;
    this.authenticationService.signUp(signUpRequest)
      .then(() => {
        this.router.navigate(['/login']);
        this.authenticationService.currentUserId.subscribe(id => {
          this.userId = id;
          this.createProfile(role);
        });
      })
      .catch(error => {
        alert("Error al registrar: " + error.message);
        console.error('Sign-up failed:', error);
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


  createIlustrador(ilustrador : Ilustrador){
    const newIlustrador = {
      firstName : ilustrador.firstName,
      lastName : ilustrador.lastName,
      biografia: ilustrador.biografia,
      foto : ilustrador.foto,
      redes: ilustrador.redes,
      suscripcion: ilustrador.suscripcion,
      userId: ilustrador.userId,
    }
    this.ilustradorService.create(newIlustrador).subscribe(
      response => console.log('Item created successfully:', response),
      error => console.error('Error creating item:', error)
    );
  }

  createEscritor(escritor: Escritor) {
    const newEscritor ={
      firstName : escritor.firstName,
      lastName : escritor.lastName,
      biografia: escritor.biografia,
      foto : escritor.foto,
      redes: escritor.redes,
      suscripcion: escritor.suscripcion,
      userId: escritor.userId,
    }
    this.escritorService.create(newEscritor).subscribe(
      response => console.log('Item created successfully:', response),
      error => console.error('Error creating item:', error)
    );
  }

  escritorSelected(){
    this.roleSelected = 'ESCRITOR';
  }
  ilustradorSelected(){
    this.roleSelected = 'ILUSTRADOR';
  }

  getRole() : number {
    if (this.roleSelected === 'ESCRITOR') return 1;
    else return 2;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
