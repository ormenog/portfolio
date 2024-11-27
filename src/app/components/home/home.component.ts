import { Component, Input, OnInit } from '@angular/core';

interface carouselImages{
  imageSrc : String;
  imageAlt : String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  images = [
    {imageSrc:'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg', imageAlt: 'HTML5',},

    {imageSrc:'https://www.mistersito.com/wp-content/uploads/2024/03/Cose-CSS-e-a-cosa-serve.jpg', imageAlt: 'CSS3"',},

    {imageSrc:'https://cpi.ch/wp-content/uploads/2021/07/Angular.png', imageAlt: 'Angul',},

    {imageSrc:'https://www.aktsrl.com/wp-content/uploads/2022/05/img-articolo-java-1080x675.jpg', imageAlt: 'Java',},

    {imageSrc:'https://miro.medium.com/v2/resize:fit:1400/1*s3MMwv-yHtRxyEPUrPX3ew.png', imageAlt: 'JavaS',}
  ]

  project = null

  activeTab: string = 'profile';
  @Input() image: carouselImages[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide: boolean = true; // Abilita auto-slide di default
  @Input() slideInterval =3500; //intervallo delle foto di 3 secondi

  selectedIndex = 0;


  showTab(tabName: string) {
    this.activeTab = tabName;
  }

  ngOnInit(): void {
    if(this.autoSlide){
      this.startAutoSlide();
    }
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.onNext(); // Passa alla prossima immagine
    }, this.slideInterval); // Intervallo specificato in millisecondi
  }

  // Metodo per andare alla prossima immagine
  onNext(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length; // Loop infinito
  }

  // Metodo per andare all'immagine precedente (opzionale, ma utile per controlli manuali)
  onPrev(): void {
    this.selectedIndex =
      (this.selectedIndex - 1 + this.images.length) % this.images.length; // Gestione loop
  }

  selectedImage(index: number) : void{
    this.selectedIndex = index;
  }

}
