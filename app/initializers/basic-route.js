import BasicRoute from "../routes/custom-base";

export function initialize(application) {
  application.register('route:basic', BasicRoute);
}

export default {
  name: 'basic-route',
  initialize
};
