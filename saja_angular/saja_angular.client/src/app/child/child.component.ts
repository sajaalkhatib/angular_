import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true, // 🔹 تحديد أن المكوّن مستقل
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() dataSent = new EventEmitter<string>();

  sendData() {
    this.dataSent.emit('hi saja   !');
  }
}
