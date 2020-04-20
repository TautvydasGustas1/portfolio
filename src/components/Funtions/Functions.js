export function handleScrollTo(ref, offset) {
  window.scrollTo({
    top: ref.current.offsetTop - offset,
    behavior: "smooth",
  })
}
