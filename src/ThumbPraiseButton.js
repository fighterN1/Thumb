 //父类
 export class PraiseButton {
     constructor(praiseCount) {
         this.praiseCount = isNaN(praiseCount) ? 0 : praiseCount;
     }

     favour() {
         return ++this.praiseCount;
     }
 }
//子类
 export class ThumbPraiseButton extends PraiseButton {
     favour() {
         return super.favour();
     }
 }