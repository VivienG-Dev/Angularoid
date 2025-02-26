import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    pageTitle = 'About Angularoid';
    appDescription = 'A modern Angular 17 application showcasing the latest features and best practices.';

    // Information about the application that will be displayed on the about page
    applicationFeatures = [
        'Standalone components architecture',
        'Angular 17 latest features',
        'Modern routing implementation',
        'Responsive design principles'
    ];
} 