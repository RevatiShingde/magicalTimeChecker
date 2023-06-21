import { Component } from '@angular/core';

@Component({
  selector: 'app-magical-time-checker',
  templateUrl: './magical-time-checker.component.html',
  styleUrls: ['./magical-time-checker.component.scss']
})
export class MagicalTimeCheckerComponent {
  startTime: string = '';
  endTime: string = '';
  resultVisible: boolean = false;
  magicalTimes: string[] = [];

  TimeSubmit() {
    this.resultVisible = false;
    this.magicalTimes = [];

    if (!this.validateTimeFormat(this.startTime) || !this.validateTimeFormat(this.endTime)) {
      alert('Invalid time format! Please use the format HH:MM:SS.');
      return;
    }

    const startSeconds = this.getSecondsFromTime(this.startTime);
    const endSeconds = this.getSecondsFromTime(this.endTime);

    if (startSeconds > endSeconds) {
      alert('End Time should be greater than Start Time.');
      return;
    }

    for (let i = startSeconds; i <= endSeconds; i++) {
      const time = this.getTimeFromSeconds(i);
      const uniqueDigitsCount = this.getUniqueDigits(time);

      if (uniqueDigitsCount <= 2) {
        this.magicalTimes.push(time);
      }
    }
    this.resultVisible = true;
  }

  validateTimeFormat(time: string): boolean {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    return regex.test(time);
  }

  getSecondsFromTime(time: string): number {
    const [hours, minutes, seconds] = time.split(':');
    return parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
  }

  getTimeFromSeconds(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(remainingSeconds)}`;
  }

  getUniqueDigits(time: string): number {
    const digits = time.replace(/:/g, '');
    const uniqueDigits = new Set(digits);
    return uniqueDigits.size;
  }

  padZero(number: number): string {
    return number.toString().padStart(2, '0');
  }
}