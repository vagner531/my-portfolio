import { GeneralService } from './../services/general.service';
import { Component, EventEmitter, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnDestroy, OnChanges {
  @Output() finishContact: EventEmitter<any> = new EventEmitter();

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public generalService: GeneralService

  ) {}

  onSubmit(): void {
    const verifyForm = Boolean(
      this.form.controls['email'].errors ||
        this.form.controls['name'].errors ||
        this.form.controls['message'].errors
    );
    if (verifyForm) {
      alert('Preencha os campos corretamente');
      return;
    }

    const data = {
      to: 'vagnerndsantos@gmail.com',
      subject: `Contato de ${this.form.value.name}`,
      body: `Nome: ${this.form.value.name}\nE-mail: ${this.form.value.email}\nMensagem: ${this.form.value.message}`,
    };
    const headers = { 'Content-Type': 'application/json' };

    this.http
      .post('https://seu-servidor-de-emails.com/api/email', data, { headers })
      .subscribe(
        (response) => {
          console.log(response);
          alert('E-mail enviado com sucesso!');
          this.finishContact.emit();
          this.form.reset();
        },
        (error) => {
          console.error(error);
          alert('Erro ao enviar e-mail. Tente novamente mais tarde.');
        }
      );

  }

  ngOnDestroy(): void {
    this.form.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['finishContact'] && !changes['finishContact'].firstChange) {
      this.form.reset();
    }
  }
}
