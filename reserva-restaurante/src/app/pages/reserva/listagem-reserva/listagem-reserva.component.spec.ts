import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemReservaComponent } from './listagem-reserva.component';

describe('ListagemReservaComponent', () => {
  let component: ListagemReservaComponent;
  let fixture: ComponentFixture<ListagemReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
