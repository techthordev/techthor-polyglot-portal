import { Component } from '@angular/core';
import { MASTERY_TRACK_DATA, getGroupedMasteryTracks } from '../../data/mastery-track.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mastery-tracks',
  imports: [CommonModule],
  templateUrl: './mastery-tracks.html',
  styleUrl: './mastery-tracks.css',
})
export class MasteryTracks {
  tracks = MASTERY_TRACK_DATA;
  groupedTracks = getGroupedMasteryTracks(this.tracks);
}
