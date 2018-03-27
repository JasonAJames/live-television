import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/views/app.component.html',
    styleUrls: [
        'app/ts/css/app.component.css',
        '/node_modules/bootstrap/dist/css/bootstrap.css',
        '/bower_components/semantic/dist/components/reset.css',
        '/bower_components/semantic/dist/components/site.css',
        '/bower_components/semantic/dist/components/container.css',
        '/bower_components/semantic/dist/components/grid.css',
        '/bower_components/semantic/dist/components/header.css',
        '/bower_components/semantic/dist/components/image.css',
        '/bower_components/semantic/dist/components/menu.css',
        '/bower_components/semantic/dist/components/divider.css',
        '/bower_components/semantic/dist/components/dropdown.css',
        'bower_components/semantic/dist/components/segment.css',
        '/bower_components/semantic/dist/components/button.css',
        'bower_components/semantic/dist/components/list.css',
        '/bower_components/semantic/dist/components/icon.css',
        '/bower_components/semantic/dist/components/sidebar.css',
        '/bower_components/semantic/dist/components/transition.css',
      ],
})

export class AppComponent {
    source = 'https://livestream.com/accounts/9262780/events/3189705/player?width=770&height=433&autoPlay=true&mute=false&customAdTagParameters=Site%3D41641936%26pid%3Don-airlive-streaming'
    stationName = 'KTLA 5'
    title = 'SoCalTelevision'
}
