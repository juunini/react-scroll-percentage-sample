function getScrollPercent(id: string) {
  const target = document.getElementById(id) as HTMLElement;
  const height = target.scrollHeight - target.clientHeight;
  const position = target.scrollTop;
  return Math.round((position / height) * 100);
}

export default getScrollPercent;
