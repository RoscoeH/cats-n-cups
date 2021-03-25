import Observable from "./observable";
import Progress from "./progress";

export const progress = new Observable(new Progress());
export const game = new Observable(null);
