import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/providers/auth/auth';
import { File } from 'src/app/core/providers/file/file';
import { IImage } from 'src/interface/image.interface';
import { GlobalUrl } from 'src/app/core/providers/globalUrl/global-url';
import { UpLoader } from 'src/app/core/providers/upLoader/up-loader';
import { Language } from 'src/app/core/providers/language/language';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
   public img!: IImage;
  // public imgUrl: string[] = [];
  public image: string = '';

  constructor(private readonly authSrv: Auth,
    private readonly router: Router,
    private readonly fileSrv: File,
    private readonly uploadersrv:UpLoader,
    private readonly urlSrv: GlobalUrl,
    private readonly langSrv: Language,
  ) { }

  ngOnInit() {

  }
   public languageChanger(event: any){
    const el = event.currentTarget as HTMLElement;
    const lang = el.getAttribute('data-lang');
    this.langSrv.changeLang(lang ?? 'en');
  }

  public async Salteya(){
   await this.authSrv.logOut();
    this.router.navigate(['/login']);
  }

  public async pickImage(){
     this.img = await this.fileSrv.pickImage();

   const path = await this.uploadersrv.upload('images',
       `${Date.now()}-${this.img.name}`,
       this.img.mimeType,
       this.img.data);
       console.log(path);

       this.image = await this.uploadersrv.getUrl('images', path);

       this.urlSrv.setUrl(this.image); 
       this.urlSrv.addUrl(this.image);

  }
}
