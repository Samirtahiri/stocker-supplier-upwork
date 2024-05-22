import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CommonModule} from "@angular/common";


@Component({
  standalone: true,
  imports: [AccordionModule, AvatarModule, BadgeModule, ButtonModule, CardModule, CommonModule],
  selector: 'app-winner-detail',
  templateUrl: './winner-detail.component.html',
  styleUrls: ['./winner-detail.component.scss']
})
export class WinnerDetailComponent {
  cardItems = [1, 2, 3, 4, 5, 6];
}
