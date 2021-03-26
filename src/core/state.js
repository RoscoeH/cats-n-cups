import { Game } from "./game";
import Observable from "./observable";

export const progress = new Observable(null);
export const game = new Observable(new Game());
