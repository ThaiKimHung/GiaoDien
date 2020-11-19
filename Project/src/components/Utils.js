function goscreen(nthis, routeName, param = null) {
  if (param == null) nthis.props.navigation.navigate(routeName);
  else nthis.props.navigation.navigate(routeName, {...param});
}
