import { Injectable } from '@angular/core';
import { Observable, Observer, ReplaySubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const WS_SERVER_URL = 'ws://animaux-attraper-duel-light.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private ws: WebSocket;
  // A ReplaySubject will emit its X latest values (1 in this case) each time
  // its 'subscribe()' method is called
  public ws$ = new ReplaySubject<WebSocket>(1);
  

  constructor() {
  
  };

  public listen<T = any>(): Observable<T> {
    // Only listen when the connection is opened

    return this.ws$.pipe(
      // Make an observable out of the websocket stream
      switchMap(socket =>
        new Observable((subscriber: Observer<MessageEvent<T>>) => {
          // When a new message is received, the Observable will emit this message
          socket.onmessage = message => subscriber.next(message);
          // When a websocket error occurs, the Observable will emit a new error
          socket.onerror = error => subscriber.error(error);
          // When the websocket closes, the observable completes
          socket.onclose = () => subscriber.complete();
          // Function that will be called if the user manually unsubscribe
          return () => socket.close();
        })
      ),
      map((event: MessageEvent<T>) => event.data)
      );
  }

  public send(data:unknown): void {
    this.ws$.subscribe(socket => {
      socket.send(JSON.stringify(data));
    })
  }

  public connect(){
    this.ws$.isStopped = false;
    const socket = new WebSocket(WS_SERVER_URL);
    socket.onopen = () => {
      console.log('Successfully connected to the WebSocket at', WS_SERVER_URL);
      // When the connection is done, emit the WebSocket instance
      this.ws$.next(socket);
    }
    // Log all messages
    socket.onmessage = message => console.log(message);
  }


  public disconnect(){
    this.ws$.subscribe((socket)=> socket.close())
    this.ws$.closed = true;
    console.log("Status : ", this.ws$.isStopped);
    this.ws$.isStopped = true;
    console.log("Status : ", this.ws$.isStopped);
  }

}
