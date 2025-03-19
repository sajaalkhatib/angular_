import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component'; // 🔹 استيراد المكوّن الابن

@Component({
  selector: 'app-parent',
  standalone: true, // 🔹 جعل المكوّن Standalone
  imports: [ChildComponent], // 🔹 إضافة المكوّن الابن هنا بدلاً من `app.module.ts`
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  receivedData: string = '';

  handleData(data: string) {
    this.receivedData = data;
  }
}
