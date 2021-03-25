import { Game } from "./game";
import Observable from "./observable";
import Progress from "./progress";

export const progress = new Observable(new Progress());
export const game = new Observable(new Game());
