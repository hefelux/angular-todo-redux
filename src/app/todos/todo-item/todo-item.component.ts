import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';
import * as actions from './../todo.actions';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

    @Input() todo: Todo;

    chkCompleted: FormControl;
    txtInputEdit: FormControl;
    editMode: boolean;
    @ViewChild('inputFisico') txtInputFisico: ElementRef;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.chkCompleted = new FormControl(this.todo.complete);
        this.txtInputEdit = new FormControl(this.todo.text, Validators.required);
        this.chkCompleted.valueChanges.subscribe(value => {
            this.store.dispatch(actions.toggle({ id: this.todo.id }));
        });
    }

    editar(): void {
        this.editMode = true;
        this.txtInputEdit.setValue(this.todo.text);
        setTimeout(() => this.txtInputFisico.nativeElement.select(), 1);
    }

    editDone(): void {
        this.editMode = false;
        if (this.txtInputEdit.invalid) { return; }
        if (this.txtInputEdit.value === this.todo.text) { return; }
        this.store.dispatch(actions.edit({ id: this.todo.id, text: this.txtInputEdit.value }));
    }

    borrar(): void {
        this.store.dispatch(actions.eliminate({ id: this.todo.id }));
    }

}
