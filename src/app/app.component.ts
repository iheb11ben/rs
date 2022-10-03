import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rs';
  elementType= NgxQrcodeElementTypes.URL
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH
  value = ''
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 501;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a6');
      let position = 50;
      PDF.addImage(FILEURI, 'PNG', 35, position, fileWidth, fileHeight);
      PDF.save('Qr-Code.pdf');
    });
  }
}
