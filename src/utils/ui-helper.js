export function scrollTo(element, to, duration) {
  if (duration <= 0) return
  let difference = to - element.scrollTop
  let perPick = difference / duration * 10

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perPick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 10)
  }, 10)
}