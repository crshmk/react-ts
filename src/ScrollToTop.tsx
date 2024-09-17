/**
 * scroll to top of page on route change
 */
import React, { Component, Fragment } from 'react'
import { useLocation } from 'react-router-dom'

class ScrollToTop extends Component<ScrollToTopProps> {
	componentDidUpdate(prevProps: ScrollToTopProps) {
		if (this.props.pathname !== prevProps.pathname) {
      setTimeout(() => {window.scrollTo(0, 0)}, 0)
		}
	}

	render() {
		return <Fragment />
	}
}

export default function() {
  const { pathname } = useLocation()
  
  return <ScrollToTop pathname={pathname} />
}

interface ScrollToTopProps {
  pathname: string
}

/*
causes flashing; use a class
const ScrollToTop = ({ location }) => {
  useEffect(scroll, [location])
  return <Fragment />
}
*/