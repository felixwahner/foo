import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ExhibitorsService } from './shared/services/exhibitors.service';
import { Observable } from 'rxjs';
import { Exhibitor } from './shared/models/exhibitor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public exhibitors$: Observable<Array<Exhibitor>>;
  constructor(private exhibitorsService: ExhibitorsService) {
    this.exhibitors$ = this.exhibitorsService.get();
  }
  public ngOnInit(): void {}
}
