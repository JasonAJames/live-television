import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/views/app.component.1.html',
    styleUrls: [
        'app/ts/css/app.component.1.css',
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
    source = 'http://abcnews.go.com/live/video/special-live-1'
    stationName = 'ABC 7 News'
    title = 'SoCalTelevision'
}
