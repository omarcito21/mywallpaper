import { Component, OnInit } from '@angular/core';
import plugin from 'src/app/plugins/plugin';
import { Preferences } from '@capacitor/preferences';
import { GlobalUrl } from 'src/app/core/providers/globalUrl/global-url';

@Component({
  selector: 'app-sheet-modal',
  templateUrl: './sheet-modal.component.html',
  styleUrls: ['./sheet-modal.component.scss'],
  standalone: false
})
export class SheetModalComponent  implements OnInit {
   public actionSheetButtons = [
    {
      text: 'Call Plugin',
      role: 'Llamar plugin',
      handler: () =>{
        this.callPlugin();
      }
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

    public async callPlugin(){
     const url = this.urlSrv.getUrl();
     console.log(url);
    console.log('Calling plugin...');
    await Preferences.set({
      key: 'url',
      value: url,
    })
    const resp = await plugin.execute();
    console.log('LOG: RESPONSE FROM PLUGIN', JSON.stringify(resp));

  }
  constructor(private readonly urlSrv: GlobalUrl) { }

  ngOnInit() {}

}