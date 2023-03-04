import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() deleteO = new EventEmitter();

  onDelete() {
    console.log('deleted');
    this.deleteO.emit(this.mediaItem);
  }
}
