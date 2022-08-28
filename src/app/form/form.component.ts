import { Component, OnInit } from '@angular/core';

type Animal<T> = {
  label: string;
  value: T;
};

type TweetState = 'normal' | 'warning' | 'error';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  user = {
    mail: undefined,
    passwd: undefined,
  };
  animalsForRadio: Animal<number>[] = [
    { label: '犬', value: 0 },
    { label: '猫', value: 1 },
    { label: 'ハムスター', value: 2 },
    { label: '金魚', value: 3 },
  ];
  selectedAnimalIndex = 0;
  animalsForCheckbox: Animal<boolean>[] = [
    { label: '犬', value: false },
    { label: '猫', value: false },
    { label: 'ハムスター', value: false },
    { label: '金魚', value: false },
  ];
  animalsForSelect: Animal<number>[] = [
    { label: '犬', value: 0 },
    { label: '猫', value: 1 },
    { label: 'ハムスター', value: 2 },
    { label: '金魚', value: 3 },
  ];
  selectedAnimalIndexForSelect = -1;
  maxTweet = 140;
  tweet = '';
  tweetState: TweetState = 'normal';
  emails = [];

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log('submit', this.user);
  }

  changeRadio(i: number) {
    console.log('changeRadio', this.animalsForRadio[i]);
  }

  changeCheckbox() {
    console.log(
      'changeCheckbox',
      this.animalsForCheckbox.filter((animal) => animal.value)
    );
  }

  changeSelect() {
    console.log(
      'changeSelect',
      this.animalsForSelect[this.selectedAnimalIndexForSelect]
    );
  }

  changeTweet() {
    const count = this.maxTweet - this.tweet.length;
    if (count > 10) {
      this.tweetState = 'normal';
    } else if (count > 0) {
      this.tweetState = 'warning';
    } else {
      this.tweetState = 'error';
    }
  }

  uploadFile(files: FileList | null) {
    console.log('uploadFile', files);
  }
}
