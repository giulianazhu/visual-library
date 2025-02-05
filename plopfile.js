import component from './plop/generators/component.js'
import controller from './plop/generators/controller.js'
import page from './plop/generators/page.js'
import feature from './plop/generators/feature.js'

export default function (plop) {
  plop.setGenerator('component', component)
  plop.setGenerator('controller', controller)
  plop.setGenerator('page', page)
  plop.setGenerator('feature', feature)
}
