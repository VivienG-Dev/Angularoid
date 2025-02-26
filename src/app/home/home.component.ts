import { Component } from '@angular/core';

interface Tag {
    label: string;
    icon: string;
}

interface Post {
    title: string;
    excerpt: string;
    image: string;
    tags: string[];
}

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    tags: Tag[] = [
        { label: 'Travel', icon: this.getRandomImage() },
        { label: 'Lifestyle', icon: this.getRandomImage() },
        { label: 'Minimal', icon: this.getRandomImage() },
        { label: 'Style', icon: this.getRandomImage() },
        { label: 'Health', icon: this.getRandomImage() },
        { label: 'Fitness', icon: this.getRandomImage() }
    ];

    mainPosts: Post[] = [
        {
            title: 'Simple Ways To Show Your Love',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pulvinar leo, eget euismod tortor.',
            image: this.getRandomImage(),
            tags: ['Lifestyle', 'Health']
        },
        {
            title: 'The Best Low-Care Plants for a Happy Home',
            excerpt: 'Nullam lacinia ligula ut auctor laoreet. Integer consequat odio non luctus viverra.',
            image: this.getRandomImage(),
            tags: ['Lifestyle', 'Minimal']
        }
    ];

    featuredPosts: Post[] = [
        {
            title: 'How to Pick The Perfect Headphones For Your Style',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: this.getRandomImage(),
            tags: ['Lifestyle', 'Style']
        },
        {
            title: 'Find the Right Sunglasses For Your Face Shape',
            excerpt: 'Suspendisse potenti. Aenean finibus velit vel mi placerat.',
            image: this.getRandomImage(),
            tags: ['Style', 'Health']
        },
        {
            title: 'Choosing the Perfect Colors for your Space',
            excerpt: 'Proin aliquam, nisi eu viverra semper, neque risus condimentum leo.',
            image: this.getRandomImage(),
            tags: ['Minimal', 'Lifestyle']
        }
    ];

    summitCard = {
        title: 'Summit',
        description: 'Summit est un thème moderne et puissant avec une variété de fonctionnalités et d’options pour construire un site unique.',
        link: '/summit'
    };

    getRandomImage(): string {
        // Option 1: Using Lorem Picsum (random images)
        return `https://picsum.photos/200/300?random=${Math.random()}`;

        // Option 2: Using Unsplash Source (random images)
        // return `https://source.unsplash.com/random/3x50?sig=${Math.random()}`;

        // Option 3: Using Placeholder.com
        // return `https://via.placeholder.com/50x50?text=${Math.random().toString(36).substring(7)}`;
    }
}
