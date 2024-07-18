import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  data= [{
    title:'E-commerce management',
    summary:['Multichannel sale', 'Simplifies inventory management & order processing',
        'Photoshoot ,catalog & listings','Improve product visibility',
        'Ensuring Customer feedback – with review and ratings ']
    },{
      title:'Compliance',
      summary:['Trademark registration', 'GST registration',
          'FSSAI license','Copyright','Patents', 'Legal Metrology']
    },{
      title:'Design and development',
      summary:['Website design', 'Packaging design', 'A+ content and listing','Logo design']
    },
    {
      title:'Digital marketing',
      summary:['Graphic design','Content creation','Ad and content strategy','Content for social media','Customer engagement',
      'SEO’s - website','Improve product visibility']
    }]

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
