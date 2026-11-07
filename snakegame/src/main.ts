import { bootstrapApplication, withI18nSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { SnakeGame } from './app/main/snake-game/snake-game';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
