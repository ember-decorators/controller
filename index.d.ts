import { Registry } from "@ember/controller";

/**
 * Decorator that wraps `Ember.inject.controller`
 *
 * Injects a controller into a Controller as the decorated property
 *
 *  ```javascript
 * import Controller from '@ember/controller';
 * import { controller } from 'ember-decorators/controller';
 *
 * export default class IndexController extends Controller {
 *   @controller() application;
 * }
 * ```
 *
 * @function
 * @param {String} [controllerName] - The name of the controller to inject. If not provided, the property name will be used
 */
export function controller(): PropertyDecorator;
/**
 * Decorator that wraps `Ember.inject.controller`
 *
 * Injects a controller into a Controller as the decorated property
 *
 *  ```javascript
 * import Controller from '@ember/controller';
 * import { controller } from 'ember-decorators/controller';
 *
 * export default class IndexController extends Controller {
 *   @controller() application;
 * }
 * ```
 *
 * @function
 * @param {String} [controllerName] - The name of the controller to inject. If not provided, the property name will be used
 */
export function controller<K extends keyof Registry>(
  name: K
): PropertyDecorator;
