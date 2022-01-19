import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  json = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
  ];
  dragEnterItem: any;
  currentDraggingItem: any;
  dragEnter(event: any, data: any) {
    this.dragEnterItem = data;
  }
  dragendFn(event: any, data: any) {
    console.log('-----------dragFn-----------');
    this.currentDraggingItem = data;
    const fatat = this.dragEnterItem;
    let a = this.json.indexOf(this.currentDraggingItem);
    let b = this.json.indexOf(fatat);
    console.log('before: ', this.json);
    console.log('clicked item: ', a, ' to: ', b);
    this.json = this.arrayMove(this.json, a, b);
    console.log('after: ', this.json);
  }

  arrayMove(arr: any, fromIndex: number, toIndex: number) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr;
  }
}
