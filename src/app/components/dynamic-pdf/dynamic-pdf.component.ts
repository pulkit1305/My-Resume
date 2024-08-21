import { Component } from '@angular/core';
import jsPDF from 'jspdf'; // Import jsPDF
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-dynamic-pdf',
  standalone: true,
  templateUrl: './dynamic-pdf.component.html',
  styleUrls: ['./dynamic-pdf.component.css'],
})
export class DynamicPdfComponent {
  generatePDF() {
    const resumeContent = document.querySelector(
      '.resume-container'
    ) as HTMLElement;

    html2canvas(resumeContent).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height], // Custom dimensions
      });

      // Calculate the scaling factor to fit the image within A4 size
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const scalingFactor = Math.min(
        pdfWidth / imgWidth,
        pdfHeight / imgHeight
      );

      pdf.addImage(
        imgData,
        'PNG',
        0,
        0,
        imgWidth * scalingFactor,
        imgHeight * scalingFactor
      );
      pdf.save('resume.pdf');
    });
  }
}
