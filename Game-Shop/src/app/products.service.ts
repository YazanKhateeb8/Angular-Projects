import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}
  getCategory() {
    return [
      //*******************Action*******************//
      new Category('12231' , 'God of war' ,59.99 ,'Action' , 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg' ,'God of War[a] is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive '),
      new Category('24242' , 'KENA' ,59.99 ,'Action' , 'https://image.api.playstation.com/vulcan/ap/rnd/202102/2307/kQzDCY5RCrSXCeeFjPGUzkGI.png' ,'Kena: Bridge of Spirits is an upcoming action-adventure game developed and published by Ember Lab '),
      new Category('35433' , 'Horizon Forbidden West' ,89.99 ,'Action' , 'https://blog.playstation.com/tachyon/2021/05/51207430488_575c778894_k.jpg?resize=1088,612&crop_strategy=smart' ,'Horizon Forbidden West is an action role-playing game played from the third-person perspective. ' ),
      new Category('43532' , 'Senua’s Saga' ,59.99 ,'Action' , 'https://i.ytimg.com/vi/kQf-FmKa-rA/maxresdefault.jpg' ,'Hellblade: Senua s Sacrifice is a dark fantasy action-adventure game developed and published by the British video game development studio Ninja Theory.'),
      new Category('52222' , 'Dying Light 2' ,49.99,'Action' , 'https://cdn.cloudflare.steamstatic.com/steam/apps/534380/capsule_616x353.jpg?t=1622226446' ,'Dying Light 2 Stay Human is an upcoming survival horror action role-playing game developed and published by Techland.'),
       //*******************Strategy*******************//
       new Category('159' , 'raise of nations' ,53.99 ,'Strategy' , 'https://upload.wikimedia.org/wikipedia/en/d/d0/Rise_of_Nations_Coverart.png' ,'Rise of Nations is a real-time strategy video game, developed by Big Huge Games and published by Microsoft Game Studios '),
       new Category('357' , 'XCOM 2' ,74.99 ,'Strategy' , 'https://image.api.playstation.com/cdn/UP1001/CUSA04552_00/YIAf9nOLzXPWE1PLeUZdECan8mtDnBOFTqj1irmxlsVirfuyGRBhNqQxRAtrWdg3.png' ,'XCOM 2 is a 2016 turn-based tactics video game developed by Firaxis Games and published by 2K Games.'),
       new Category('785' , 'crusader kings 3' ,99.99 ,'Strategy' , 'https://www.godisageek.com/wp-content/uploads/Crusader-Kings-3-Main.jpg' ,'The game, like its predecessors Crusader Kings and Crusader Kings II, is a grand strategy game and dynasty' ),
       new Category('345' , 'Age of Empires IV' ,59.99 ,'Strategy' , 'https://s1.gaming-cdn.com/images/products/2244/271x377/age-of-empires-iv-cover.jpg' ,'Most game mechanics will migrate directly from Age of Empires II (as the most successful game in the series).'),
       new Category('197' , 'Age of wonders planetfall' ,40.99,'Strategy' , 'https://image.api.playstation.com/vulcan/img/rnd/202010/0811/HU2Fos3vDuPQeuo3UvWPyFd2.png' ,'The game featured six different factions at launch, with each having different units and gameplay'),
       //*******************Racing*******************//
      new Category('1254321' , 'forza horizon 4' ,159.00 ,'Racing' , 'https://compass-ssl.xbox.com/assets/6a/31/6a31393d-b0cc-4833-8e82-fd3a2c6b6e19.jpg?n=FH4_GLP-Page-Hero-1084_1920x1080_02.jpg' ,'Forza Horizon 4 is a 2018 racing video game developed by Playground Games and published by Microsoft Studios.[3] It was released on 2 October 2018  '),
      new Category('2452342' , 'need for speed heat(DELUXE EDITION)' ,259.99 ,'Racing' , 'https://image.api.playstation.com/vulcan/img/cfn/11307R87SrW3Yr7RA9ESXk5WOEB8ObJ6j7fbURaqaxjNbd_47opwybMB8knvffi9aySGNlrBopb6qS4YClmwt-IcDbcjDekI.png' ,'Need for Speed Heat (stylized as NFS Heat) is a racing video game developed by Ghost Games and published by Electronic Arts '),
      new Category('3123433' , 'the crew 2' ,199.99 ,'Racing' , 'https://sm.ign.com/t/ign_il/screenshot/default/czn_t1jw.1280.jpg' ,'Similar to its predecessor, The Crew 2 is a racing game. In the game, players assume control of a racer, who is trying to work their way to become successful in multiple disciplines' ),
      new Category('4343232' , 'DIRT 5' ,59.99 ,'Racing' , 'https://image.api.playstation.com/vulcan/img/rnd/202105/1013/lbjULc0FG2krMv1pMk0uDJ9m.jpg?w=440' ,'Dirt 5 is a racing game focused on off-road racing. Disciplines within the game include rallycross, ice racing, Stadium Super Trucks and off-road buggies.'),
      new Category('5234122' , 'RIDE 4' ,59.99,'Racing' , 'https://ridevideogame.com/wp-content/uploads/Ride4-share.jpg' ,'Ride is a motorcycle racing video game developed and published by Milestone srl. The game was released on March 27, 2015'),
      //*******************Sport*******************//
      new Category('1254321' , 'FIFA 21' ,219.99 ,'Sport' , 'https://images.vgames.co.il/main_image/900_600/main_26945_1596641151.jpeg' ,'FIFA 21 is a football simulation video game published by Electronic Arts as part of the FIFA series.[1] It is the 28th installment in the FIFA series'),
      new Category('2452342' , 'football manager 2021' ,120.99 ,'Sport' , 'https://cdn.cloudflare.steamstatic.com/steam/apps/1263850/capsule_616x353.jpg?t=1612352842' ,'Football Manager 2021 (officially abbreviated as FM21) is a football-management simulation video game developed by Sports Interactive and published by Sega​'),
      new Category('3123433' , 'NBA 2K21' ,199.99 ,'Sport' , 'https://cdn2.unrealengine.com/2ksmkt-nba2k21-epic-set-up-assets-std-cg-blog-share-image-1920x1080-1920x1080-d46c9713e326.jpg' ,'NBA 2K21 is a basketball simulation video game that was developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA)' ),
      new Category('4343232' , 'PGA tour 2k21' ,89.99 ,'Sport' , 'https://www.golfchannel.com/sites/default/files/2020/05/14/PGA%20TOUR%202K21%20Key%20Art%201920x1080.jpg' ,'PGA Tour 2K21 is a sports video game developed by HB Studios and published by 2K Sports for Stadia, Microsoft Windows'),
      new Category('5234122' , 'SUPER MEGA BASEBALL 3' ,59.99,'Sport' , 'https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/super-mega-baseball-3-switch/super-mega-baseball-3-switch-hero.jpg' ,'Metalhead Software announced the launch of their latest game in the baseball series, Super Mega Baseball 3, on March 11, 2020. The game was set for release in April 2020,'),
    ]
    }
    //Funcion for newest 5 products #Homepage//
  getHome1() {
    return [
      new Category('1215428' , 'call of duty modern warfare' ,199.99 ,'Action' , 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg' ,'Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision.'),
      new Category('4323748' , 'battlefield V' ,299.99 ,'Action' , 'https://media.contentapi.ea.com/content/dam/bf/images/2020/10/bfv-web-1920x1080-definitiveedition.jpg.adapt.crop16x9.431p.jpg' ,'Battlefield V is a first-person shooter video game developed by EA DICE and published by Electronic Arts.'),
      new Category('4423781' , 'need for speed Rivals' ,159.99 ,'Racing' , 'https://media.contentapi.ea.com/content/dam/gin/common/packart/nfs-rivals-gen-packart.jpg' ,'Need for Speed Rivals is a racing video game developed in a collaboration between Ghost Games and Criterion Games'),
      new Category('315' , 'War of the Sea' ,129.99 ,'Strategy' , 'https://i1.wp.com/www.newgamesbox.net/wp-content/uploads/2020/10/War-On-The-Sea-Free-Download.jpg?fit=600%2C856&ssl=1' ,'War at Sea is a strategic board wargame depicting the naval war in the Atlantic during World War II, published by Jedko Games in 1975 '),
      new Category('5242471' , 'WWE 2K20' ,99.99,'Sport' , 'https://i.pinimg.com/474x/80/dd/63/80dd637c13267a236d30ba5d7a232875.jpg' ,'WWE 2K20 is a professional wrestling video game developed by Visual Concepts and published by 2K Sports.'),
    ]
}
//Funcion for Products on sale #Homepage//
getHome2() {
  return [
    new Category('12231' , 'God of war' ,29.99 ,'Action' , 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg' ,'God of War[a] is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive '),
    new Category('345' , 'Age of Empires IV' ,29.99 ,'Strategy' , 'https://s1.gaming-cdn.com/images/products/2244/271x377/age-of-empires-iv-cover.jpg' ,'Most game mechanics will migrate directly from Age of Empires II (as the most successful game in the series).'),
    new Category('24242' , 'KENA' ,59.99 ,'Action' , 'https://image.api.playstation.com/vulcan/ap/rnd/202102/2307/kQzDCY5RCrSXCeeFjPGUzkGI.png' ,'Kena: Bridge of Spirits is an upcoming action-adventure game developed and published by Ember Lab '),
    new Category('3123433' , 'NBA 2K21' ,99.99 ,'Sport' , 'https://cdn2.unrealengine.com/2ksmkt-nba2k21-epic-set-up-assets-std-cg-blog-share-image-1920x1080-1920x1080-d46c9713e326.jpg' ,'NBA 2K21 is a basketball simulation video game that was developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA)' ),
    new Category('2452342' , 'need for speed heat' ,139.99 ,'Racing' , 'https://image.api.playstation.com/vulcan/img/cfn/11307R87SrW3Yr7RA9ESXk5WOEB8ObJ6j7fbURaqaxjNbd_47opwybMB8knvffi9aySGNlrBopb6qS4YClmwt-IcDbcjDekI.png' ,'Need for Speed Heat (stylized as NFS Heat) is a racing video game developed by Ghost Games and published by Electronic Arts '),
  ]
}
}
    export class Category{
      SerialNumber:string;
      Name:string;
      Price:number;
      Category:string;
      imgUrl:string;
      description:string;
    
  constructor(
  SerialNumber : string,
  Name : string,
  Price : number,
  Category : string,
  imgUrl : string,
  description : string,
  ) {
    this.SerialNumber=SerialNumber;
    this.Name=Name;
    this.Price=Price;
    this.Category=Category;
    this.imgUrl=imgUrl;
    this.description=description;

    
  }

}
