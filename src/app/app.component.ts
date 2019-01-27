import { FileService } from './file.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-electron';

  constructor(private readonly _ipc: FileService) {
    this._ipc.on('pong', (event: Electron.IpcMessageEvent) => {
      console.log('pong');
    });

    this._ipc.send('ping');
  }
}
