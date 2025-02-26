import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    welcomeMessage = 'Welcome to Angularoid';
    appDescription = 'A modern Angular 17 application showcasing the latest features and best practices.';

    // Features to display on the home page
    applicationFeatures = [
        {
            title: 'Standalone Components',
            description: 'Built with Angular 17\'s standalone component architecture for better modularity.'
        },
        {
            title: 'Modern Routing',
            description: 'Implements the latest Angular routing capabilities for seamless navigation.'
        },
        {
            title: 'Responsive Design',
            description: 'Fully responsive layout that works on all device sizes.'
        },
        {
            title: 'Performance Optimized',
            description: 'Optimized for speed and performance using Angular best practices.'
        }
    ];
} 