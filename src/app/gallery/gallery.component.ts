import { Component, OnInit } from '@angular/core';

import { gallers } from '../gallers';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallers = gallers

  constructor() { }

  ngOnInit(): void {
  }

}
