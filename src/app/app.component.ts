import { Component } from '@angular/core';
import { Project } from './models/project';
import { platform } from './models/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CristianVrgas';
  projects: Project[] = [
    {
      title: 'Discord bot',
      description:
        'This is a bot which plays music from url(Youtube, Spotify) and ChatGPT conversation',
      imgUrl: 'assets/Discordbot.png',
      githubCode: 'https://github.com/CVrgas/Discordbot',
      PreviewUrl: '',
    },
    {
      title: 'Library Management',
      description:
        'a online library where u can search, download books and apply for a physical copy.',
      imgUrl: 'assets/LibraryProjectSS.png',
      githubCode: 'https://github.com/CVrgas/library-management',
      PreviewUrl: 'https://cvrgas.github.io/library-management/',
    },
    {
      title: 'Weather App',
      description:
        'a user-friendly interface where individuals can search for and retrieve weather data for various locations using OpenWeather API.',
      imgUrl: 'assets/own_weatherApp.png',
      githubCode: 'https://github.com/CVrgas/Weather',
      PreviewUrl: 'https://cvrgas.github.io/Weather/',
    },
    {
      title: 'Collection Managar',
      description:
        'this React-Electron app will provide a convenient and efficient way for coin collectors to store, manage, and organize their coin collections on their desktop computers.',
      imgUrl: 'assets/MyCoinCollection.png',
      githubCode: 'https://github.com/CVrgas/Numismatics-ColletionManager',
      PreviewUrl: '',
    },
  ];
  platforms: platform[] = [
    {
      name: 'pluralsight',
      profileUrl: 'https://app.pluralsight.com/profile/cvrgas#0',
      iconUrl: 'assets/PS_logo_F-14.png',
    },
    {
      name: 'Alura-oracle',
      profileUrl: 'https://app.aluracursos.com/user/CristianVargas',
      iconUrl: 'assets/logo-aluraespanhol.svg',
    },
  ];
  // ng deploy --base-href=/ProfilePage/
}
