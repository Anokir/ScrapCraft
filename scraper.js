const puppeteer = require('puppeteer');
async function run( url){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://www.traversymedia.com');
  await page.goto(url);


  // await page.screenshot({path: 'example.png', fullPage: true});
  // await page.pdf({path: 'example.pdf', format: 'A4'});
  // const html = await page.evaluate(() => {
  //   const element = document.querySelector('.DOjaWF.YJG4Cf');
  //   return element ? element.outerHTML : 'Element not found';
  // });

  // Logging the extracted HTML
  // console.log('HTML:', html);
  // const title = await page.evaluate(()=> document.title);
  // const text = await page.evaluate(()=> document.body.innerText);
  // const links = await page.evaluate(()=> Array.from(document.querySelectorAll('a'), (e)=> e.href));
  
  // const courses = await page.evaluate(()=> 
  //   Array.from(document.querySelectorAll('#cscourses .card'), (e)=> ({
  //     title: e.querySelector('.card-body h3').innerText,
  //     level: e.querySelector('.card-body .level').innerText,
  //     url: e.querySelector('.card-footer a').href,

  //   }))
  // );

  // const courses = await page.$$eval('#cscourses .card', (elements)=> elements.map(e => ({
  //   title: e.querySelector('.card-body h3').innerText,
  //   level: e.querySelector('.card-body .level').innerText,
  //   url: e.querySelector('.card-footer a').href,
  // })));

  // const courses = await page.$$eval('#cPHDOP col-12-12.CGtC98', (elements)=> elements.map(e => ({
  //     // title: e.querySelector('.KzDlHZ').innerText,
  //     tittle: 'hey',
  //     // level: e.querySelector('.card-body .level').innerText,
  //     // url: e.querySelector('.card-footer a').href,
  //   })));

  
  // Extracting the data
  const data = await page.evaluate(() => {
    const result = {};

    // Extracting inner text of element with class 'VU-ZEz'
    const name = document.querySelector('.VU-ZEz');
    result.name = name? name.innerText : '';

    // Extracting img src of element with class '_4WELSP _6lpKCl'
    const imgElement = document.querySelector('.vU5WPQ img');
    result.imgSrc = imgElement? imgElement.src : '';

    // Extracting number/text of element with class 'XQDdHH'
    const rating = document.querySelector('.XQDdHH');
    result.rating = rating? rating.innerText : '';

    // Extracting price of element with class 'Nx9bqj CxhGGd'
    const price = document.querySelector('.Nx9bqj.CxhGGd');
    result.price = price? price.innerText : '';

    return result;
});
  console.log('Data:', data);
  // console.log(courses);
  await browser.close();
  return data;
}

module.exports={run};