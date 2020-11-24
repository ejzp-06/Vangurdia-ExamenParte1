import { Song } from './song';

export class Album {
    id: number;
    name: string;
    author: string;
    price: number;
    genre: string;
    points: number;
    launchDate: string;
    description: string;
    bought: boolean;
    songs: Array<Song>;
}
