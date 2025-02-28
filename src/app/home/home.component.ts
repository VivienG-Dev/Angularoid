import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';

interface Tag {
    label: string;
    icon: string;
}

interface Post {
    title: string;
    excerpt: string;
    image: string;
    tags: string[];
    isFeatured: boolean;
    isRecommended: boolean;
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: './home.component.html'
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
            tags: ['Lifestyle', 'Health'],
            isFeatured: false,
            isRecommended: true
        },
        {
            title: 'The Best Low-Care Plants for a Happy Home',
            excerpt: 'Nullam lacinia ligula ut auctor laoreet. Integer consequat odio non luctus viverra.',
            image: this.getRandomImage(),
            tags: ['Lifestyle', 'Minimal'],
            isFeatured: false,
            isRecommended: true
        },
        {
            title: 'How to Pick The Perfect Headphones For Your Style',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: this.getRandomImage(),
            tags: ['Lifestyle', 'Style'],
            isFeatured: false,
            isRecommended: true
        },
        {
            title: 'Find the Right Sunglasses For Your Face Shape',
            excerpt: 'Suspendisse potenti. Aenean finibus velit vel mi placerat.',
            image: this.getRandomImage(),
            tags: ['Style', 'Health'],
            isFeatured: true,
            isRecommended: true
        },
        {
            title: 'Choosing the Perfect Colors for your Space',
            excerpt: 'Proin aliquam, nisi eu viverra semper, neque risus condimentum leo.',
            image: this.getRandomImage(),
            tags: ['Minimal', 'Lifestyle'],
            isFeatured: true,
            isRecommended: true
        }
    ];

    get recommendedPosts(): Post[] {
        return this.mainPosts.filter(post => post.isRecommended);
    }

    get featuredPosts(): Post[] {
        return this.mainPosts.filter(post => post.isFeatured);
    }

    summitCard = {
        title: 'Summit',
        description: 'Summit est un thème moderne et puissant avec une variété de fonctionnalités et d\'options pour construire un site unique.',
        link: '/summit'
    };

    getRandomImage(): string {
        return `https://picsum.photos/200/300?random=${Math.random()}`;
    }
}
