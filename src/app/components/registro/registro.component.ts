import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    usuarioForm: FormGroup;
    exCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    exNumero = /^[0-9]+$/;
    id: string | null;
    titulo_formulario = 'enviar datos'

    constructor(private fb: FormBuilder, private _contactoService: ContactoService, private router: Router, private idRoute: ActivatedRoute) {
        this.usuarioForm = this.fb.group({
            correo: ['', [Validators.required, Validators.pattern(this.exCorreo)]],
            nombre: ['', Validators.required],
            direccion: ['', [Validators.required, Validators.minLength(5)]],
            edad: ['', [Validators.required, Validators.pattern(this.exNumero)]],
            ciudad: ['', Validators.required]
        })

        this.id = this.idRoute.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
        this.accionSolicitada();
    }

    guardarUsuario() {
        const contactoUsuario: Contacto = {
            correo: this.usuarioForm.get('correo')?.value,
            nombre: this.usuarioForm.get('nombre')?.value,
            direccion: this.usuarioForm.get('direccion')?.value,
            ciudad: this.usuarioForm.get('ciudad')?.value,
            edad: this.usuarioForm.get('edad')?.value
        }
        console.log(contactoUsuario)

        if (this.id !== null) {
            this._contactoService.putContacto(this.id, contactoUsuario).subscribe(data=>{
                this.router.navigate(['admin'])
                Swal.fire({
					title: 'Datos actualizados!',
					text: 'Se guardaron los cambios',
					icon: 'success',
					confirmButtonText: 'Vale'
				})
            },error=>{})
        }else{
            this._contactoService.postContacto(contactoUsuario).subscribe(data => {
                this.router.navigate(['/mensaje-enviado'])
            }, error => {
                console.log(error)
            })
        }
    }

    accionSolicitada(){
        if(this.id !== null){
            this.titulo_formulario = "Actualizar datos"
            this._contactoService.getContacto(this.id).subscribe(data=>{
                this.usuarioForm.setValue({
                    correo: data.correo,
                    nombre: data.nombre,
                    direccion: data.direccion,
                    ciudad: data.ciudad,
                    edad: data.edad
                })
            },error=>{
                console.log(error)
            })
        }
    }


}
