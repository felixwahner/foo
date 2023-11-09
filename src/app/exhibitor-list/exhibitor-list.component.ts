import { Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Exhibitor } from '../shared/models/exhibitor';
import { FavoritesService } from '../shared/services/favorites.service';
@Component({
    selector: 'exhibitor-list',
    templateUrl: './exhibitor-list.component.html',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule]
})
export class ExhibitorListComponent {
    constructor(private favoritesService: FavoritesService) {}
    @Input() public exhibitors: Array<Exhibitor> | null = null;
}
