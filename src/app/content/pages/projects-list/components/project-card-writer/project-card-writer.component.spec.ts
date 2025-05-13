import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardWriterComponent } from './project-card-writer.component';

describe('ProjectCardWriterComponent', () => {
  let component: ProjectCardWriterComponent;
  let fixture: ComponentFixture<ProjectCardWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardWriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCardWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
