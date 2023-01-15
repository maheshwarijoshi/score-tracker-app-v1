import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScoreTrackerService } from '../../services/score-tracker.service';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.css'],
})
export class TeamResultsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  hasLoading: boolean = false;
  constructor(
    private readonly scoreTrackerService: ScoreTrackerService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
