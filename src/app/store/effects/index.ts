import { UsersEffects } from './users.effects';
import { UserEffects } from './user.effects';

export const appEffects = [
  UsersEffects,
  UserEffects
];

export * from './users.effects';
export * from './user.effects';
