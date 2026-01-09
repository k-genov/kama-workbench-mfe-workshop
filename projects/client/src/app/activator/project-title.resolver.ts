import {inject, Injectable} from '@angular/core';
import {MessageClient} from '@scion/microfrontend-platform';

@Injectable({providedIn: 'root'})
export class ProjectTitleResolver {

  constructor() {
    inject(MessageClient).onMessage('projects/:id/title', message => {
      return projects.get(message.params!.get('id')!);
    });
  }
}

const projects = new Map<string, string>()
  .set('1', 'Project Alpha')
  .set('2', 'Project Beta')
  .set('3', 'Project Gama')
  .set('4', 'Project Delta');