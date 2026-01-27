import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const filePath = path.join(__dirname, 'resume.html');
  // Ensure correct file protocol for Windows
  const fileUrl = 'file://' + filePath.replace(/\\/g, '/'); 

  console.log(`Opening: ${fileUrl}`);
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  console.log('Generating PDF...');
  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true
  });

  console.log('PDF saved as resume.pdf');

  await browser.close();
})();
