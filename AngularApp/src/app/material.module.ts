

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatBadgeModule } from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [],
  imports: [
    MatTooltipModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatExpansionModule,
    LayoutModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatStepperModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    MatExpansionModule,
    LayoutModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatBadgeModule,
    MatStepperModule,
    MatTooltipModule,
    MatGridListModule]
  })
 export class MaterialModule { }

