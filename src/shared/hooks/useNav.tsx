import { Route } from '@app-types/global'
import { useSeoContext } from 'core/providers/seo'
import { useNavigate } from 'react-router'

export interface useNavProps {}

function useNav(route: Route) {
  const navigate = useNavigate()
  const { setTitle } = useSeoContext()
  const redirectTo = () => {
    navigate(route.url)
    setTitle(route.menu())
  }
  return redirectTo
}

export default useNav
