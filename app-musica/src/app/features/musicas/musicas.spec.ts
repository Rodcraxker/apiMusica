import { ComponentFixture, TestBed } from '@angular/core/testing';

// Asegúrate de que el archivo se llame musica.component.ts (o simplemente musica.ts)
import { MusicaComponent } from './musicas';

describe('MusicaComponent', () => {
  let component: MusicaComponent;
  let fixture: ComponentFixture<MusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});