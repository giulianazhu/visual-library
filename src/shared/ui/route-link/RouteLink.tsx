import { Route } from '@app-types/global'
import { useSeoContext } from 'core/providers/seo'
import { NavLink } from 'react-router'
import style from './styles.module.scss'

interface RouteLinkProps extends React.PropsWithChildren {
  route: Route
}

function RouteLink({ route, children }: RouteLinkProps) {
  const { setTitle } = useSeoContext()
  return (
    <NavLink to={route.url} className={style['nav-link']} onClick={() => setTitle(route.menu())}>
      {children}
    </NavLink>
  )
}

export default RouteLink
