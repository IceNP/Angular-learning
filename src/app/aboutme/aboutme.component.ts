import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { videos } from '../videos';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})

export class AboutmeComponent implements OnInit {

  videos = videos;
  cleanURL(videos: string ): SafeUrl {
    return   this.sanitizer.bypassSecurityTrustResourceUrl(videos);
    }

  constructor(
      private sanitizer:DomSanitizer
    ) {
    }

  ngOnInit(): void {

  }


}
