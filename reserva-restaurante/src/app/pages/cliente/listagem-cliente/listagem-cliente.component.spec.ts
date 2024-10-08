import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemClienteComponent } from './listagem-cliente.component';

describe('ListagemClienteComponent', () => {
  let component: ListagemClienteComponent;
  let fixture: ComponentFixture<ListagemClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
