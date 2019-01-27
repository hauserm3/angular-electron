import { Injectable } from '@angular/core';
import { IpcRenderer } from "electron";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private ipc: IpcRenderer | undefined;

  constructor() {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require("electron").ipcRenderer;
      } catch (error) {
        throw error;
      }
    } else {
      console.warn("Could not load electron ipc");
    }
  }

  public on(channel: string, listener: any): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.on(channel, listener);
  }

  public send(channel: string, ...args): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.send(channel, ...args);
  }
}
