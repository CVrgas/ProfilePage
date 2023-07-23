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
}
