import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        // Check network speed before preloading
        const connection = (navigator as any).connection;
        console.log(connection);
        console.log(connection.effectiveType);
        if (route.data && route.data['preload'] && connection && connection.effectiveType === '4g') {
            // Preload only on 4G or better
            return load();
        } else {
            return of(null);
        }
    }
}

