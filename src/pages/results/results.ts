import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  results = [];
  constructor(
    private performanceData: PerformanceDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.performanceData
      .getResults()
      .subscribe(data => (this.results = data.entries));
  }
}
