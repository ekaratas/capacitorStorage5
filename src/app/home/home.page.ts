import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  anahtar:string = 'user';
  id:string='1';
  name:string = 'Erinç';

  Dizi: Array<any> = [];

  constructor() {}


  ekle()
  {
    let deger = {
      id : this.id,
      name: this.name
    }
    this.Dizi.push(deger);
    
    this.diziSetObject();
  }

  async diziSetObject() {
    await Storage.set({
      key: 'capStore_'+ this.anahtar,
      value: JSON.stringify(this.Dizi)
    });
  }

  // JSON "set" example
async setObject() {
  await Storage.set({
    key: 'capStore_'+ this.anahtar,
    value: JSON.stringify({
      id: this.id,
      name: this.name
    })
  });
}

// JSON "get" example
async getObject() {
  const ret = await Storage.get({ key: 'capStore_'+ this.anahtar });
  const user = JSON.parse(ret.value);
  console.log(user);
}

  async setItem() {
    await Storage.set({
      key: 'capStore_'+ this.anahtar,
      value: this.name
    });
  }
  
  async getItem() {
    const { value } = await Storage.get({ key: 'capStore_'+ this.anahtar });
    console.log('Got item: ', value);
  }
  
  async removeItem() {
    await Storage.remove({ key: 'capStore_'+ this.anahtar });
  }
  
  async keys() {
    const { keys } = await Storage.keys();
    console.log('Got keys: ', keys);
  }
  
  async clear() {
    await Storage.clear();
  }

}
