import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {UsersService} from '../../shared/services/users.service'
import {switchMap} from 'rxjs/operators'
import {of} from 'rxjs'
import {MaterialService} from '../../shared/classes/material.service'
import {User} from '../../shared/interfaces'

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  @ViewChild('input') inputRef: ElementRef
  form: FormGroup
  isNew = true
  user: User

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
	  email: new FormControl(null, Validators.required),
	  password: new FormControl(null, Validators.required)
    })

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false
              return this.usersService.getById(params['id'])
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (user: User) => {
          if (user) {
            this.user = user
            this.form.patchValue({
              name: user.name,
			  email: user.email,
			  password: user.password
            })
            MaterialService.updateTextInputs()
          }

          this.form.enable()
        },
        error => MaterialService.toast(error.error.message)
      )
  }

  triggerClick() {
    this.inputRef.nativeElement.click()
  }

  deleteUser() {
    const decision = window.confirm(`Вы уверены, что хотите удалить пользователя "${this.user.name}"`)

    if (decision) {
      this.usersService.delete(this.user._id)
        .subscribe(
          response => MaterialService.toast(response.message),
          error => MaterialService.toast(error.error.message),
          () => this.router.navigate(['/users'])
        )
    }
  }

  

  onSubmit() {
    let obs$
    this.form.disable()

    if (this.isNew) {
      obs$ = this.usersService.create(this.form.value.name, this.form.value.email, this.form.value.password)
    } else {
      obs$ = this.usersService.update(this.user._id, this.form.value.name, this.form.value.email, this.form.value.password)
    }

    obs$.subscribe(
      user => {
        this.user = user
        MaterialService.toast('Изменения сохранены.')
        this.form.enable()
      },
      error => {
        MaterialService.toast(error.error.message)
        this.form.enable()
      }
    )
  }

}