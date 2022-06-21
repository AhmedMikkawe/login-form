function solution(iconPositionX, iconPositionY, tabPositionX, tabPositionY) {
  for (let i = 0; i < iconPositionX.length; i++) {
    let positionX = iconPositionX[i];
    let positionY = iconPositionY[i];
    if (
      correctDistance(positionX, tabPositionX) &&
      correctDistance(positionY, tabPositionY)
    ) {
      return i;
    }
  }
  return -1;
}
function correctDistance(iconPosition, tabPosition) {
  const RADIUS = 20;
  if (iconPosition == tabPosition) {
    return true;
  } else if (iconPosition + RADIUS == tabPosition) {
    return true;
  } else if (iconPosition - RADIUS == tabPosition) {
    return true;
  }
  return false;
}

console.log(solution([100, 200, 100], [50, 100, 100], 100, 100)); // 2
console.log(solution([100, 200, 100], [50, 100, 100], 100, 70)); // 0
console.log(solution([100, 200, 100], [50, 100, 100], 200, 60)); // -1
